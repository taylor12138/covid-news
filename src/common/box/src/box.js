import React, { useState, useEffect } from "react";

import "./box.less";

export default function Box(props) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(props.children.name !== "");
  }, [props]);

  return (
    <div className={`box ${isShow ? "active" : ""}`}>
      {isShow && <img src={props.children.img} alt={props.children.name} />}
    </div>
  );
}
