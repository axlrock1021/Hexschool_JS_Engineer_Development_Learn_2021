let baseUrl = "https://livejs-api.hexschool.io";
let api_path = "axlrock0415";
let productList = document.querySelector(".productList");
let cartList = document.querySelector(".cartList");

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

function renderCart(cartData) {
  let str = "";
  cartData.forEach(function (item) {
    str += `
        <li>
          <p>名稱: <span>${item.product.title}</span></p>
          <p>數量: <span>${item.quantity}</span></p>
          <button type="button" class="btn btn-primary mb-3 delSingleBtn" data-id="${item.id}">刪除</button>
        </li>
     `;
  });
  cartList.innerHTML = str;
  let alldelSingleBtn = document.querySelectorAll(".delSingleBtn");
  alldelSingleBtn.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      delSingleCart(e.target.dataset.id);
    });
  });
}

function delSingleCart(id) {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts/${id}`;
  axios
    .delete(url)
    .then(function (res) {
      getCarts();
      setTimeout(function () {
        alert("成功刪除此筆訂單");
      }, 1000);
    })
    .catch(function (error) {
      console.log(error);
    });
}
let delAllCartBtn = document.querySelector(".delAllCartBtn");
delAllCartBtn.addEventListener("click", delAllCart);
function delAllCart() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  axios
    .delete(url)
    .then(function (res) {
      getCarts();
      setTimeout(function () {
        alert("成功刪除所有訂單");
      }, 1000);
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
      console.log(res.data.carts);
      getCarts();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getProduct();
getCarts();