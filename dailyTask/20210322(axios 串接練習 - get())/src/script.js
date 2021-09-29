 /*
  請記得載入 axios 的 CDN src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js">
  
  axios 的 get 語法可以用來取得遠端伺服器的資料
  // 在以下 URL 的部分填入 API 網址
  axios.get("URL")
  // 如果連接成功，可以用 then() 處理傳回來的值，以下程式碼將回傳結果儲存於 response。
  .then(function (response) {
    	console.log(response);
  });
  
  // 遠端 API 資料
  [
    {
      id: 0,
      name: "肥宅心碎賞櫻3日",
      imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      area: "高雄",
      description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      group: 87,
      price: 1400,
      rate: 10,
    },
    {
      id: 1,
      name: "貓空纜車雙程票",
      imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      area: "台北",
      description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      group: 99,
      price: 240,
      rate: 2,
    },
    {
      id: 2,
      name: "台中谷關溫泉會1日",
      imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      area: "台中",
      description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      group: 20,
      price: 1765,
      rate: 7,
    },
  ];
*/

// 請嘗試用 axios 串接這個 API 並透過 console.log 輸出以下要求 :
axios
  .get(
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json"
  )
  .then(function (response) {
    // 該 JSON 的陣列資料總共有多少個物件?
    console.log(response.data.length);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 id 所對應的值。
    console.log(response.data[0].id);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 name 所對應的值。
    console.log(response.data[0].name);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 imgUrl 所對應的值。
    console.log(response.data[0].imgUrl);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 area 所對應的值。
    console.log(response.data[0].area);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 description 所對應的值。
    console.log(response.data[0].description);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 group 所對應的值。
    console.log(response.data[0].group);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 price 所對應的值。
    console.log(response.data[0].price);
    // 請輸出該 JSON 陣列資料的第一筆物件，屬性 rate 所對應的值。
    console.log(response.data[0].rate);
  });
