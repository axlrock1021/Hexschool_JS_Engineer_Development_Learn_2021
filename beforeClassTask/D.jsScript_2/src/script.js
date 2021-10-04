let a = 50;
a = a + 200;
a = a + 150;
console.log(a); // 400

let b = 50;
b++;
console.log("b:", b); // "b:" 51
--b;
console.log("--b", b); // "--b" 50
a--;
b++;
console.log("a:", a, " b:", b); // "a:" 399 " b:" 51
