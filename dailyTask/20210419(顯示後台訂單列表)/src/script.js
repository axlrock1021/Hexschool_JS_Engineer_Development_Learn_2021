/*
  小提醒
  1.訂單編號為購物車項目的 id，而不是 products 的 id。
  2.日期格式可以用 new Date("購物車項目的 createdAt" * 1000).toLocaleString() 來轉換格式。
  3.可利用 sort() 函式，讓訂單日期從新到舊顯示。
*/

const baseUrl = "https://livejs-api.hexschool.io";
const api_path = "axlrock0419";
const headers = {
  Authorization: "A0bpXfe8TRZcjKXZEXinRTzFrem1",
};
const orderTableBody = document.querySelector(".orderTable-body");

function getOrder() {
  let url = `${baseUrl}/api/livejs/v1/admin/${api_path}/orders`;
  axios
    .get(url, {
      headers,
    })
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
            </tr>`;
  });
  orderTableBody.innerHTML = str;
}

getOrder();
