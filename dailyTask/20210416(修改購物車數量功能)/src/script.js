/*
  1.每次點擊「+」的符號數量就會加 1。
  2.每次點擊「-」的符號數量就會減 1。
  3.當數量減去至 0 的時候，將這筆購物車項目刪除。
*/

const baseUrl = "https://livejs-api.hexschool.io";
const api_path = "axlrock0416";
const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");

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
          <p class="cartAmount">數量: 
            <a href="#"><span class="material-icons cartAmount-icon" data-num="${
              item.quantity - 1
            }" data-id="${item.id}">remove</span></a>
            <span>${item.quantity}</span>
            <a href="#"><span class="material-icons cartAmount-icon" data-num="${
              item.quantity + 1
            }" data-id="${item.id}">add</span></a>
          </p>
          <button type="button" class="btn btn-primary mb-3 delSingleBtn" data-id="${
            item.id
          }">刪除</button>
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
  let cartNumEdit = document.querySelectorAll(".cartAmount-icon");
  cartNumEdit.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      editCartNum(e.target.dataset.num, e.target.dataset.id);
    });
  });
}

function editCartNum(num, id) {
  if (num > 0) {
    let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
    let data = {
      data: {
        id: id,
        quantity: parseInt(num),
      },
    };
    axios
      .patch(url, data)
      .then(function (res) {
        getCarts();
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    delSingleCart(id);
  }
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