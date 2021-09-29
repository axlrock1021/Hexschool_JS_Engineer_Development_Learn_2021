const productList = document.querySelector(".productWrap");
const carList = document.querySelector(".shoppingCart-tableList");
const inputs = document.querySelectorAll("input[name],select[data=payment]");
const orderInfoForm = document.querySelector(".orderInfo-form");
const constraints = {
  姓名: {
    presence: {
      message: "必填欄位",
    },
  },
  電話: {
    presence: {
      message: "必填欄位",
    },
    length: {
      minimum: 8,
      message: "需超過 8 碼",
    },
  },
  信箱: {
    presence: {
      message: "必填欄位",
    },
    email: {
      message: "格式錯誤",
    },
  },
  寄送地址: {
    presence: {
      message: "必填欄位",
    },
  },
  交易方式: {
    presence: {
      message: "必填欄位",
    },
  },
};
let productData = [];
let cartData = [];

// 初始化
init();

// 資料初始化
function init() {
  getProductList();
  getCartList();
}

// 取得產品清單
function getProductList() {
  axios
    .get(`https://${baseUrl}api/livejs/v1/customer/${api_path}/products`)
    .then((res) => {
      productData = res.data.products;
      renderProductList();
    })
    .catch((err) => {
      console.error(err);
      ("");
    });
}

// 渲染產品清單到畫面上
function renderProductList() {
  let str = "";
  productData.forEach((item) => {
    str += combineProductHTMLItem(item);
  });
  productList.innerHTML = str;
}

// 組合 產品清單 HTML 架構
function combineProductHTMLItem(item) {
  return `<li class="productCard">
  <h4 class="productType">新品</h4>
  <img
    src="${item.images}"
    alt=""
  />
  <a href="#" class="js-addCart" data-id="${item.id}"">加入購物車</a>
  <h3>${item.title}</h3>
  <del class="originPrice">NT$${toThousands(item.origin_price)}</del>
  <p class="nowPrice">NT$${toThousands(item.price)}</p>
  </li>`;
}

// 產品清單 下拉式篩選按鈕
const productSelect = document.querySelector(".productSelect");
productSelect.addEventListener("change", (e) => {
  let category = e.target.value;
  if (category == "全部") {
    renderProductList();
    return;
  }
  let str = "";
  productData.forEach((item) => {
    if (item.category == category) {
      str += combineProductHTMLItem(item);
    }
  });
  productList.innerHTML = str;
});

// 取得購物車清單
function getCartList() {
  axios
    .get(`https://${baseUrl}api/livejs/v1/customer/${api_path}/carts`)
    .then((res) => {
      let str = "";
      let total = document.querySelector(".js-total");
      total.textContent = toThousands(res.data.finalTotal);
      cartData = res.data.carts;
      cartData.forEach((item) => {
        str += `<tr>
        <td>
          <div class="cardItem-title">
            <img src="${item.product.images}" alt="" />
            <p>${item.product.title}</p>
          </div>
        </td>
        <td>NT$${toThousands(item.product.price)}</td>
        <td>${item.quantity}</td>
        <td>NT$${toThousands(item.product.price * item.quantity)}</td>
        <td class="discardBtn">
          <a href="#" class="material-icons" data-id="${item.id}"> clear </a>
        </td>
      </tr>`;
      });
      carList.innerHTML = str;
    })
    .catch((err) => {
      console.error(err);
    });
}

// 產品清單 加入購物車
productList.addEventListener("click", (e) => {
  e.preventDefault();
  let productId = e.target.getAttribute("data-id");
  let addCartClass = e.target.getAttribute("class");
  let numCheck = 1;

  if (addCartClass != "js-addCart") {
    return;
  }

  cartData.forEach((item) => {
    if (item.product.id == productId) {
      numCheck = item.quantity += 1;
    }
  });

  axios
    .post(`https://${baseUrl}api/livejs/v1/customer/${api_path}/carts`, {
      data: {
        productId: productId,
        quantity: numCheck,
      },
    })
    .then((res) => {
      alert("商品加入至購物車");
      getCartList();
    })
    .catch((err) => {
      console.error(err);
    });
});

// 刪除購物車(單筆商品)
carList.addEventListener("click", (e) => {
  e.preventDefault();
  let cartId = e.target.getAttribute("data-id");
  if (cartId == null) {
    alert("此處點擊無效");
    return;
  }

  axios
    .delete(
      `https://${baseUrl}api/livejs/v1/customer/${api_path}/carts/${cartId}`
    )
    .then((res) => {
      alert("刪除單筆商品 !");
      getCartList();
    })
    .catch((err) => {
      console.error(err);
    });
});

// 刪除購物車(全部商品)
const discardAllBtn = document.querySelector(".discardAllBtn");
discardAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  axios
    .delete(`https://${baseUrl}api/livejs/v1/customer/${api_path}/carts`)
    .then((res) => {
      alert("刪除全部商品 !");
      getCartList();
    })
    .catch((err) => {
      alert("購物車已無商品 !");
    });
});

// 訂單成立，送出預訂資料
const orderInfoBtn = document.querySelector(".orderInfo-btn");
orderInfoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cartData.length == 0) {
    alert("購物車無商品");
    return;
  }

  const customerName = document.querySelector("#customerName");
  const customerPhone = document.querySelector("#customerPhone");
  const customerEmail = document.querySelector("#customerEmail");
  const customerAddress = document.querySelector("#customerAddress");
  const tradeWay = document.querySelector("#tradeWay");

  if (validate(orderInfoForm, constraints) || "") {
    let errors = validate(orderInfoForm, constraints) || "";
    Object.keys(errors).forEach((item) => {
      document.querySelector(`[data-message="${item}"]`).textContent =
        errors[item];
    });
  } else {
    axios
      .post(`https://${baseUrl}api/livejs/v1/customer/${api_path}/orders`, {
        data: {
          user: {
            name: customerName.value,
            tel: customerPhone.value,
            email: customerEmail.value,
            address: customerAddress.value,
            payment: tradeWay.value,
          },
        },
      })
      .then((res) => {
        alert("訂單建立成功");
        getCartList();
        document.querySelector(`[data-message="姓名"]`).textContent = "";
        document.querySelector(`[data-message="電話"]`).textContent = "";
        document.querySelector(`[data-message="信箱"]`).textContent = "";
        document.querySelector(`[data-message="寄送地址"]`).textContent = "";
      })
      .catch((err) => {
        alert("訂單建立失敗");
      });
    orderInfoForm.reset();
  }
});
