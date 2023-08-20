"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/



for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 === 0) {
    console.log(`${i} - это четное число`);
  } else {
    console.log(`${i} - это нечетное число`);
  }
}



// 0 - это ноль
// 1.js:21 1 - это нечетное число
// 1.js:19 2 - это четное число
// 1.js:21 3 - это нечетное число
// 1.js:19 4 - это четное число
// 1.js:21 5 - это нечетное число
// 1.js:19 6 - это четное число
// 1.js:21 7 - это нечетное число
// 1.js:19 8 - это четное число
// 1.js:21 9 - это нечетное число
// 1.js:19 10 - это четное число