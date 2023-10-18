"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. На странице должны отображаться все товары и отзывы 
под каждым товаром. Под каждым блоком отзывов, должна быть возможность добавить 
отзыв для конкретного продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.
*/


const initialData = [
  {
    id: "produkt_1",
    product: "Samsung A55",
    reviews: [
      {
        id: "1",
        text: "Яркий экран, громкий звук.",
      },
    ],
  },
  {
    id: "produkt_2",
    product: "Apple 14 pro",
    reviews: [
      {
        id: "2",
        text: "Аппле ондим словом.",
      },
    ],
  },
  {
    id: "produkt_3",
    product: "Xiaomi Redmi 13",
    reviews: [
      {
        id: "3",
        text: "Чудо китайской инженерии",
      },
    ],
  },
];

initialData.forEach((review) => {
  let userReview = render(review);
  news.insertAdjacentHTML("beforeend", userReview);
});

function render(review) {
  return `<div class="news__item">
    <h2 class="news__item_heading">${review.product}</h2>
    <p class="news__item_text">${review.reviews[0].text}</p>
    <textarea class="news__item_textarea" cols="20" rows="2"></textarea><br>
    <button id="${review.id}" class="load" data-id="load">Добавить отзыв</button></div>`;
}
const addButtons = document.querySelectorAll('[data-id="load"]');
const lastReview = document.querySelector(".news__item_text");

addButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.id === "produkt_1" ||
      e.target.id === "produkt_2" ||
      e.target.id === "produkt_3"
    ) {
      newReviewRender(e);
    }
  });
});

function newReviewRender(e) {
  try {
    const textArea = e.target
      .closest("div")
      .querySelector(".news__item_textarea");
    if (textArea.value.length < 50)
      throw new Error("Слишком маленький отзыв, нужно больше 50 символов");
    if (textArea.value.length > 500)
      throw new Error("Отзыв может содержать не большее 500 символов");
    const userNewReview = e.target.closest("div");
    const p = document.createElement("p");
    p.textContent = textArea.value;
    p.classList.add("new-new");
    userNewReview.insertBefore(p, textArea);
    textArea.value = "";
  } catch (e) {
    alert(e);
  }
}