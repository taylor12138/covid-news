import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Image } from "antd";

import { getFront } from "@/network";
import "./swiper.less";

export default function Swiper() {
  const [swiperContent, setSwiperContent] = useState([]);
  useEffect(() => {
    async function getData() {
      const frontData = await getFront;
      setSwiperContent(frontData.data.list);
    }
    getData();
  }, []);

  return (
    <div className="swiper">
      <div className="left">
        <Carousel style={{ height: "100%" }} autoplay>
          {swiperContent.map((item) => {
            return (
              <a className="inner" key={item.article_id} href={item.url}>
                <div className="inner-img">
                  <Image height={"100%"} width={"100%"} src={item.img} />
                </div>
                <div className="content">
                  <p>{item.title}</p>
                  <p>{item.publish_time}</p>
                </div>
              </a>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
