/*
  1.圖表內容為各個商品的數量比例。
  2.如果商品種類超過三筆，圓餅圖會篩選、顯示數量前三多的商品名稱，剩下的商品則一併歸類到「其他」的區塊。
*/

const baseUrl = "https://livejs-api.hexschool.io";
const api_path = "axlrock0421";
const headers = {
  Authorization: "A0bpXfe8TRZcjKXZEXinRTzFrem1",
};
const orderTableBody = document.querySelector(".orderTable-body");
const delAllOrderBtn = document.querySelector(".delAllOrder");
delAllOrderBtn.addEventListener("click", delAllOrder);

function getOrder() {
  let url = `${baseUrl}/api/livejs/v1/admin/${api_path}/orders`;
  axios
    .get(url, { headers })
    .then((res) => {
      let orderData = res.data.orders;
      sortOrderData(orderData);
      filterC3Title(orderData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function sortOrderData(orderData) {
  orderData = orderData.sort(function (a, b) {
    let a_createdAt = a.createdAt;
    let b_createdAt = b.createdAt;
    return b_createdAt - a_createdAt;
  });
  renderTable(orderData);
}

function renderTable(orderData) {
  let str = ``;
  orderData.forEach(function (item) {
    let statusText = "";
    if (item.paid) {
      statusText = "已處理";
    } else {
      statusText = "未處理";
    }
    str += `<tr>
            <th scope="row">${item.id}</th>
            <td>
                <p>${item.user.name}</p>
                <p>${item.user.tel}</p>
            </td>
            <td>${item.user.address}</td>
            <td>${item.user.email}</td>
            <td>`;
    for (let i = 0; i < item.products.length; i++) {
      str += `<p>${i + 1}. ${item.products[i].title}</p>`;
    }
    str += `
            </td>
            <td>${new Date(item.createdAt * 1000).toLocaleString()}</td>
            <td>
              <a href="#" class="orderStatus">${statusText}</a>
            </td>
            <td>
              <input type="button" class="delSingleOrder-Btn" value="刪除">
            </td>
           </tr>`;
  });
  orderTableBody.innerHTML = str;
  let delSingleBtn = document.querySelectorAll(".delSingleOrder-Btn");
  let statusBtn = document.querySelectorAll(".orderStatus");

  orderData.forEach((item, i) => {
    statusBtn[i].addEventListener("click", function (e) {
      e.preventDefault();
      editStatus(item.id, item.paid);
    });
    delSingleBtn[i].addEventListener("click", function (e) {
      e.preventDefault();
      delSingleOrder(item.id);
    });
  });
}

getOrder();

function delSingleOrder(id) {
  let url = `${baseUrl}/api/livejs/v1/admin/${api_path}/orders/${id}`;
  axios
    .delete(url, { headers })
    .then((res) => {
      getOrder();
      setTimeout(function () {
        alert("成功刪除此筆訂單");
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
}

function editStatus(id, paid) {
  let url = `${baseUrl}/api/livejs/v1/admin/${api_path}/orders`;
  console.log(id, paid);
  let data = {
    data: {
      id,
      paid: !paid,
    },
  };
  axios
    .put(url, data, { headers })
    .then(() => {
      getOrder();
      setTimeout(function () {
        alert("成功調整狀態");
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
}

function delAllOrder() {
  let url = `${baseUrl}/api/livejs/v1/admin/${api_path}/orders`;
  axios
    .delete(url, { headers })
    .then((res) => {
      getOrder();
      setTimeout(function () {
        alert("成功刪除全部訂單");
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
}

function filterC3Title(orderData) {
  let objNum = {};
  // 計算各個商品數量
  orderData.forEach((item) => {
    for (let i = 0; i < item.products.length; i++) {
      if (objNum[item.products[i].title] === undefined) {
        objNum[item.products[i].title] = item.products[i].quantity;
      } else {
        objNum[item.products[i].title] += item.products[i].quantity;
      }
    }
  });
  // 轉換成 c3 的資料格式
  let c3Data = [];
  let productName = Object.keys(objNum);
  productName.forEach((item) => {
    let arr = [];
    arr.push(item);
    arr.push(objNum[item]);
    c3Data.push(arr);
  });
  // 進行商品數量多寡的排序
  c3Data.sort((a, b) => {
    a = a[1];
    b = b[1];
    return b - a;
  });
  // 如果商品種類超過三筆，則將數量排名第四以後的商品都歸類到「其他」
  if (c3Data.length > 3) {
    // 設定一個 outRank 計算 "其他" 的數量有多少
    let outRank = 0;
    c3Data.forEach((item, i) => {
      if (i > 2) {
        outRank += item[1];
      }
    });
    c3Data = [c3Data[0], c3Data[1], c3Data[2], ["其他", outRank]];
    renderC3(c3Data);
  }
  // 如果商品種類在 3 筆以內，則直接渲染圓餅圖
  else {
    renderC3(c3Data);
  }
}

function renderC3(c3Data) {
  let dataColor = {};
  let c3DataTitle = [];
  c3Data.forEach((item) => {
    c3DataTitle.push(item[0]);
  });
  let colorCode = ["#301E5F", "#5434A7", "#9D7FEA", "#6A33F8"];
  c3DataTitle.forEach((item, i) => {
    dataColor[item] = colorCode[i];
  });
  let chart = c3.generate({
    bindto: "#chart", // HTML 元素綁定
    data: {
      type: "pie",
      columns: c3Data,
      colors: dataColor,
    },
  });
}