"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const number1 = Number(prompt("Введите число 1"));
const number2 = Number(prompt("Введите число 2"));
const number3 = Number(prompt("Введите число 3"));

const maxNumbers = (num1, num2, num3) => {
  const result = Math.max(num1, num2, num3);
  return console.log(
    `Максимальное значение среди чисел ${number1}, ${number2}, ${number3} равно ${result}.`
  );
};

maxNumbers(number1, number2, number3);
