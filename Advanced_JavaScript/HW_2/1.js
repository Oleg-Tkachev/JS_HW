"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/


class Library {
  #allBooks = [];

  get allBooks() {
    return this.#allBooks;
  }

  addBook(title) {
    if (this.#allBooks.includes(title))
      throw new Error("Такая книга уже есть в списке");
    this.#allBooks.push(title);
    return this.#allBooks;
  }

  removeBook(title) {
    const bookIndex = this.#allBooks.indexOf(title);
    if (bookIndex === -1) throw new Error("Такой книги нет в списке");
    this.#allBooks.splice(bookIndex, 1);
    return this.#allBooks;
  }

  constructor(bookArray) {
    bookArray.map((book) => {
      if (this.#allBooks.includes(book))
        throw new Error(`Книга ${book} уже добавелно`);
      this.#allBooks.push(book);
    });
  }

  hasBook(title) {
    return this.#allBooks.includes(title);
  }
}
