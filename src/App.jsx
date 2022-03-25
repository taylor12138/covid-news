import React from 'react'
import { HashRouter} from "react-router-dom";

import '@/views/App/App.less'
import Tab from '@/views/tab';
import Swiper from '@/views/swiper';
import More from '@/views/more';
import Footer from '@/views/footer';
import Router from '@/router';

export default function App() {
  return (
    <div style={{ width: '100%' }} className="app">
      <HashRouter>
        <Tab></Tab>
        <Swiper></Swiper>
        <More></More>
        <Router></Router>
        <Footer></Footer>
      </HashRouter>
    </div>
  )
}
