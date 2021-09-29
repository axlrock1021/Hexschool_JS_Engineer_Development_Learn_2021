/*
  Object.keys() 可以取得指定物件的所有 key 值，並回傳一個陣列。
  Object.values() 可以取得指定物件的所有 value 值，並回傳一個陣列。
  const object1 = {
    a: "字串",
    b: 42,
    c: false
  };
  console.log(Object.keys(object1));   // 結果: ["a", "b", "c"]
  console.log(Object.values(object1)); // 結果: ["字串", 42, false]

  請練習使用 Object.keys()，修改資料格式，並存入名稱為 answer 的物件。
*/
console.clear();
let answer = {};
let url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
axios.get(url).then((response) => {
  let total = {};
  let data = response.data;
  data.forEach((item) => {
    if (total[item.jsGroup] === undefined) {
      total[item.jsGroup] = 1;
    } else {
      total[item.jsGroup] += 1;
    }
  });
  let keyName = Object.keys(total);
  keyName.forEach((item) => {
    if (item !== "未分組") {
      answer[`第 ${item} 組人數`] = total[item];
    } else {
      answer[`${item}人數`] = total[item];
    }
  });
  console.log(answer);
});
