/*
  1.透過 innerHTML 可以取得 DOM 元素內的「HTML 內容」。
    <div class="targetClass">
      <!--  註解、換行、空白也包含在內  -->
      <p>HTML 標籤的內容也被選取</p>
    </div>
    let targetClass = document.querySelector(".targetClass");
    console.log(targetClass.innerHTML); // <!--  註解、換行、空白也包含在內  --><p>HTML 標籤的內容也被選取</p>
 
  2.可以透過 innerHTML 替換 DOM 元素內的 HTML，需要注意以下幾個重點 :
    1.原先的所有內容都會被清空。
    2.新的內容將被瀏覽器解析成「HTML」，也就是說會保留 HTML 標籤的特性。
    <!-- 以下的 p 標籤會被清空 -->
    <div class="targetClass">
      <p>替換這個 p 標籤</p>
    </div>
    let targetClass = document.querySelector(".targetClass");
    targetClass.innerHTML = "<h3>這是修改後的內容</h3>";
    // 修改後的內容
    這是修改後的內容
    // 修改後的 HTML 結構
    <div class="targetClass">
      <h3>這是修改後的內容</h3>
    </div>

  3.innerHTML 可以跟變數混合使用
    <div class="targetClass"></div>
    let targetClass = document.querySelector(".targetClass");
    let score = 100;
    targetClass.innerHTML = `<p>小華的成績為 ${score} 分</p>`
    // 修改後的內容
    小華的成績為 100 分
    // 修改後的 HTML 結構
    <div class="targetClass">
      <p>小華的成績為 100 分</p>
    </div> 
*/

// 請練習用 querySelector 取得以下元素，並用 innerHTML 修改它的 HTML 結構。
let targetClass = document.querySelector(".targetClass");
targetClass.innerHTML = `<h1>替換成 H1 標題</h1>`;
console.log(targetClass);

