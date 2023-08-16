"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const numberFromUser = Number(prompt("Введите число для возведения в куб"));
const numInCube = (num) => {
  return num ** 3;
};

console.log(numInCube(numberFromUser));

// Второй вариант через Math

function cube(number) {
  return Math.pow(number, 3);
}

console.log(cube(numberFromUser));
