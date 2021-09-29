/*
  DOM Event 事件處理
  使用者瀏覽網頁的行為會觸發許多「事件」，像是按下按鍵、移動滑鼠、點擊網頁元素。
  常見的事件型態包含 click, change, mousemove 等等，可參考 MDN Event reference。
  許多 DOM 元素可透過設定去「監聽」事件，並在被觸發時執行處理事件的程式碼。
  
  過去常見「on + 事件名稱」這樣的寫法，不過現在已經不推薦使用了。
  因為用這種寫法的 DOM 元素只能被綁定一個事件，且後面的宣告會覆蓋前面的觸發事件。
  
  // 不推薦使用
  範例如下 : 
  <html>
    <head>
      <title>「on + 事件名稱」用法</title>
    </head>
    <body>
      <button onclick="triggerAlert(this);">行內寫法</button>
      <button id="btn">綁定元素寫法</button>
    </body>
  </html>
  
  // js
  function triggerAlert() {
    alert('點擊元素 1');
  }
  function triggerAlertSecond() {
    alert('點擊元素 2');
  }
  var el = document.querySelector('#btn');
  el.onclick = triggerAlert;
  el.onclick = triggerAlertSecond; // 只會執行這行
  
  // 推薦使用
  addEventListener()
  因為它可以對一個 DOM 元素同時綁定多個事件處理函數。
  以下介紹常用的三種參數 :
  target.addEventListener("事件型態", 事件處理函數, 選項);
  1.事件型態: 包含前述的 click, change, mousemove 等等。
  2.事件處理函數: 觸發事件時所執行的函式。
  3.選項: 選擇性加入一些額外的事件監聽設定，在此先略過，之後的課堂會介紹。
  範例如下 : 
  <html>
    <head>
      <title> addEventListener() 用法</title>
    </head>
    <body>
      <button id="btn">綁定元素寫法</button>
    </body>
  </html>

  // js
  function triggerAlert() {
    alert('點擊元素 1');
  }
  function triggerAlertSecond() {
    alert('點擊元素 2');
  }
  var el = document.querySelector('#btn');
  // 兩個事件處理函式都會執行
  el.addEventListener('click', triggerAlert);
  el.addEventListener('click', triggerAlertSecond);
  
  問題
  使用 addEventListener() 在 #box 上綁定兩種事件型態: mouseenter ,click。
  1.mouseenter 時會觸發 triggerMouseenter() 函式。
  1.click 時會觸發 triggerClick() 函式。
*/

function triggerMouseenter() {
  console.log("滑入");
}

function triggerClick() {
  alert("點擊");
}

var el = document.querySelector("#box");
el.addEventListener("mouseenter", triggerMouseenter);
el.addEventListener("click", triggerClick);
