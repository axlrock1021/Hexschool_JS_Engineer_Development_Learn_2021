// LV1 ： 接 API 顯示 Donut 圖
// LV2 ： 用 axios 介接資料，並顯示 C3 圖表
// LV3 ： 做 LV2，並加上上方套票新增時，下方 C3 與套票列表也會即時更新

// 宣告變數
const ticketCardArea = document.querySelector(".ticketCard-area");
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketBtn = document.querySelector(".addTicket-btn");
const ticketRegionSelect = document.querySelector(".ticketRegion-select");
const totalNum = document.querySelector(".total-num");
let newAry = [];
let ticketData = [];

// 取得資料
function init() {
  axios
    .get(
      "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"
    )
    .then(function (response) {
      ticketData = response.data.data;
      renderChart(ticketData);
      renderList(ticketData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 初始化
init();

// C3 圖表渲染
function renderChart(chartData) {
  let totalObj = {};
  console.log(chartData);
  chartData.forEach(function (item) {
    if (totalObj[item.area] == undefined) {
      totalObj[item.area] = 1;
    } else {
      totalObj[item.area] += 1;
    }
  });

  let newChartData = [];
  let area = Object.keys(totalObj);
  area.forEach(function (item) {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newChartData.push(ary);
  });
  console.log(newChartData);
  
  // 圖表
  let chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: newChartData,
      type: "donut",
    },
    size: {
      height: 250,
      width: 250,
    },
    color: {
      pattern: ["#03a9f4", "#cddc39", "#ff5722"],
    },
  });
}

// 畫面渲染
function renderList(ticketData) {
  let str = "";
  ticketData.forEach(function (item) {
    str += `
    <li class="col-12 col-lg-4">
      <div class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${item.imgUrl}" class="w-100 h-100 bg-cover" alt="">
          </a>
          <span class="ticketCard-region rounded-end">${item.area}</span>
          <span class="ticketCard-rank rounded-end">${item.rate}</span>
        </div>
        <div class="ticketCard-content d-flex flex-column justify-content-between">
          <div>
            <h3 class="mb-3">
              <a href="#" class="ticketCard-name d-block pb-1">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info d-flex justify-content-between align-items-center primary">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-priceText d-flex align-items-center">
              <span>TWD</span>
              <span id="ticketCard-price">$${item.price}</span>
            </p>
          </div>
        </div>
      </div>
    </li>
    `;
  });
  ticketCardArea.innerHTML = str;
  totalNum.innerHTML = ticketData.length;
}


// 監聽事件
addTicketBtn.addEventListener("click", addList);
// 新增套票
function addList() {
  let obj = {
    id: Math.random(),
    name: ticketName.value,
    imgUrl: ticketImgUrl.value,
    area: ticketRegion.value,
    description: ticketDescription.value,
    group: ticketNum.value,
    price: ticketPrice.value,
    rate: ticketRate.value,
  };
  if (
    ticketName.value == "" ||
    ticketImgUrl.value == "" ||
    ticketRegion.value == "" ||
    ticketPrice.value == "" ||
    ticketNum.value == "" ||
    ticketRate.value == "" ||
    ticketDescription.value == ""
  ) {
    alert("請輸入完整資料");
    return;
  } else if (ticketRate.value > 1 && ticketRate.value > 10) {
    alert("星級必須介於 1~10 之間");
    return;
  } else if (ticketDescription.value.length > 100) {
    alert("描述需在 100 字內");
    return;
  }
  ticketData.push(obj);
  renderList(ticketData);
  renderChart(ticketData);
}

// 監聽事件
ticketRegionSelect.addEventListener("change", filterArea);
//過濾地區
function filterArea() {
  ticketData.forEach(function (filterData) {
    if (ticketRegionSelect.value === "全部地區") {
      newAry.push(filterData);
      renderList(newAry);
    } else if (ticketRegionSelect.value == filterData.area) {
      newAry.push(filterData);
      renderList(newAry);
    }
  });
  newAry = [];
}