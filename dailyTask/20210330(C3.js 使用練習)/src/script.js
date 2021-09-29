// 問題一
// 老媽希望了解一下她的兩個兒子，大翰跟小寶，每天在學校的數學小考成績狀況如何
// 她透過 C3.js 的折線圖將他們兩個的成績數據圖像化，請問 JS 程式碼應該如何撰寫 ?
let timeseriesChart = c3.generate({
  bindto: "#timeseriesChart", // HTML 元素綁定
  data: {
    x: "date", // x 軸綁到陣列第一個有 'date' 字串
    columns: [
      [
        "date",
        "2021-1-15",
        "2021-1-16",
        "2021-1-17",
        "2021-1-18",
        "2021-1-19",
        "2021-1-20",
      ],
      ["大翰", 60, 50, 80, 90, 67, 80],
      ["小寶", 90, 70, 50, 68, 80, 90],
    ],
  },
  axis: {
    // 座標軸
    x: {
      type: "timeseries", // 圖表種類
      tick: {
        format: "%Y-%m-%d",
      },
    },
  },
});

// 問題二
// 六角高中準備舉辦園遊會，要由同學們票選出這次的主題。
// 班長透過 C3.js 的 Donut Chart 將投票數據圖像化，請問 JS 程式碼應該如何撰寫 ?
let donutChart = c3.generate({
  bindto: "#donutChart",
  data: {
    columns: [
      ["鬼屋", 10],
      ["女僕咖啡廳", 20],
      ["童話世界", 5],
    ],
    type: "donut",
    colors: {
      鬼屋: "#E68618",
      女僕咖啡廳: "#F280CA",
      童話世界: "#26BFC7",
    },
  },
  donut: {
    title: "園遊會主題票選",
  },
});
