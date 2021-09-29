/*
  �p����
  1.�q��s�����ʪ������ت� id�A�Ӥ��O products �� id�C
  2.����榡�i�H�� new Date("�ʪ������ت� createdAt" * 1000).toLocaleString() ���ഫ�榡�C
  3.�i�Q�� sort() �禡�A���q�����q�s������ܡC
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
