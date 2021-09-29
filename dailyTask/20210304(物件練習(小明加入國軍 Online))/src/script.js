/*
  高雄地區開始實施兵役體檢，只要符合以下其中一個條件就可以免除兵役 :
  1.BMI >= 35
  2.天生為扁平足 (flatFoot)
  請透過以下程式幫小明判斷一下他需不需要當兵，如果需要，則用陣列方法把他加到 militaryData 的 soldierName 裡面。
*/

let militaryData = {
  time: 2021,
  region: "高雄",
  soldierName: ["Tom", "Nick", "John"],
};

let mingStatus = {
  name: "小明",
  residence: "高雄",
  flatFoot: false,
  BMI: 22,
  height: 178,
};

if (mingStatus.flatFoot == true || mingStatus.BMI >= 35) {
  console.log("小明不用當兵");
} else {
  // 將小明填入國軍名單
  militaryData.soldierName.push(mingStatus.name);
  console.log("小明光榮入伍");
  // 請輸出 militaryData 的 soldierName 陣列
  console.log(`名單: ${militaryData.soldierName}`);
}
