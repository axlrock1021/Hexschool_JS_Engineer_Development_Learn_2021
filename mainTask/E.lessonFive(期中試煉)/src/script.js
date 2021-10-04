/*
   完成任務可以獲得以下技能
   1.箭頭函式寫法
   2.函式處理 render 與運算
   3.陣列 filter、forEach 等寫法
   
   版型資料設計注意事項
   1.地區用 change 監聽
   2.上方新增的地區跟下方篩選的地區都寫死選項（依照目前提供的 JSON data area 欄位）
   3.地區的篩選下拉需要加上『全部地區』option
   4.不需要有「清除資料」的按鈕
   5.預設資料為 3 筆（內容需依照目前提供的 JSON data）
   6.篩選後會顯示『搜尋資料為 ? 筆』
   7.描述欄位使用 textarea
   8.星級區間是 1-10 分
   9.金額、組數、星級的 type 為 Number
*/

let data = [
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

// 先取得 DOM 元素
const ticketCardList = document.querySelector(".ticketCard-area");
const record = document.querySelector("#searchResult-text");
function init() {
  let str = "";
  // 撈取陣列資料
  data.forEach(function (item) {
    str += `<li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${item.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
        ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
        TWD <span id="ticketCard-price">$${item.price}</span>
        </p>
      </div>
    </div>
  </li>`;
  });
  // 資料渲染在畫面上
  ticketCardList.innerHTML = str;
  record.innerHTML = `本次搜尋共 ${data.length} 筆資料`;
}

//初始化呼叫
init();

// 新增套票
// 先取得 DOM 元素
const addTicket_form = document.querySelector(".addTicket-form");
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicket_btn = document.querySelector(".addTicket-btn");

// 按鈕監聽事件
addTicket_btn.addEventListener("click", addTicketData);

function addTicketData() {
  if (
    ticketName.value == "" ||
    ticketImgUrl.value == "" ||
    ticketRegion.value == "" ||
    ticketDescription.value == "" ||
    ticketNum.value == "" ||
    ticketPrice.value == "" ||
    ticketRate.value == ""
  ) {
    alert("欄位不得為空，請重新輸入");
  } else {
    data.push({
      id: data.length,
      name: ticketName.value,
      imgUrl: ticketImgUrl.value,
      area: ticketRegion.value,
      description: ticketDescription.value,
      group: parseInt(ticketNum.value),
      price: parseInt(ticketPrice.value),
      rate: parseInt(ticketRate.value),
    });
    addTicket_form.reset();
  }
  init();
}

// 地區搜尋篩選器
// 先取得 DOM 元素
const regionSearch = document.querySelector(".regionSearch");
const searchResultText = document.querySelector("#searchResult-text");

regionSearch.addEventListener("change", function showSearch() {
  render(regionSearch.value);
});

// 渲染畫面
function render(location) {
  let str = "";
  let searchData;
  searchData = data.filter(function (item) {
    if (location === item.area) {
      return item;
    }
    if (!location) {
      return item;
    }
  });
  searchData.forEach(function (item) {
    str += `<li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${item.imgUrl}" alt="${item.name}" />
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
          ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">$${item.price}</span>
        </p>
      </div>
    </div>
  </li>`;
  });

  ticketCardList.innerHTML = str;

  if (regionSearch.value == "全部地區" || regionSearch.value == "地區搜尋") {
    searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`;
  } else {
    searchResultText.textContent = `本次搜尋共 ${searchData.length} 筆資料`;
  }
}
