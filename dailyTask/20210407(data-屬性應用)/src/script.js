/*
  除了先前提到的 .getAttreibute() 以外， data-xxx 也可以用 document.querySelector 選取，例如 :
  <!-- HTML -->
  <p class="alertMsg" data-title="信箱"></p>
  <p class="alertMsg" data-title="密碼"></p>
  取得「data-title="信箱"」p 標籤的方式有兩種 :
  // JS
  document.querySelectorAll('[data-title]')[0];
  document.querySelector("[data-title='信箱']");
  
  另外，也可以透過事件綁定來取得 data-xxx，例如 :
  <!-- HTML -->
  <p class="alertMsg" data-title="信箱">點我會顯示 dataset</p>
  // JS
  let alertMsg = document.querySelector('.alertMsg');
  alertMsg.addEventListener('click', function(e) {
    console.log(e.target.dataset.title);
  });
  
  問題
  請使用 這個 CodePen 做練習，當點擊「加入 alert 文字」按鈕後，將會在對應的
  <p class="alertMsg"></p> 標籤中填入警示文字。
  注意，「信箱 必填」的「信箱」、「密碼 必填」的「密碼」需取用 data-title 的內容。
*/

let addBtn = document.querySelector(".addBtn");
let alertMsgAll = document.querySelectorAll("[data-title]");

addBtn.addEventListener("click", addAlertMsg);

function addAlertMsg() {
  alertMsgAll.forEach(function (item) {
    item.textContent = `${item.dataset.title} 必填!`;
  });
}
