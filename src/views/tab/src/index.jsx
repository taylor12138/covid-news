import React, {useState, useCallback, useEffect, useRef} from 'react'
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import TWEEN from '@tweenjs/tween.js'
import { connect } from 'react-redux'

import './index.less';
import {throttle} from '@/common/common';

const tabOptions = [
  {
    key: 'news',
    title: '新闻时事',
    to:'/'
  },
  {
    key: 'rumour',
    title:'谣言合集',
    to:'/rumour'
  },
  {
    key: 'people',
    title:'抗疫先进人物',
    to:'/people'
  },
  {
    key: 'vaccine',
    title:'疫苗 | 防护小知识',
    to:'/vaccine'
  },
  {
    key: 'map',
    title: '疫情实时地图',
    href: 'http://124.221.135.88/health/#/sreenshow'
  },
]

/*animation************** */
// function scrollAnimation(turnY, time) {
//   const n = 25;
//   let i = 0
//   let currentTop = window.scrollY;
//   const s=(turnY-currentTop)/n
//   const timer = setInterval(() => {
//     if (i === n) window.clearInterval(timer)
//     i++
//     window.scrollTo(0,currentTop+s*i)
//   }, time / n);
// }
function scrollAnimation(turnY, time) {
  function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
  }
  requestAnimationFrame(animate)
  
  const coords = {y:window.scrollY}
  const tween = new TWEEN.Tween(coords)
    .to({y: turnY}, time)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(() => {
      window.scroll(0,coords.y)
    })
    .start() // Start the tween immediately.
}
/*animation************** */

function Tab(props) {
  const [currentTab, setcurrentTab] = useState(tabOptions[0].key)
  const TabRef = useRef(null);
  useEffect(() => {
    if(props.location?.pathname && props.location?.pathname !== '/')
      setcurrentTab(props.location.pathname.slice(1))
  }, [props.location.pathname])
  
  const handleTabClick = useCallback(throttle((e) => {
    console.log(e);
    setcurrentTab(e.key)
    const turnY = props.routerOffsetTop - TabRef.current.offsetHeight - TabRef.current.offsetTop
    //跳转到顶部
    if (e.key === 'news') {
      scrollAnimation(0, 500)
    } else {
      //跳转到router
      scrollAnimation(turnY, 500)
      props.history.push(`/${e.key}`)
    }
  }), [props.routerOffsetTop])
  return (
    <div className='tab' ref={TabRef}>
      <header >
      <Menu mode="horizontal" selectedKeys={[currentTab]} onClick={handleTabClick} theme="dark">
          {tabOptions.map(item => {
            return (item.href !== undefined) ? <Menu.Item key={item.key}>
            <a href={item.href} rel="noopener noreferrer">
              {item.title}
            </a>
          </Menu.Item> : <Menu.Item key={item.key}>
            {item.title}
          </Menu.Item>
        })}
        </Menu>
        <div className='icon' />
      </header>
    </div>
  )
}

function mapStateToProps(state) {
  return { routerOffsetTop:  state.routerOffsetTop}
}
export default connect(mapStateToProps)(withRouter(Tab))
