/*
  1.請練習實作「送出訂單」的功能，送出的訂單可以到 API 文件點選 Try it out，
    檢查是否有成功送出 (須點擊右方的鑰匙 icon，輸入你的 UID 解鎖才能使用)。
  2.練習做表單驗證，驗證成功才送出訂單。
*/

const baseUrl = "https://livejs-api.hexschool.io";
const api_path = "axlrock0409";
const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");

function init() {
  getProduct();
  getCarts();
}

init();

function getProduct() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios
    .get(url)
    .then(function (res) {
      let product = res.data.products;
      renderProduct(product);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getCarts() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  axios
    .get(url)
    .then(function (res) {
      let cartData = res.data.carts;
      renderCart(cartData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderProduct(product) {
  let str = "";
  product.forEach((item) => {
    str += `
      <div class="col-6 mb-3">
      <div class="card">
        <img src="${item.images}" class="card-img-top productImg" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
          <p class="card-text"><strong>種類:</strong> ${item.category}</p>
          <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
          <p class="card-text"><strong>售價:</strong> ${item.price}</p>
          <p class="card-text"><strong>描述:</strong> ${item.description}</p>
          <button type="button" class="btn btn-primary addCart" data-id="${item.id}">加入購物車</button>
        </div>
      </div>
    </div>
    `;
  });
  productList.innerHTML = str;
  let addCartBtn = document.querySelectorAll(".addCart");
  addCartBtn.forEach(function (item) {
    item.addEventListener("click", function (e) {
      addCart(e.target.dataset.id);
    });
  });
}

function renderCart(cartData) {
  let str = "";
  cartData.forEach(function (item) {
    str += `
        <li>
          <p>名稱: <span>${item.product.title}</span></p>
          <p>數量: <span>${item.quantity}</span></p>
        </li>
     `;
  });
  cartList.innerHTML = str;
}

function addCart(id) {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  let data = {
    data: {
      productId: id,
      quantity: 1,
    },
  };
  axios
    .post(url, data)
    .then(function (res) {
      getCarts();
    })
    .catch(function (error) {
      console.log(2, error);
    });
}

// 送出訂單
function addOrder() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/orders`;
  let data = {
    data: {
      user: {
        name: document.querySelector("#customerName").value.trim(),
        tel: document.querySelector("#customerTel").value.trim(),
        email: document.querySelector("#customerEmail").value.trim(),
        address: document.querySelector("#customerAddress").value.trim(),
        payment: document.querySelector("#payMethod").value.trim(),
      },
    },
  };
  axios
    .post(url, data)
    .then(function (res) {
      // 顯示訂單結果
      console.log(res.data);
      data = {};
      getCarts();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// validate.js 驗證
const constraints = {
  姓名: {
    presence: {
      message: "是必填欄位",
    },
  },
  電話: {
    presence: {
      message: "是必填欄位",
    },
    length: {
      minimum: 8,
      message: "號碼需超過 8 碼",
    },
  },
  信箱: {
    presence: {
      message: "是必填欄位",
    },
    email: {
      message: "格式有誤",
    },
  },
  地址: {
    presence: {
      message: "是必填欄位",
    },
  },
};
const form = document.querySelector(".submitForm");
const inputs = document.querySelectorAll("input[type=text],input[type=tel]");
// 取得所有帶有 data-msg 的 <p> 標籤
let messages = document.querySelectorAll("[data-msg]");
// 綁定整個 form 表單，驗證成功才准許送出表單
form.addEventListener("submit", verification, false);
function verification(e) {
  e.preventDefault();
  let errors = validate(form, constraints);
  // 如果有誤，呈現錯誤訊息
  if (errors) {
    showErrors(errors);
  } else {
    // 如果沒有錯誤，送出表單
    addOrder();
  }
}

function showErrors(errors) {
  messages.forEach((item) => {
    item.textContent = "";
    item.textContent = errors[item.dataset.msg];
  });
}

// 監控所有 input 的操作
inputs.forEach((item) => {
  item.addEventListener("change", function (e) {
    e.preventDefault();
    let targetName = item.name;
    let errors = validate(form, constraints);
    item.nextElementSibling.textContent = "";
    // 針對正在操作的欄位呈現警告訊息
    if (errors) {
      document.querySelector(`[data-msg='${targetName}']`).textContent = errors[targetName];
    }
  });
});
