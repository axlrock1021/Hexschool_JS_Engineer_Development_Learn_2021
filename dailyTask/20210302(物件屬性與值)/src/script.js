/*
  以下是製作麵包的食譜，請新增一個名為 BreadRecipe 的物件，並依照以下要求設定屬性 :
  1. 新增一個名為 Ingredients 的屬性，其值為一個陣列，包含 ＂高筋麵包粉＂、＂ 牛奶＂、＂酵母＂、＂糖＂、＂鹽＂、＂奶油＂。
  2. 新增一個名為 BakeTime 的屬性，其值為 30。
  3. 新增一個名為 Difficulty 的屬性，其值為 ＂簡單＂。
  4. 新增一個名為 Seasoning 的屬性，其值為一個物件，包含:
     - 屬性名稱: sugar  - 值:＂22g＂
     - 屬性名稱: salt   - 值:＂10g＂
     - 屬性名稱: pepper - 值:＂10g＂
*/

let BreadRecipe = {
  Ingredients: ["高筋麵包粉", "牛奶", "酵母", "糖", "鹽", "奶油"],
  BakeTime: 30,
  Difficulty: "簡單",
  Seasoning: {
    sugar: "22g",
    salt: "10g",
    pepper: "10g",
  },
};
console.log(BreadRecipe);