import React from "react";

import "./more.less";
import Box from "@/common/box";
import link from "./common";

const row = 4;
const col = 7;
const arr = Array.from(Array(row), () => Array(col).fill(0));
arr[0][1] = 1;
arr[3][2] = 2;
arr[2][5] = 3;
arr[1][4] = 4;
arr[1][0] = 5;
arr[2][4] = 6;
arr[0][5] = 7;
arr[3][6] = 8;
arr[2][0] = 9;

export default function More() {
  return (
    <div className="more">
      <article>
        {arr.map((item) => {
          return (
            <div className="row">
              {item.map((child) => (
                <a
                  href={link[child].a}
                  className={link[child].name === "" ? "small" : "big"}
                >
                  <Box>{link[child]}</Box>
                </a>
              ))}
            </div>
          );
        })}
      </article>
    </div>
  );
}
