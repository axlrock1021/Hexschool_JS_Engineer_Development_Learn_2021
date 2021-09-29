// 觀念一: 函式寫法教學
// 步驟一: 命名函式 (在此 morningAction 是自定義的名稱)
function morningAction() {
  // 定義函式執行內容
  console.log("刷牙");
  console.log("洗臉");
}
// 步驟二: 呼叫函式 (函式可以重複使用)
morningAction();
morningAction();

// 觀念二: 函式裡面仍可以執行函式
function morningAction() {
  // 函式內部也可以呼叫其他函式，好處是可以重複利用程式碼、簡潔版面。
  cleanHead();
  console.log("出門");
}
function cleanHead() {
  console.log("刷牙");
  console.log("洗臉");
}
morningAction();

// 觀念三: 函式參數觀念
// 1.函式可以帶入自定義的參數 (在此為 num1, num2)，並在呼叫函式的時候傳入。
function callNum(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
// num1 等於 1, num2 等於 2
callNum(1, 2);
// num1 等於 2, num2 等於 4
callNum(2, 4);

// 2.參數只存活在大括號。
function callNum(num) {
  // 在此可以成功呼叫 num
  console.log(num);
}
callNum(1);
// 函數外部不可以呼叫 num，這行會報錯。
console.log(num);

// 觀念四: 函式的 return 觀念
// 1.函式可以用 return 回傳一個值，並可以將該值賦予給其他變數。
function calcTotalScore(chineseScore, englishScore) {
  let total = chineseScore + englishScore;
  return total;
}
// 將 calcTotalScore 的回傳值賦值給 markScore。
let markScore = calcTotalScore(60, 50);
console.log(markScore);

// 2. return 會中斷函式執行，可以有多個 return、搭配 if else 做使用。
function calcTotalScore(chineseScore, englishScore) {
  let total = chineseScore + englishScore;
  // 在此因為 total > 100，所以在第一個 if 函式就中斷了。
  if (total > 100) {
    return `總分 ${total}，做的好啊 mark`;
  } else {
    return `總分 ${total}，考得不是很好 mark`;
  }
  // 以下的 return 都不會執行
  return chineseScore;
  return englishScore;
}
let markScore = calcTotalScore(60, 50);
console.log(markScore);
