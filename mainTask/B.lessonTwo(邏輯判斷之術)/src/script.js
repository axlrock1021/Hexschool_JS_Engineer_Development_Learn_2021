/*
  完成任務可以獲得以下技能
  1.使用 &&、||、≥、≤
  2.if、else、else if
*/

// 作業一 比較運算子
let a = 4;
let b = 5;
console.log(a > 0);       // true
console.log(b > a);       // true
console.log((a + b) > 1); // true

let c = 5;
let d = 6;
console.log(c == d);  // false
console.log(c !== d); // true

let e = 8;
let f = 5;
console.log(f >= e); // false
console.log(f != e); // true
console.log(f == e); // false

// 作業二 比較運算子 + 強制轉型
let g = 8;
let h = "8";
console.log(g * h == 88);  // false
console.log(g * h == 64);  // true
console.log(g * h === 64); // true

let i = "9";
let j = "9";
console.log(i + j == 99);    // true
console.log(i + j === "99"); // true
console.log(i + j === 99);   // false

var k = 2;
var l = "5";
console.log((k * l) >= 5); // true，(k * l) 會強制轉型為數字型別，接著會再做運算比較

// 作業三 if 練習
let m = 1;
if (2 > 1) {
    m = 3;
}
console.log(m); // 3

let n = 5;
if (true) {
    n += 10;
}
console.log(n); // 15
// 只要條件判斷為真，會進入 {} 裡執行裡面的內容，m or n 會被重新賦予值

// 作業四 if 練習
// 情境 : 計算金額
// 媽媽帶小明去火鍋吃到飽吃飯
// 他們看了金額，成人 600 元，小孩 300 元
// 未滿 120(含) 公分就免費
// 於是小明寫了些程式碼，但就做不下去了
// 一起幫小明補程式碼，計算最後他們要付多少錢
let childHeight = 133;
let restaurantchildHeight = 120;
let bill = 600;
if (childHeight > restaurantchildHeight) {
    bill += 300;
}
console.log(`他們總共支付了${bill}元`);

// 作業五 if else 練習
// 情境 : 好寶寶徽章
// 小華目前有三個好寶寶徽章
// 父親請他跑腿買五個東西
// 並和他說，如果他都買對，就再給他三個徽章
// 如果買錯的話，就只給一個徽章
// 但最後他買錯了，只買了四個東西
// 請用 if else 語法，來幫小華看看他得了多少徽章
let badge = 3;           
let fatherBuyStuff = 5;  
let xiaohuaBuyStuff = 4;

if (xiaohuaBuyStuff == fatherBuyStuff) {
    badge += 3;
} else {
    badge += 1;
}
console.log(`小華一共得了${badge}個徽章`);

// 作業六 邏輯運算子
let o = 200;
let p = 300;
console.log(o == 200 || p == 300);   // true
console.log(o !== 200 || p !== 300); // false
console.log(o === 200 && p === 300); // true

let hamPrice = 50;
let hamNum = 20;
let isSale = (3000 <= hamPrice * hamNum) || (hamNum > 10);
console.log(isSale); // true，|| 運算子一邊條件為真時，就會運行後續程式碼

// 作業七 邏輯觀察
// 任務一 當 weight 在 40 以上時，小於 60 時，console.log 顯示過輕
// 任務二 當 weight 在 60 以上時，小於 80 時，console.log 顯示正常
// 任務三 當 weight 在 80 以上時，console.log 顯示過重
let weight = 75;
if (weight >= 40 && weight < 60) {
    console.log("體重過輕");
} else if (weight >= 60 && weight < 80) {
    console.log("體重正常");
} else if (weight >= 80) {
    console.log("體重過重");
} else {
    console.log("輸入錯誤");
}

// 作業八 邏輯運算子 + if
// 情境 : 百貨公司贈品
// 百貨公司有 200 個贈品，只要有達以下條件之一，就送客戶一個贈品
// 1.消費滿 399 元
// 2.是百貨公司的 VIP 會員

// Bob 今天來消費了 500 元，但並非 VIP 會員
// 請問 Bob 是否有獲得贈品，以及贈品剩下多少?

let giftNum = 200;       // 贈品數量
let giftPriceRule = 399; // 贈品消費門檻
let BobPrice = 500;      // Bob 消費金額
let BobIsVip = false;    // Bob 是否為 VIP
if (BobPrice >= giftPriceRule || BobIsVip) {
    giftNum -= 1;
    console.log("客戶您好，您有符合贈品資格");
} else {
    console.log("客戶您好，您沒有符合贈品資格");
}
console.log(`贈品還剩下${giftNum}個`);

// 作業九
// 貪心國的個人所得稅非常重
// 會計官想寫一個程式，來去計算民眾的稅收，以下為條件值
// 條件一 不管有沒有工作，基本費先收 5000 元
// 條件二 全年所得在 54 萬以下者，收 30% 稅收
// 條件三 全年所得超過 54 萬 ~ 100 萬者，收 50% 稅收
// 條件四 全年所得超過 100 萬者，收 80% 稅收
let mingMoney = 870000; // 小明全年個人所得
let mingBill = 5000;    // 小明稅收帳單，已加入條件一基本費 5000 元
let tax;                // 稅收
if (mingMoney <= 540000) {
    tax = 0.3;
} else if (mingMoney > 540000 && mingMoney <= 1000000) {
    tax = 0.5;
} else if (mingMoney > 1000000) {
    tax = 0.8;
} else {
    console.log("格式錯誤");
}
// 計算結果(基本費 + (個人所得 * 稅收))
mingBill = mingBill + (mingMoney * tax);
console.log(`小明總共需支付${mingBill}元帳單`);

// 作業十
// 請用 whimsical 服務畫出剪刀石頭布的流程圖
// 請寫程式來判斷輸贏
// 請宣告兩個變數
let playerA = "石頭";
let playerB = "剪刀";
if (playerA === playerB) {
    console.log("平手");
} else if ((playerA == "剪刀" && playerB == "布") || (playerA == "石頭" && playerB == "剪刀") || (playerA == "布" && playerB == "石頭")) {
    console.log("玩家 A 獲勝");
} else if ((playerA == "布" && playerB == "剪刀") || (playerA == "剪刀" && playerB == "石頭") || (playerA == "石頭" && playerB == "布")) {
    console.log("玩家 B 獲勝");
} else {
    console.log("格式錯誤，請輸入'剪刀' or '石頭' or '布'");
}

// 自定義題目
// 請用 whimsical 服務畫出三國之爾虞我詐的流程圖
let dynasty = "三國"; // 朝代
let weiPower = 10000; // 魏戰力
let shuPower = 7000;  // 蜀戰力
let wuPower = 5000;   // 吳戰力
if(dynasty == "三國") {
    if (weiPower > shuPower || weiPower > wuPower) {
        console.log("魏國萬歲!!!");
    } else {
        console.log("蜀吳聯盟萬歲!!!");
    }
} else {
    console.log("大哥，你跑錯棚囉");
}




