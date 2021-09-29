// 先載入 axios 的 CDN src="https://unpkg.com/axios/dist/axios.min.js">
// 請問 console.log 的顯示順序為何?
let arr = [];
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log("資料有回傳了"); // 順序2
    arr = response.data;
    renderData();
  });

function renderData() {
  console.log(arr); // 順序3
  const title = document.querySelector(".title");
  title.textContent = arr[0].name;
}

console.log(arr); // 順序1
