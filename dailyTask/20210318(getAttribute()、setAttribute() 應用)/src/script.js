/*
  getAttribute()
    1.使用 getAttribute 可以回傳一個元素上的指定屬性值，語法如下 :
      element.getAttribute("屬性名稱");
      <!-- HTML -->
      <div id="targetId">目標 Id</div>
      // JS
      let element = document.querySelector('#targetId');
      console.log(element.getAttribute('id')); // targetId
    2.使用 getAttribute 取用屬性時，如果指定的屬性不存在，則會回傳 null 或 ""。
      <!-- HTML -->
      <div id="targetId">目標 Id</div>
      // JS
      let element = document.querySelector('#targetId');
      console.log(element.getAttribute('name')); // 由於 name 屬性不存在，因此會回傳 null

  setAttribute()
    1.可以使用 setAttribute 替指定元素設定屬性值，語法如下 :
      element.setAttribute("屬性名稱", "屬性值");
      <!-- HTML -->
      <div id="targetId">目標 Id</div>
      // CSS
      .colorRed{
       color: #FF0000;
      }
      // JS
      let element = document.querySelector('#targetId');
      element.setAttribute('class', 'colorRed');
      // 目標 Id(紅色)
*/

/*
  請根據 HTML、CSS 以及題目條件撰寫 JS 程式碼
  如果 element 的 name 屬性為 “google”，請執行以下要求 
  要求一 : 將 element 的 href 屬性更改為 "https://www.google.com/"
  要求二 : 替 element 新增一個 target 屬性，並設定為 "_blank"
  要求三 : 替 element 新增一個 class 屬性，並設定為 "colorRed"
*/

let element = document.querySelector("#targetId");
if (element.getAttribute("name") === "google") {
  element.setAttribute("href", "https://www.google.com");
  element.setAttribute("target", "_blank");
  element.setAttribute("class", "colorRed");
}
