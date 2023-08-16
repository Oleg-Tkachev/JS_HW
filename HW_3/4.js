"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const num1 = Number(prompt("Введите первое число"));
const num2 = Number(prompt("Введите второе число"));


function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}
// console.log(sum(num1, num2));
console.log(`Результат сложения ${num1} и ${num2} равен ${sum(num1, num2)}`);


function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
//console.log(multiply(num1, num2));
console.log(`Результат умножения ${num1} и ${num2} равен ${multiply(num1, num2)}`);



function division(num1, num2) {
  const result = num1 / num2;
  return result;
}
// console.log(division(num1, num2));


function subtractionLargNumIsSmallNum(num1, num2) {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  const result = maxNum - minNum;
  return result;
}

// console.log(subtractionLargNumIsSmallNum(num1, num2));
