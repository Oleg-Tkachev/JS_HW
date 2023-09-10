
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(minNumber = Math.min(...arr));


// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1, 
// а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  }

const counter = createCounter();
console.log(counter.getCount()); 
counter.increment();
console.log(counter.getCount()); 
counter.decrement();
console.log(counter.getCount()); 


//   Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название
//    класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

//  Не знаю на сколько это правильно, гугл очень помог. Писал по образцу. 
function findElementByClass(rootElement, className) {
  if (rootElement.classList && rootElement.classList.contains(className)) {
    return rootElement;
  }
  for (let i = 0; i < rootElement.children.length; i++) {
    const foundElement = findElementByClass(rootElement.children[i], className);
    if (foundElement) {
      return foundElement;
    }
    return null;
  }
}

// const root = document.getElementById("myTree");
// const foundElement = findElementByClass(root, "myClass");
// console.log(foundElement);


// Напишем функцию, которая будет находить факториал числа с использованием рекурсии

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; 
    } else {
      return n * factorial(n - 1); 
    }
  }
console.log(factorial(5));