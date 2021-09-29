/*
  第一題「阿貓與阿狗玩棒球，要記錄比分」
  流程一 ： 第一回合，阿貓得 3 分，阿狗得 2 分
  流程二 ： 第二回合，阿貓得 20 分，阿狗得 3 分
  流程三 ： 中間有插曲，就是阿貓作弊，第二回合才得 2 分卻謊報 20 分，所以必須扣掉 18 分
  流程四 ： 第三回合，阿貓得 1 分，阿狗得 7 分
*/
let roundNum = 0;
let catScore = 0;
let dogScore = 0;

// round 1
roundNum ++;
catScore += 3;
dogScore += 2;

// round 2
roundNum ++;
catScore += 20;
dogScore += 3;

// round 3
roundNum ++;
catScore -= 18;
catScore ++;
dogScore += 7;

// 顯示雙方總得分，console 應印出阿貓 6 分、阿狗 12 分
console.log(`總得分：阿貓 ${catScore} 分、阿狗 ${dogScore} 分`);
// 顯示比了幾回合
console.log(`總共比了 ${roundNum} 回合`);

/*
  第二題 鍛鍊 ： 拆解任務流程與設定變數，「幫媽媽跑腿，紀錄花了多少錢，與跑腿了幾次」
  流程一 ： 小明的媽媽給了小明 300 元，請他去買兩罐牛奶跟兩份吐司，小明到超商後看到牛奶 30 元吐司 20 元。
  流程二 ： 當她到櫃台結帳時，櫃台告訴他剛好今天全部品項都打 5 折 !
  流程三 ： 買回家後，媽媽發現小明的東西都有買齊，就讓小明去玩耍了。
  流程四 ： 最後兩行 code 請用 console.log 印出最後小明花完剩下多少錢，以及當天還能跑腿幾次的變數。
*/
let runNum = 0;
let runRule = 3;
let wallet = 300;
let milkNum = 0;
let toastNum = 0;

// 出門跑腿，定義購買數量
let milkPrice = 30;
let toastPrice = 20;
runRule--;
milkNum += 2;
toastNum += 2;

// 折扣及加總
let milkDiscount = milkPrice * 0.5;
let toastDiscount = toastPrice * 0.5;
let milkTotal = milkDiscount * milkNum;
let tosatTotal = toastDiscount * toastNum;

// 計算及印出
let totalPurchase = milkTotal + tosatTotal;
wallet -= totalPurchase;
console.log(`小明買完東西後，還剩下${wallet}元`);
console.log(`小明當日只能再跑${runRule}次腿`);
