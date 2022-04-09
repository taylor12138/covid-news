import React, { useState, useEffect, useCallback } from "react";
import { FastForwardOutlined } from "@ant-design/icons";

import "./box.less";

export default function Box(props) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(props.children.name !== "");
  }, [props.children]);
  const goRight = useCallback(() => {
    if (isShow) return;
    props.moreGoRight(props.row);
  }, [props, isShow]);
  return (
    <div className={`box ${isShow ? "active" : ""}`} onClick={goRight}>
      {isShow ? (
        <img src={props.children.img} alt={props.children.name} />
      ) : (
        <FastForwardOutlined style={{ fontSize: "1rem" }} />
      )}
    </div>
  );
}
