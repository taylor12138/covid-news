import React, { useCallback, useState } from "react";

import "./more.less";
import Box from "@/common/box";
import initMoreArr, { col, row } from "./common";
const arr = initMoreArr();
console.log(arr);

export default function More(row) {
  const [moreArr, setMoreArr] = useState(arr);
  const goRight = useCallback(
    (childRow) => {
      console.log("enter, props");
      const item = moreArr[childRow].pop();
      moreArr[childRow].unshift(item);
      setMoreArr([...moreArr]);
    },
    [moreArr]
  );
  return (
    <div className="more">
      <article>
        {moreArr.map((item, index) => {
          return (
            <div className="row" key={index}>
              {item.map((child) =>
                child.name === "" ? (
                  <div
                    key={child.key}
                    href={child.a}
                    className={child.name === "" ? "small" : "big"}
                  >
                    <Box moreGoRight={goRight} key={child.key} row={index}>
                      {child}
                    </Box>
                  </div>
                ) : (
                  <a
                    key={child.key}
                    href={child.a}
                    className={child.name === "" ? "small" : "big"}
                  >
                    <Box moreGoRight={goRight} key={child.key}>
                      {child}
                    </Box>
                  </a>
                )
              )}
            </div>
          );
        })}
      </article>
      <div className="bean-top"></div>
      <div className="bean-bottom"></div>
    </div>
  );
}
