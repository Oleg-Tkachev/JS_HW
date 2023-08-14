//  Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
//  вывести в консоль строку:
//  "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

const youName = prompt("Имя");
const surname = prompt("Фамилия");
const age = prompt("Возраст");

const helloSey = (youName, surname, age) => {
  console.log(`Hello, ${youName} ${surname}, ${age} years old`);
};

helloSey(youName, surname, age);

//============================================================================================
//  Создайте функцию, которая принимает число, а возвращает квадрат переданного ей числа.

const square = (number) => {
  return Math.sqrt(number);
};

const result = Number(prompt("введите число"));
console.log(`Квадратный корень из ${result} равен ${square(result)}`);

//==============================================================================================
//  Создайте функцию, которая принимает число.
//  Функция должна вывести в консоль '+++', если число положительное, либо '---',
//  если число было отрицательное. В случае, если было передано не число, либо ноль,
//  функция ничего не должна выводить.

function checkNumber(number) {
  if (number > 0) {
    console.log("+++");
  } else if (number < 0) {
    console.log("---");
  }
}
const userNumber = Number(prompt("введите число"));
checkNumber(userNumber);
checkNumber(Number(prompt("введите число")));

//============================================================================================
// Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.

const sumThreeNumbers = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

console.log(sumThreeNumbers(50, 3, 1));
alert(sumThreeNumbers(4, 7, 3));

//============================================================================================
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

const param1 = Math.floor(Math.random() * (100 - 1) + 1);
const param2 = Math.floor(Math.random() * (100 - 1) + 1);
const param3 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(param1, param2, param3);

const threeSum = (param1, param2, param3) => {
  return param1 + param2 + param3;
};

//============================================================================================
// Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

const dayNumber1 = Number(prompt("введите число от 1 до 7"));

const dayOfWeek = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Wrong input";
  }
};

console.log(`${dayNumber1}-th day of week is ${dayOfWeek(dayNumber)}`);

// Вариант через массив

function getDayOfWeek(number) {
  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  if (number >= 1 && number <= 7) {
    return days[number - 1];
  } else {
    return "Некорректное число дня недели";
  }
}

const dayNumber = parseInt(prompt("Введите число от 1 до 7: "));
console.log(getDayOfWeek(dayNumber));

//========================================================================================
// Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

const myName = prompt("Введите имя: ");
const hours = prompt("Введите время");

/**
 * Sends a special greeting based on daytime
 * @param {string} myName
 * @param {number} hours
 */
const timelyGreeting = (myName, hours) => {
  // const currentTime = new Date();
  // const hours = currentTime.getHours();

  if (hours >= 0 && hours < 6) {
    console.log(`Доброй ночи, ${myName}`);
  } else if (hours >= 6 && hours < 12) {
    console.log(`Доброе утро, ${myName}`);
  } else if (hours >= 12 && hours < 18) {
    console.log(`Добрый день, ${myName}`);
  } else {
    console.log(`Добрый вечер, ${myName}`);
  }
};

timelyGreeting(myName, hours);
