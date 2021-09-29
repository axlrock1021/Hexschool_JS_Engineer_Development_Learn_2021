// 情境一: 小美買冰塊
// 媽媽叫小美去便利商店買冰塊，小美錢包有 200 元，冰塊一袋 25 元，小美要買 7 袋，請問小美錢包還剩下多少錢 ?
let meiWallet = 200;
let icePrice = 25;
let iceNum = 7;
let leftWallet = meiWallet - (icePrice * iceNum);
console.log(leftWallet); // 剩下 25 元

// 情境二: 小華去速食店，幫她計算差額
// 小華肚子餓要去吃午餐，小華錢包有 180 元，漢堡一份 50 元，可樂一瓶 30 元，小華買的一份漢堡和兩瓶可樂，請問小華錢包還剩下多少錢 ?
let hamPrice = 50;
let hamNum = 1;
let cokePrice = 30;
let cokeNum = 2;
let huaWallet = 180;
let leftMoney = huaWallet - ((hamPrice * hamNum) + (cokePrice * cokeNum));
console.log(leftMoney); // 剩下 70 元