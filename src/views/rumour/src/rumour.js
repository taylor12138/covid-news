import React, { useEffect, useState } from "react";
import { List } from "antd";

import { getRumour } from "@/network";
import "./rumour.less";

export default function Rumour() {
  const [currentList, setCurrentList] = useState([]);
  useEffect(() => {
    async function getData() {
      const rumourData = await getRumour;
      setCurrentList(rumourData.data);
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
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 9,
        }}
        dataSource={currentList}
        renderItem={(item) => (
          <div className="router-list-item">
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={
                    item.imgUrl ||
                    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fhainan%2Ftransform%2F266%2Fw640h426%2F20180730%2FAxTZ-hfxsxzi0662459.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650594327&t=008b455fd1c2b59818adab45eb9332eb"
                  }
                />
              }
            >
              <List.Item.Meta
                title={item.title}
                description={item.mainSummary}
              />
              {item.body}
            </List.Item>
          </div>
        )}
      />
    </div>
  );
}
