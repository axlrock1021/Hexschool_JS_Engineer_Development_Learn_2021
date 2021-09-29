/*
  forEach() 是屬於「陣列」的方法，會將陣列內的每個元素一一傳入，並執行給定的函式一次。 
  forEach() 內的函式常見會帶有三個參數，以下為用法示例 :
  1,參數 item 代表陣列中目前正在被處理的那個元素
  2.參數 index 代表陣列中目前正在被處理的那個元素的索引值
  3.參數 array 代表被處理的陣列本身，在此為 data
  let data = ["a", "b", "c"];
  data.forEach(function(item, index, array){
    console.log(item, index, array);
  });
  執行結果 : 
  "a", 0, ["a", "b", "c"]
  "b", 1, ["a", "b", "c"]
  "c", 2, ["a", "b", "c"]
  
  這邊需要特別提醒，在 forEach() 函式內用 return 是無效的，除非程式碼有誤，否則並沒有中止 forEach() 的辦法。 
  let data = ["a", "b", "c"];
  data.forEach(function(item, index, array){
    console.log(item, index, array);
    // 程式碼會忽略這個 return
    return;
  })
*/

// 請根據以下要求撰寫程式碼 :
// 1.如果 NumberAll 陣列內的值大於或等於 30，則用 push() 方法將其加入 NumberAbove30 陣列中。
// 2.如果 NumberAll 陣列內的值小於 30，則用 push() 方法將其加入 NumberUnder30 陣列中。

let NumberAll = [25, 30, 15, 50, 17, 40];
let NumberAbove30 = [];
let NumberUnder30 = [];

NumberAll.forEach(function (item) {
  if (item >= 30) {
    NumberAbove30.push(item);
  } else if (item < 30) {
    NumberUnder30.push(item);
  }
});

console.log(NumberAbove30);
console.log(NumberUnder30);
