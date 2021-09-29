const orderList = document.querySelector(".js-orderList");
let orderData = [];

// 初始化
init();

// 資料初始化
function init() {
  getOrderList();
}

// 取得訂單資料
function getOrderList() {
  axios
    .get(`https://${baseUrl}api/livejs/v1/admin/${api_path}/orders`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      orderData = res.data.orders;
      let str = "";
      orderData.forEach((item) => {
        // 組時間字串
        let timeStamp = new Date(item.createdAt * 1000);
        let orderTime = `${timeStamp.getFullYear()}/${timeStamp.getMonth() + 1}/${timeStamp.getDate() + 1}`;
        // 組產品字串
        let productStr = "";
        item.products.forEach((productItem) => {
          productStr += `<p>${productItem.title}x${productItem.quantity}</p>`;
        });
        // 判斷訂單處理狀態
        let orderStatus = "";
        if (item.paid == true) {
          orderStatus = "已處理";
        } else {
          orderStatus = "未處理";
        }
        // 組訂單字串
        str += ` <tr>
          <td>${item.id}</td>
          <td>
            <p>${item.user.name}</p>
            <p>${item.user.tel}</p>
          </td>
          <td>${item.user.address}</td>
          <td>${item.user.email}</td>
          <td>
            ${productStr}
          </td>
          <td>${orderTime}</td>
          <td class="orderStatus">
            <a href="#" class="js-orderStatus" data-status="${item.paid}" data-id="${item.id}">${orderStatus}</a>
          </td>
          <td>
            <input
              type="button"
              class="delSingleOrder-Btn js-orderDelete"
              data-id="${item.id}"
              value="刪除"
            />
          </td>
        </tr>`;
      });
      orderList.innerHTML = str;
      renderC3();
    })
    .catch((err) => {
      console.error(err);
    });
}

// 渲染 C3 圖表
function renderC3() {
  // 資料蒐集
  let obj = {};
  orderData.forEach((item) => {
    item.products.forEach((productItem) => {
      if (obj[productItem.title] == undefined) {
        obj[productItem.title] = productItem.price * productItem.quantity;
      } else {
        obj[productItem.title] += productItem.price * productItem.quantity;
      }
    });
  });

  // 拉出資料關聯
  let originAry = Object.keys(obj);

  // 透過 originAry，整理成 C3 格式
  let rankSortAry = [];
  originAry.forEach((item) => {
    let ary = [];
    ary.push(item);
    ary.push(obj[item]);
    rankSortAry.push(ary);
  });

  // 比大小，降冪排序(目的 : 取營收前三高的品項當主要色塊，把其餘的品項加總起來當成一個色塊)
  rankSortAry.sort((a, b) => {
    return b[1] - a[1];
  });

  // 如果筆數超過四筆以上，就統整為其它
  if (rankSortAry.length > 3) {
    let otherTotal = 0;
    rankSortAry.forEach((item, index) => {
      if (index > 2) {
        otherTotal += rankSortAry[index][1];
      }
    });
    rankSortAry.splice(3, rankSortAry.length - 1);
    rankSortAry.push(["其它", otherTotal]);
  }

  // 超過三筆後將第四名之後的價格加總起來放在 otherTotal
  // c3 圖表
  c3.generate({
    bindto: "#chart",
    data: {
      type: "pie",
      columns: rankSortAry,
    },
  });
}

// 監聽訂單清單
orderList.addEventListener("click", function (e) {
  e.preventDefault();
  let id = e.target.getAttribute("data-id");
  const targetClass = e.target.getAttribute("class");
  if (targetClass == "js-orderStatus") {
    let status = e.target.getAttribute("data-status");
    ChangeOrderStatus(status, id);
    return;
  }
  if (targetClass == "delSingleOrder-Btn js-orderDelete") {
    deleteOrderItem(id);
    return;
  }
});

// 修改訂單狀態
function ChangeOrderStatus(status, id) {
  let newStatus = "";
  if (status == true) {
    newStatus = false;
  } else {
    newStatus = true;
  }
  axios
    .put(
      `https://${baseUrl}api/livejs/v1/admin/${api_path}/orders`,
      {
        data: {
          id: id,
          paid: newStatus,
        },
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      alert("訂單狀態修改成功");
      getOrderList();
    })
    .catch((err) => {
      console.error(err);
    });
}

// 刪除訂單(單筆)
function deleteOrderItem(id) {
  axios
    .delete(`https://${baseUrl}api/livejs/v1/admin/${api_path}/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      alert("單筆訂單刪除");
      getOrderList();
    })
    .catch((err) => {
      console.error(err);
    });
}

// 刪除訂單(全部)
const discardAllBtn = document.querySelector(".discardAllBtn");
discardAllBtn.addEventListener("click", function (e) {
  e.preventDefault();
  axios
    .delete(`https://${baseUrl}api/livejs/v1/admin/${api_path}/orders/`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      alert("全部訂單刪除");
      getOrderList();
    })
    .catch((err) => {
      console.error(err);
    });
});
