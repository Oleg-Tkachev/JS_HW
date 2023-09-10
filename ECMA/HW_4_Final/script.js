
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users)
// и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. 
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. 
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage


function getUsers() {
  // Отправляем GET запрос на указанный URL
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      // Сохраняем список пользователей в localStorage
      localStorage.setItem('users', JSON.stringify(data));

      // Отображаем пользователей на странице
      displayUsers(data);
    })
    .catch(error => {
      console.log('Ошибка:', error);
    });
}

// Функция для отображения пользователей на странице
function displayUsers(users) {
  // Очищаем текущий список пользователей
  document.getElementById('userList').innerHTML = '';

  // Перебираем всех пользователей
  users.forEach(user => {
    // Создаем элемент списка для каждого пользователя
    const listItem = document.createElement('li');
    listItem.innerHTML = `${user.name} <button onclick="deleteUser(${user.id})">Удалить</button>`;

    // Добавляем элемент списка в список пользователей на странице
    document.getElementById('userList').appendChild(listItem);
  });
}

// Функция для удаления пользователя
function deleteUser(userId) {
  // Получаем текущий список пользователей из localStorage
  const users = JSON.parse(localStorage.getItem('users'));

  // Фильтруем список пользователей, исключая удаленного пользователя
  const updatedUsers = users.filter(user => user.id !== userId);

  // Сохраняем обновленный список пользователей в localStorage
  localStorage.setItem('users', JSON.stringify(updatedUsers));

  // Отображаем обновленный список пользователей на странице
  displayUsers(updatedUsers);
}

// Получаем список пользователей и отображаем на странице
getUsers();



// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.


// Функция для загрузки и отображения картинки собаки
function showDogImage(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.message;
      const img = document.createElement("img");
      img.src = imageUrl;
      document.body.appendChild(img);
      console.log("Отрисована картинка собаки");
    })
    .catch((error) => {
      console.log("Не удалось загрузить картинку");
    });
}

// Отображаем 10 картинок собак с интервалом в 3 секунды
function displayDogImages() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      const randomBreeds = breeds.slice(0, 10);
      randomBreeds.forEach((breed, index) => {
        setTimeout(() => {
          const breedUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
          showDogImage(breedUrl);
        }, index * 3000);
      });
    })
    .catch((error) => {
      console.log("Не удалось получить список пород собак");
    });
}

displayDogImages();