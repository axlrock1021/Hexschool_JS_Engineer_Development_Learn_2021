/*
  querySelector 這個強大的選擇器，它會回傳它在網頁 document 中所找到的「第一個」符合設定的元素，在 HTML 中由上而下開始找。
  querySelector 的寫法相當多元，以下就來整理一些課堂上有教到的寫法 :
  1.可以直接選取 HTML 元素
    <!-- querySelector 只會回傳第一個符合選取條件的元素 -->
    <p>我被 el 選到了</p>  
    <p>我沒有被選到</p>
    let el = document.querySelector("p");
  2.可以選取帶有 id 或 class 的元素
    <p id="targetID">我被 elementID 選到了</p>
    let elementID = document.querySelector("#targetID");
    <p class="targetClass">我被 elementClass 選到了</p>
    let elementClass = document.querySelector(".targetClass");
  3.可以用類似 CSS 的撰寫方式選取
    <div id="targetID">
      <p>我被 elementID 選取到了</p>
    </div>
    <!-- 以下是 span 被選取到 -->
    <div class="targetClass">
      <p>
        <span>我被 elementClass 選取到了</span>
      </p>
    </div>
    let elementID = document.querySelector("#targetID > p");
    let elementClass = document.querySelector(".targetClass > p > span");
*/

// 請練習用 querySelector 選取元素，並依照以下程式碼註解的要求撰寫 JS
// 第一題
let el_one = document.querySelector("#targetID");
console.log(el_one);
// 第二題
let el_two = document.querySelector(".targetClass");
console.log(el_two);
// 第三題
let el_three = document.querySelector(".targetElementP > p");
console.log(el_three);
