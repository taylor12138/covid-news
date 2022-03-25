import React, { useState, useEffect } from "react";
import { List } from "antd";

import { getPeople } from "@/network";

export default function People() {
  const [currentList, setCurrentList] = useState([]);
  useEffect(() => {
    async function getData() {
      const peopleData = await getPeople;
      setCurrentList(peopleData.data || []);
    }
    getData();
    return () => {};
  }, []);

  return (
    <div className="people">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={currentList}
        renderItem={(item) => (
          <a href={item.url}>
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={
                    item.image ||
                    "https://pics6.baidu.com/feed/d833c895d143ad4b58150c07f98c33a9a50f0656.jpeg?token=d7a4a43b994081e02b5c2e1c22a51608"
                  }
                />
              }
            >
              <List.Item.Meta title={item.title} description={item.keywords} />
              {item.desc}
            </List.Item>
          </a>
        )}
      />
    </div>
  );
}
