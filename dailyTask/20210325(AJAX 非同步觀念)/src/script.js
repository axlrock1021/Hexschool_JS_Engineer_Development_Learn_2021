/* 先載入 src="https://unpkg.com/axios/dist/axios.min.js"> 
   非同步原理，由上而下執行時，非同步的事項會先放入佇列中，待之後的事項完成後再執行。
   首先 AJAX 的資料回傳需要時間、會發生延遲，由於 axios 的語法預設是非同步的，它允許在 AJAX 的資料回傳以前繼續往下執行程式。
   補充 : 需要注意的是， arr 會在 AJAX 資料回傳後才被賦值為 response.data，以範例程式碼為例，arr 會在「console.log('資料有回傳了')」之後被賦值。
-*/

let arr = [];
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log("資料有回傳了"); // 順序二
    arr = response.data;
  });
console.log(arr); // 順序一
