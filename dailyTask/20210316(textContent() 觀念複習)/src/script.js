/*
  1.透過 textContent 可以取得 DOM 元素內的「純文字內容」，HTML 會被忽略 (請注意「純文字內容」有包含換行以及空格)。
    <div class="targetClass">
      <p>取得這個 p 標籤的純文字</p>
    </div>
    let targetClass = document.querySelector(".targetClass p");
    console.log(targetClass.textContent); // 取得這個 p 標籤的純文字
    
  2.可以透過 textContent 替換 DOM 元素內的內容，需要注意以下幾個重點 :
    1. 原先的所有內容都會被清空 (包含 HTML 標籤)。
    2. 新的內容將被瀏覽器解析成「純文字」，不會保留 HTML 標籤的特性。
       <!-- 以下的 p 標籤會被清空，替換成純文字 "<h3>修改後的內容</h3>" -->
       <div class="targetClass">
        <p>替換這個 p 標籤</p>
       </div>
       let targetClass = document.querySelector(".targetClass");
       targetClass.textContent = "<h3>修改後的內容</h3>";
       console.log(targetClass.textContent); // <h3>修改後的內容</h3> (網頁渲染出的畫面)
       <div class="targetClass"><h3>修改後的內容</h3></div>(修改後的 HTML 結構)

  3.textContent 可以跟變數混合使用
    <div class="targetClass"></div>
    let targetClass = document.querySelector(".targetClass");
    let score = 100;
    targetClass.textContent = `<p>小華的成績為 ${score} 分</p>`
    console.log(targetClass); // <p>小華的成績為 100 分</p> (網頁渲染出的畫面)
    <div class="targetClass"><p>小華的成績為 100 分</p></div>(修改後的 HTML 結構)
*/

// 請練習用 querySelector 取得以下元素，並用 textContent 替它新增一些文字內容。
let targetClass = document.querySelector(".targetClass");
targetClass.textContent = "修改後";
