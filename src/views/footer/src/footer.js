import React from "react";
import "./footer.less";

const footerInfo = [
  {
    title: "中国互联网举报中心",
    img: "//mat1.gtimg.com/www/images/qq2012/buliang.png",
    href: "https://www.12377.cn/",
  },
  {
    title: "中国文明网传播文明",
    img: "//mat1.gtimg.com/www/images/qq2012/wmlogo.gif",
    href: "https://www.wenming.cn/",
  },
  {
    img: "//mat1.gtimg.com/www/images/qq2012/cxrz5.png",
    href: "https://ss.knet.cn/verifyseal.dll?sn=2010051300100001081&ct=df&a=1&pa=337337",
  },
  {
    title: "工商网监电子标识",
    img: "//mat1.gtimg.com/www/images/qq2012/gswj2015.jpg",
    href: "https://szcert.ebs.org.cn/6917b6fe-b844-4e12-97c5-85b8d1df30ed",
  },
];

export default function Footer() {
  return (
    <div className="footer">
      <p>
        关于我们 | About Guangdong University of Finance Economics | 服务协议 |
        隐私政策 | 开放平台 | 广告服务 | 客服中心 | 网站导航
      </p>
      <p>Copyright © 1998 - 2022 LZZ. All Rights Reserved</p>
      <p>广东财经大学 版权所有</p>
      <div className="footernewdiv">
        {footerInfo.map((item) => {
          return (
            <div className="certificate" key={item.img}>
              <a href={item.href}>
                <img src={item.img} alt={item.title} />
                {item.title && <span>{item.title}</span>}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
