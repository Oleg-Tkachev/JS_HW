"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 0; i <= 20; i++) {
  let count = "";
  for (let j = 0; j <= i; j++) {
    count += "x";
  }
  console.log(count);
}



// x
// 4.js:20 xx
// 4.js:20 xxx
// 4.js:20 xxxx
// 4.js:20 xxxxx
// 4.js:20 xxxxxx
// 4.js:20 xxxxxxx
// 4.js:20 xxxxxxxx
// 4.js:20 xxxxxxxxx
// 4.js:20 xxxxxxxxxx
// 4.js:20 xxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxxxxxxxx
// 4.js:20 xxxxxxxxxxxxxxxxxxxxx