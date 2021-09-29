/*
  map() 與 filter() 有許多共通點，以下條列他們的共同點及特性 :
  1.皆為 JavaScript 的陣列方法。
  2.都不會影響到原來的陣列，而是會回傳一個新的陣列。
  3.都是透過 callback 函式來處理陣列中的元素，函式參數可帶入「目前正在處理的元素」、「正在處理的元素索引」、「原始陣列」。
  4.而它們最大的差異在於 : filter() 產生的新陣列只會包含「符合回傳條件」的元素，map() 則是會包含「運算後」的所有元素。
  舉例來說:
  1.filter()
    let a = [1,2,3,4];
    let new_a = a.filter(function(item){
      return item > 1;
    });
    console.log(new_a); // 2,3,4
  2.map()
    let a = [1,2,3,4];
    let new_a = a.map(function(item){
      return item > 1;
    });
    console.log(new_a); // false, true, true, true
  可看出 filter() 陣列回傳的是「判斷為 true 的元素」，map() 陣列回傳的是「元素的運算結果」。
  注意，map() 一定會替原始陣列的每個元素回傳一個值，如果不回傳則為 undefined。
  範例 :
  let a = [1,2,3,4];
  mapEmpty = a.map(function(item, index, array){
    // 假設不設定回傳
  });
  console.log(mapEmpty); // undefined, undefined, undefined, undefined 
*/

// 問題一
// 請透過 map() 將 arr 內的元素都乘以 2，並指派給 newArr。

let arr = [1, 4, 9, 16];
let newArr = [];

newArr = arr.map(function (item) {
  return item * 2;
});

console.log(arr);
console.log(newArr);

// 問題二
// 以下為 customer 顧客資料，請透過 map() 方法，修改程式碼並執行以下要求 :
// 1.取出各個陣列元素的 Name 形成一個新的陣列，並指派給 customerName
//   如: [“Jordan”, “Jenny”, “Kevin”, “louis”]
// 2.取出各個陣列元素的 id 形成一個新的陣列，並指派給 customerId
//   如: [123, 456, 789, 987]

let customer = [
  {
    Name: "Jordan",
    id: 123,
  },
  {
    Name: "Jenny",
    id: 456,
  },
  {
    Name: "Kevin",
    id: 789,
  },
  {
    Name: "louis",
    id: 987,
  },
];

let customerName = [];
let customerId = [];

customerName = customer.map(function (item) {
  return item.Name;
});

customerId = customer.map(function (item) {
  return item.id;
});

console.log(customerName);
console.log(customerId);
