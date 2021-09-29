/*
    match() 函式可以用來做字串的比對，分析關鍵字是否存在於字串當中。
    它是根據「正規表達式」來進行實作的，「關鍵字」可以是中 / 英文，如果關鍵字存在，
    則 match() 會回傳一個包含那個關鍵字的陣列，如果關鍵字不存在，則 match() 會回傳 null。
    注意，關鍵字在字串中必須是「連續的」，像是以下範例的 keywordSeparate 就會回傳 null。
    
    範例如下 : 想要用來比對的字串
    let str = "我是 HexSchool 的大帥哥";
    以下為 4 種關鍵字
    let keywordChinese = "大帥哥"; 
    let keywordEnglish = "HexSch";
    let keywordNull = "不存在";
    let keywordSeparate = "大哥";
    console.log(str.match(keywordChinese));  // 回傳 ["大帥哥"]
    console.log(str.match(keywordEnglish));  // 回傳 ["HexSch"]
    console.log(str.match(keywordNull));     // 回傳 null
    console.log(str.match(keywordSeparate)); // 回傳 null
*/

let baseUrl = "https://livejs-api.hexschool.io";
let api_path = "axlrock0414";
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

// 關鍵字搜尋
let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", keywordSearch);

function keywordSearch() {
  // 步驟一 : 取得 input 的文字內容，並使用 trim()、toLowerCase() 做字串處理。
  // .trim() 可以移除字串首尾的空白，避免發生錯誤。
  // .toLowerCase() 可以把英文字母都轉成小寫，建議要比對的字串、關鍵字都做這項處理，
  // 這樣不管輸入的關鍵字英文字母大小寫為何，都能找到相符合的產品。
  let keyword = searchInput.value.trim().toLowerCase();
  let targetProduct = [];
  // 步驟二 : 搭配 filter() 做篩選，設定「產品的標題」為欲比對的字串。
  // 設定 filter() 的 return 條件為「match() 的回傳值」，如果關鍵字存在，則 match() 會回傳一個陣列，
  // 如果關鍵字不存在，則 match() 會回傳 null。
  // 在 JS 中，陣列為真值，會被轉換為 true，null 假值，會被轉換為 false
  targetProduct = productData.filter(function (item) {
    let title = item.title.toLowerCase();
    return title.match(keyword);
  });
  // 步驟三 : 進行畫面渲染。
  renderProduct(targetProduct);
}