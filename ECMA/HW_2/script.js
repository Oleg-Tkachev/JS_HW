// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Название: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Количество страниц: ${this.pages}`);
  }
}

const book = new Book("Война и мир", "Лев Толстой", 1000);
book.displayInfo();



// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}`);
    console.log(`Возраст: ${this.age}`);
    console.log(`Класс: ${this.grade}`);
  }
}

const student = new Student("Олег", 20, "10В");
student.displayInfo();


// script.js:16 Название: Война и мир
// script.js:17 Автор: Лев Толстой
// script.js:18 Количество страниц: 1000

// script.js:43 Имя: Олег
// script.js:44 Возраст: 20
// script.js:45 Класс: 10В