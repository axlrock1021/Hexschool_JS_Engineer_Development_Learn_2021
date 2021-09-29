/*
   完成任務可以獲得以下技能
   1. 能定義正確的變數名稱
   2. 瞭解基礎型別
   3. 會透過變數的 number 來計算算式
   4. 會透過變數 + 字串的方式來累加字串內容
   5. 記憶體與指標設計
   6. 鴕峰式命名
   7. let 與 const 使用時機
*/

// 作業一 變數練習
const janeOld = 14;
const janePhoneNumber = "0955713484";
const isWakeUp = false;
console.log(janeOld, janePhoneNumber, isWakeUp);

// 作業二 嘗試變數命名
const steakPrice = 50;
const fishSteakPrice = 30;
const ricePrice = 10;
let walletTotal = 200;

// 作業三 變數計算(連接上題)
let cost = steakPrice * 2 + ricePrice * 3 + fishSteakPrice;
if (cost >= 150 && cost <= walletTotal) {
  console.log(`小明買完飯，他一共剩下 ${walletTotal - cost} 元`);
} else {
  console.lod(`錢帶不夠還想吃飯喔`);
}

// 作業四 布林值與變數定義，是否有用對 let 與 const
let trafficLight;
let isRedLight = true;
let redLightCountDown = 35;
let roadPeopleNum = 10;
let cloudNum = 3;
const sunNum = 1;

// 作業五 看圖宣告變數
let points = 50;
let finishedPeopleNum = 62;
let averageDay = 16;
let averageHour = 9;

// 作業六 變數重新賦予值
let a = 1; // 宣告了一個 a 的變數，並賦予了一個 1 的數字型別
let b = 0; // 宣告了一個 b 的變數，並賦予了一個 0 的數字型別
a = 3;     // 重新賦予一個 3 的數字型別，存入 a 變數
a = b + 2; // 將變數 b 的值與 2 相加的結果，重新賦予給變數 a
a - b;     // 變數 a 的值減掉變數 b 的值
b += 1;    // b = b + 1，變數 b 加上 1 的結果，重新賦值給 b 變數

// 作業七 變數記憶體指向(畫圖)
let d = 1;
let e = 1;
let f = d + e;
e += 1;

// 作業八 愛吃的 Mary
let maryAppleNum = 20;
// 早上吃了 5 顆
maryAppleNum -= 5;
// 中午吃了 12 顆
maryAppleNum -= 12;
// 下午又買了 4 顆
maryAppleNum += 4;
console.log(`Mary 還有 ${maryAppleNum} 顆蘋果`);

// 作業九 餐點庫存計算
let bill = 0;
const hamburgerPrice = 30;
let hamburgerNum = 3;
let hamburgerPriceTotal = hamburgerPrice * hamburgerNum;
const milkTeaPrice = 15;
let milkTeaNum = 32;
let milkTeaPriceTotal = milkTeaPrice * milkTeaNum;
bill = hamburgerPriceTotal + milkTeaPriceTotal;
console.log(`Nick 的帳單總共 ${bill} 元`);

// 作業十 型別查詢
let g = "hello"; // 字串
let h = 123;     // 數字
let i = g + h;   // 字串
let j = true;    // 布林
let k = h + h;   // 數字
let l = j + k;   // 數字

// 自定義題目(樂器行買樂器)
// 如果身上有 5 萬元(含)以上就買樂器，否則就不買
// 吉他一把 5 萬元
let guitarPrice = 50000;
let selfWalletTotal = 9999;
if (selfWalletTotal >= guitarPrice) {
  console.log("有錢買吉他啦");
} else {
  console.log("慢慢打工存錢吧");
}
