import zaobaoImgSrc from "@/assets/img/zaobao.png";
const row = 4;
const col = 7;
const link = {
  tencent: {
    name: "腾讯新闻",
    a: "https://new.qq.com/ch/antip/",
    img: "https://inews.gtimg.com/newsapp_bt/0/12171811596_909/0",
    key: "tecent",
  },
  netease: {
    name: "网易新闻",
    a: "https://jiankang.163.com/",
    img: "http://cms-bucket.ws.126.net/2020/0723/a7da7addp00qdwjvw0005c0003n000sc.png",
    key: "netease",
  },
  cctv: {
    name: "央视新闻新闻",
    a: "http://news.cctv.com/special/qqkyjxs/index.shtml",
    img: "	https://p1.img.cctvpic.com/photoAlbum/templet/common/DEPA1546583592748817/cctv1.png",
    key: "cctv",
  },
  zaobao: {
    name: "联合早报",
    a: "https://www.zaobao.com/news/china",
    img: zaobaoImgSrc,
    key: "zaobao",
  },
  bbc: {
    name: "BBC",
    a: "https://www.bbc.com/zhongwen/simp",
    img: "http://y3.ifengimg.com/830f2963af540e12/2012/1115/rdn_50a4af49c8d03.jpg",
    key: "bbc",
  },
  chinadaily: {
    name: "中国日报",
    a: "https://cn.chinadaily.com.cn/",
    img: "https://img3.chinadaily.com.cn/static/2018cn/img/logo.png",
    key: "chinadaily",
  },
  sina: {
    name: "新浪新闻",
    a: "https://news.sina.com.cn/",
    img: "https://i2.sinaimg.cn/dy/deco/2012/0613/yocc20120613img01/news_logo.png",
    key: "sina",
  },
  chinanews: {
    name: "中国新闻网",
    a: "https://www.chinanews.com.cn/",
    img: "https://i8.chinanews.com.cn/2013/home/images/logo.jpg",
    key: "chinanews",
  },
  xin: {
    name: "中新网",
    a: "https://www.chinanews.com.cn/society/",
    img: "https://i8.chinanews.com/2014/society/logo.jpg",
    key: "xin",
  },
};
function initMoreArr() {
  const arr = [];
  for (let i = 0; i < row; i++) {
    const temp = [];
    for (let j = 0; j < col; j++) {
      temp.push({
        name: "",
        a: "",
        img: "",
        key: `${i}${j}`,
      });
    }
    arr.push(temp);
  }
  arr[0][1] = link.tencent;
  arr[0][5] = link.netease;

  arr[1][4] = link.cctv;
  arr[1][0] = link.zaobao;

  arr[2][5] = link.bbc;
  arr[2][4] = link.chinadaily;
  arr[2][0] = link.sina;

  arr[3][2] = link.chinanews;
  arr[3][6] = link.xin;
  return arr;
}

export default initMoreArr;
export { row, col };
