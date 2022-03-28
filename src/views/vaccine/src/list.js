import React, { useEffect, useState } from "react";
import { List, Card } from "antd";

import { getVaccine, getDefend } from "@/network";
import "./list.less";

const { Meta } = Card;

export default function MyList() {
  const [currentList, setCurrentList] = useState([]);
  const [defendCard, setDefendCard] = useState([]);
  useEffect(() => {
    async function getData() {
      const vaccineData = await getVaccine;
      const defendData = await getDefend;
      const defendArr = defendData?.data?.fetchGoodsGuide;
      const vaccineArr = vaccineData?.data?.getWikiList?.result;

      /*********************数据处理***************************/
      let rg = /\d{2,}/;
      vaccineArr.forEach((item) => {
        const id = item.linkUrl.match(rg);
        item.linkUrl = `https://m.dxy.com/article/${id}?noNcov=true`;
      });
      /*********************数据处理***************************/
      setCurrentList(vaccineArr || []);
      setDefendCard(defendArr);
    }
    getData();
    return () => {};
  }, []);

  return (
    <div className="mylist">
      <List
        bordered={true}
        itemLayout="vertical"
        size="large"
        dataSource={currentList}
        footer={
          <div className="defend">
            {defendCard.map((item) => {
              return (
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={item.contentImgUrls[0]} />}
                  key={item.title}
                >
                  <Meta title={item.categoryName} description={item.title} />
                </Card>
              );
            })}
          </div>
        }
        renderItem={(item) => (
          <div className="router-list-item">
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  height={154}
                  alt="logo"
                  src={
                    item.imgUrl ||
                    "https://p9.itc.cn/images01/20210508/29c2e5e4f6d24900b88181fa41de68b7.jpeg"
                  }
                />
              }
            >
              <List.Item.Meta title={<a href={item.linkUrl}>{item.title}</a>} />
              {item.description}
            </List.Item>
          </div>
        )}
      />
    </div>
  );
}
