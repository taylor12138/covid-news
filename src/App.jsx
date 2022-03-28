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
      <HashRouter>
        <div style={{ width: '100%', paddingBottom: '1rem' }} className="app">
        <Tab></Tab>
        <Swiper></Swiper>
        <More></More>
        <Router></Router>
        </div>
        <Footer></Footer>
      </HashRouter>
  )
}
