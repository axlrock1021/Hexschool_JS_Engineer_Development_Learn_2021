/*
  先載入 https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
  請使用 axios 串接 API 資料，計算各個小組的總人數有多少 ?，
  以下為 API 部分資料供參考
  {
    timestamp: "2021/3/10 下午 10:11:17",
    slackName: "Mandy",
    jsGroup: "1",
    youtubeUrl: "",
    haveTen: "是",
    codepenUrl: "https://codepen.io/manyu1225/pen/wvoQXvr?editors=1011",
    practiceMinute: "15",
    practiceSecond: "8"
  },
*/
let url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
axios.get(url).then((response) => {
  let total = {};
  let data = response.data;
  data.forEach((item) => {
    if (total[item.jsGroup] === undefined) {
      total[item.jsGroup] = 1;
    } else {
      total[item.jsGroup] += 1;
    }
  });
  console.log(total);
});
