"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];


console.log(products);

// products.forEach(element => {
//   const newPrise = element.price*0.85;
//   console.log(newPrise);
// });

products.forEach(function (product) {
  console.log(
    `Цена продукта ${product.id} со скидкой 15% = ${product.price * 0.85}.`
  );
});



// 3.js:35 Цена продукта 3 со скидкой 15% = 170.
// 3.js:35 Цена продукта 4 со скидкой 15% = 765.
// 3.js:35 Цена продукта 1 со скидкой 15% = 850.