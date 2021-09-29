/*
  先用 Whimsical 畫流程圖，再寫程式碼
  輸入一個正整數，判斷這個數字是一個奇數還是偶數
  狀況一: 是奇數，則 console.log(“此數為奇數”);
  狀況二: 是偶數，則 console.log(“此數為偶數”);
*/

let number = 78;
if (number % 2 == 0) {
  console.log("此數為偶數");
} else {
  console.log("此數為奇數");
}