/*
  在物件內新增、修改、取得屬性的方法有以下兩種 :
  1. 點記法 (Dot notation)
     let obj = {};
     obj.key = value;      // 新增或修改
     console.log(obj.key); // 取得
  2. 括弧記法 (Bracket notation)
     let obj = {};
     當 key 的值帶有小數點或是空格時可以使用 (例如 : some.data)，記得要加上引號(單引號或雙引號皆可)
     obj["key"] = value;      // 新增或修改
     console.log(obj["key"]); // 取得

  如果屬性一開始就存在，則以上的語法會更新該屬性的值，反之則會建立一個新的屬性。
  請透過 console.log，嘗試透過前面所介紹的 2 種方法依序輸出以下屬性 :
*/

let weather = {
  Country: "高雄",
  "PM2.5": 35,
  isSunny: false,
  rainingRegion: ["鼓山", "鹽埕", "旗津"],
  rainFall: {
    鼓山: 400,
    鹽埕: 300,
  },
};

// 取得 Country 的值
console.log(weather.Country);
console.log(weather["Country"]);

// 取得 "PM2.5" 的值
console.log(weather["PM2.5"]);

// 取得 isSunny 的值
console.log(weather.isSunny);
console.log(weather["isSunny"]);  

// 取得 rainingRegion 陣列的第一個值 '鼓山'
console.log(weather.rainingRegion[0]);

// 在 rainFall 新增一個屬性名為「旗津」、設定值為 200，並輸出答案
weather.rainFall.旗津 = 200;
console.log(weather.rainFall);
weather["rainFall"]["旗津"] = 200; 
console.log(weather["rainFall"]["旗津"]);
