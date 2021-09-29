let baseUrl = "https://livejs-api.hexschool.io";
let api_path = "axlrock0412";
let productList = document.querySelector(".productList");
let productData = [];

function getProduct() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios
    .get(url)
    .then(function (res) {
      productData = res.data.products;
      renderProduct(productData);
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
        </div>
      </div>
    </div>
    `;
  });
  productList.innerHTML = str;
}

getProduct();

// 商品篩選功能
let productSelect = document.querySelector(".productSelect");
productSelect.addEventListener("change", selectFilter);
function selectFilter(e) {
  let category = e.target.value;
  if (category === "全部") {
    renderProduct(productData);
    return;
  }
  let targetProducts = [];
  productData.forEach(function (item) {
    if (item.category === category) {
      targetProducts.push(item);
    }
  });
  renderProduct(targetProducts);
}