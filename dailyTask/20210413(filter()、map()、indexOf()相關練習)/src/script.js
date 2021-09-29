/*
    indexOf() 介紹 :
    可以用 indexOf() 去尋找某個元素是否存在於陣列之中，會回傳陣列中第一個被找到的指定元素索引，
    若不存在於陣列中則回傳 -1。
    const fruits = ['apple', 'banana', 'banana', 'orange'];
    console.log(fruits.indexOf('banana')); // 結果為 1，會回傳第一個找到的 banana 元素之索引。
    console.log(fruits.indexOf('lemon')); // 結果為 -1，因為 lemon 不存在於陣列中。
*/

let baseUrl = "https://livejs-api.hexschool.io";
let api_path = "axlrock0413";
let productList = document.querySelector(".productList");
let productData = [];

function getProduct() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios
    .get(url)
    .then(function (res) {
      // 步驟一 : 透過 axios 取得 product 資料
      productData = res.data.products;
      renderProduct(productData);
      getCategories();
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

// 篩選 select 欄位
function getCategories() {
  // 步驟二 : 分類前(取得所有產品的 category 名稱)
  let unSort = productData.map(function (item) {
    return item.category;
  });
  console.log(unSort); // 結果為 ["床架","床架","窗簾","床架","收納","床架","收納","床架"]
  // 步驟三 : 分類後(移除重複的 category 名稱)
  // 因為 indexOf() 只會回傳第一個找到的匹配元素之索引，搭配 filter() 做判斷就可以只保留不重複的元素
  let sorted = unSort.filter(function (item, i) {
    return unSort.indexOf(item) === i;
  });
  console.log(sorted); // 結果為 ["床架","窗簾","收納"]
  // 步驟四 : 渲染至網頁上
  renderCategories(sorted);
}

function renderCategories(sorted) {
  let str = '<option value="全部" selected>全部</option>';
  sorted.forEach(function (item) {
    str += `<option value="${item}">${item}</option>`;
  });
  productSelect.innerHTML = str;
}