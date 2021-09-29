/*
  觀念一 : .value 取出的值是「字串」
  這邊以 input 的 value 取值為例，請觀看以下範例 :
  <!-- HTML -->
  <input type="text" id="targetInput">
  <button id="triggerBtn">觸發按鈕</button>
  // JS
  let el = document.querySelector('#targetInput');
  let triggerBtn = document.querySelector('#triggerBtn'); 
  triggerBtn.addEventListener('click', function(){
    console.log(el.value); // "自行輸入的內容"
    console.log(typeof(el.value)); // "string"
  });
  因此如果要對表單的「數值」進行運算，請記得要先使用 parseInt 做型別轉換。
  <!-- HTML -->
  <input type="text" id="targetInput">
  <button id="triggerBtn">觸發按鈕</button>
  // JS
  let el = document.querySelector('#targetInput');
  let triggerBtn = document.querySelector('#triggerBtn');
  triggerBtn.addEventListener('click', function(){
    let newValue = parseInt(el.value);
    console.log(newValue); // 這裡的內容會從字串轉為數字
    console.log(typeof(newValue)); // number
  });

  觀念二 : .value、.getAttribute('value') 的差異
  <!-- HTML -->
  <input type="text" id="targetInput" value="123">
  <button id="triggerBtn">觸發按鈕</button>
  // JS
  let el = document.querySelector('#targetInput');
  let triggerBtn = document.querySelector('#triggerBtn');
  console.log(`el.value: ${el.value}`); // "el.value: 123"
  triggerBtn.addEventListener('click', function(){
    el.value = "任意填入的值";
    console.log(`el.value: ${el.value}`); // "el.value: 任意填入的值"
  });
  看到這邊，同學是不是認為 <input type="text" id="targetInput" value="123">，
  這行程式碼的 value="123" 應該已經被修改為 value="任意填入的值" 了 ?
  不過，如果我們將程式碼修改如下，並一樣的點選「觸發按鈕」觀察結果 :

  <!-- HTML -->
  <input type="text" id="targetInput" value="123">
  <button id="triggerBtn">觸發按鈕</button>
  // JS
  let el = document.querySelector('#targetInput');
  let triggerBtn = document.querySelector('#triggerBtn');
  triggerBtn.addEventListener('click', function(){
    el.value = "任意填入的值";
    console.log(`el.value: ${el.value}`);  // "el.value: 任意填入的值"
    console.log(`el.getAttribute('value'): ${el.getAttribute('value')}`); // "el.getAttribute('value'): 123"
  });
  可以發現網頁上 input 欄位「輸入的值」的確已經被更改為 "任意填入的值"
  但是 el.value 與 el.getAttribute('value') 卻是不一樣的。
  由此可知，修改 el.value 不等於修改 HTML 標籤的 value 屬性值
  
  小統整 :
    1.el.value 對應的是 input 欄位目前「輸入的值」。
    2.el.getAttribute('value') 對應的是 input 欄位的「預設屬性值」。
    3.修改 el.value 並不會影響 input 標籤的 value 預設屬性，使用 setAttribute() 才會。
*/

/* 
  請修改 JS 程式碼來符合下面要求，以下為點擊「觸發按鈕」後所需觸發的程式行為(請觀察網頁畫面渲染的變化)。
  1.將 newValue 轉型為數字型別。
  2.執行 newValue += 300;
  3.將 el.value 重新賦值為 newValue。
  4.用 console.log 輸出 el.value。
  5.使用 getAttribute 取得 el 的 「value 屬性值」，並透過 console.log 輸出。
*/

let el = document.querySelector("#targetInput");
let triggerBtn = document.querySelector("#triggerBtn");
triggerBtn.addEventListener("click", function () {
  let newValue = el.value;
  newValue = parseInt(newValue);
  newValue += 300;
  el.value = newValue;
  console.log(el.value);
  console.log(el.getAttribute("value"));
});
