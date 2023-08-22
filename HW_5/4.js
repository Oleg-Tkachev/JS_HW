"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];


function filterPhoto(object) {
  if ("photos" in object) {
    if (object.photos != false) {
      return object;
    }
  }
}

console.log(products.filter(filterPhoto));


// Cортировка массив products используя метод sort по цене,
// Начиная от min  ==>> max 

const sortMinMax = products.sort((a, b) => a.price - b.price);
console.log(sortMinMax);

// 4.js:43 (2) 
// 0: {id: 3, price: 127, photos: Array(2)}
// 1: {id: 10, price: 26, photos: Array(1)}

// 4.js:50 
// 0: {id: 10, price: 26, photos: Array(1)}
// 1: {id: 8, price: 78}
// 2: {id: 3, price: 127, photos: Array(2)}
// 3: {id: 5, price: 499, photos: Array(0)}