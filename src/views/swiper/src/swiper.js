import React, { useEffect, useState, useCallback, useRef } from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";

import { getFront } from "@/network";
import "./swiper.less";

export default function Swiper() {
  const [swiperContent, setSwiperContent] = useState([]);
  const containerSwiper = useRef(null);
  useEffect(() => {
    async function getData() {
      const frontData = await getFront;
      setSwiperContent(frontData.data.list);
    }
    getData();
  }, []);
  const leftClick = useCallback(() => {
    containerSwiper.current.prev();
  }, []);
  const rightClick = useCallback(() => {
    containerSwiper.current.next();
  }, []);
  return (
    <div className="swiper">
      <div className="left">
        <Carousel style={{ height: "100%" }} autoplay ref={containerSwiper}>
          {swiperContent.map((item) => {
            return (
              <div className="inner" key={item.article_id}>
                <div className="inner-img">
                  <Image height={"100%"} width={"100%"} src={item.img} />
                </div>
                <a href={item.url}>
                  <div className="content">
                    <p>{item.title}</p>
                    <p>{item.publish_time}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </Carousel>
        <StepBackwardOutlined className="left-icon" onClick={leftClick} />
        <StepForwardOutlined className="right-icon" onClick={rightClick} />
      </div>
    </div>
  );
}
