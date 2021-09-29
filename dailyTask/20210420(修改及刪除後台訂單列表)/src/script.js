// 新增後台訂單列表功能「修改訂單狀態」、「刪除單一訂單」、「刪除全部訂單」。

const baseUrl = "https://livejs-api.hexschool.io";
const api_path = "axlrock0420";
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
    // JS 「縮寫」的手法，如果 id 沒有重新指派，可以直接帶入變數
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