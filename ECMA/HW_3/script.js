// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).


class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}`);
    console.log(`Отдел: ${this.department}`);
  }
}

const employee = new Employee("Олег");
employee.displayInfo();

const manager = new Manager("Екатерина", "Отдел кадров");
manager.displayInfo();



// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let product of this.products) {
      totalPrice += product.price;
    }
    return totalPrice;
  }
}
let order = new Order(222);

let product1 = { name: "Product 1", price: 100 };
let product2 = { name: "Product 2", price: 250 };

order.addProduct(product1);
order.addProduct(product2);

console.log(order.getTotalPrice());