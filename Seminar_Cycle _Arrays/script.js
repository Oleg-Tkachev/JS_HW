
// Создайте массив с элементами 1, 2, 3. 
// Выведите на экран каждый из этих элементов.

const arr = [1, 2, 3];
console.log(arr);
// =========================================================


// Создайте массив с произвольными элементами. 
// Выведите на экран количество элементов в этом массиве.


const arr = [1, 2, 3, 4];
console.log(arr.length);

// =========================================================

// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента 
// число 1, вместо второго - 2, вместо третьего - 3.

const arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[20] = 3;
console.log(arr);
console.log(arr[5]);

// =========================================================

// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте 
// каждый элемент массива на единицу.

const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  arr[i]++;
}
console.log(arr);

// =========================================================

// Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

const arr = [1, 2, 3];
arr.push(4, 5, 7);
console.log(arr);
arr.unshift(100, 200);
console.log(arr);

// =========================================================

// Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

const arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 100, 200);
arr.splice(4, 0, 400);
console.log(arr);

// Удаляет элемент с конца 
const arrElem = arr.pop();
console.log(arr);
console.log(arrElem); 


// Удаляет элемент внечале массива 
const arrElem2 = arr.shift();
console.log(arrElem2);
console.log(arr);


// =========================================================

// С помощью цикла for выведите в консоль числа от 11 до 33.

for (let i = 11; i < 33; i++) {
  console.log(i);
}


// =========================================================

// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 
// до 100 включительно.

for (let index = 1; index <= 100; index++) {
  if (index % 2) {
    console.log(index);
  }
}

for (let index = 1; index <= 100; index += 2) {
  console.log(index);
}


// С помощью цикла for выведите в консоль числа от 100 до 0.

for (let index = 100; index > 0; index--) {
  console.log(index);
}

// =========================================================

// Создать переменную с заданным числом. Умножайте число на 3 столько раз, 
// пока результат умножения не станет больше 1000. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.

let num = 10;
let count = 0;
while (num <= 1000) {
  num *= 3;
  count++;
}
console.log(num);
console.log(`Количество итераций ${count}`);


// Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.


const arr = [2, 5, 9, 15, 1, 4];
for (let index = 0; index < arr.length; index++) {
  if (arr[index] > 3 && arr[index] < 10) {
    console.log(arr[index]);
  }
}


// Найдите сумму четных чисел от 2 до 100.

let sum = 0;
for (let index = 2; index < 100; index += 2) {
  sum += index;
}
console.log(sum);


// =========================================================

// Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.

const arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (let index = 0; index < arr.length; index++) {
  sum +=arr[index];
  
}
console.log(sum);




const arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (const element of arr) {
  sum += element;
}
console.log(sum);


// Решение через метод
// console.log(arr.reduce((a, x) => a + x, 0));


// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.


let str = "-";
for (let index = 1; index < 10; index++) {
  str += `${index}-`;
}
console.log(str);



// Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в 
// консоль до тех пор, пока не встретится элемент со значением 0. После этого 
// цикл должен завершить свою работу.

const arr = [2, 5, 9, 0, 3, 1, 4];
for (const iterator of arr) {
  if (!iterator) {
    break;
  }
  console.log(iterator);
}


// =========================================================

// Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

const arr = [];
const randint = (min=0, max=100) => Math.floor(Math.random() * (max - min+1) + min)


for (let index = 0; index < 10; index++) {
  arr.push(randint());

  if (!(arr[index] % 6)) {
    console.log(arr[index]);
  }
}
console.log(arr);


// Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество 
// цифр 3 в этом массиве.

const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    count++;
  }
}
console.log(count);


// Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);