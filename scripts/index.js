// Исходные элементы

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Элементы страницы

// Элементы profile
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

// Элементы popup profile
const profileEditPopup = document.querySelector("#edit-popup");
const profileEditForm = profileEditPopup.querySelector(".popup__form");
const profileNameInput = profileEditPopup.querySelector("#popup-name-input");
const profileProfessionInput = profileEditPopup.querySelector(
  "#popup-profession-input"
);

// Элемент добавления нового элемента на страницу
const newElementButton = document.querySelector(".profile__button-add");

// Элементы popup add (новый элемент)
const newElementPopup = document.querySelector("#add-popup");
const newElementForm = newElementPopup.querySelector(".popup__form");
const newElementTitle = newElementPopup.querySelector("#popup-title-input");
const newElementLink = newElementPopup.querySelector("#popup-link-input");

// Элемент закрытия popup
const closePopupButton = document.querySelectorAll(".popup__close-button");

// Функции

// Функция открытия popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

// Функция закрытия открытого popup
function closePopup(event) {
  const popup = event.target.closest(".popup");
  popup.classList.remove("popup_opened");
}

// Функция сохранения данных и закрытия popup profile
function saveProfilePopup(event) {
  event.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileProfession.textContent = profileProfessionInput.value;

  closePopup(event);
}

// Функция сохранения данных, закрытия popup add и добавления нового элемента
function saveNewElement(event) {
  event.preventDefault();

  const element = {};
  element.name = newElementTitle.value;
  element.link = newElementLink.value;
  createElements(element);

  closePopup(event);
  newElementTitle.value = "";
  newElementLink.value = "";
}

// Функция установления like
function likeElement(event) {
  event.target
    .closest(".element__like-button")
    .classList.toggle("element__like-button_active");
}

// Функция генерирования новых элементов
function createElements(...elements) {
  const cardsElement = document.querySelector(".elements");
  const elementTemplate = document.querySelector("#element").content;

  elements.forEach((element) => {
    const cardElement = elementTemplate
      .querySelector(".element")
      .cloneNode(true); // создание элемента

    cardElement.querySelector(".element__image").src = element.link; // заполнение элемента
    cardElement.querySelector(".element__image").alt = element.name;
    cardElement.querySelector(".element__title").textContent = element.name;

    cardElement
      .querySelector(".element__like-button")
      .addEventListener("click", likeElement); // обрабатывание события like

    cardsElement.prepend(cardElement); // направление элемента в DOM
  });
}

createElements(...initialCards); // отображение начальных элементов на странице

// Обрабатывание событий

// Обрабатывание события popup profile
profileButtonEdit.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  profileProfessionInput.value = profileProfession.textContent;

  openPopup(profileEditPopup);
});

profileEditForm.addEventListener("submit", saveProfilePopup);

// Обрабатывание события popup element (новый элемент)
newElementButton.addEventListener("click", function () {
  openPopup(newElementPopup);
});

// Обрабатывание события "создать" нового элемента
newElementForm.addEventListener("submit", saveNewElement);

// Обрабатывание события кнопки закрытия popup
closePopupButton.forEach((button) =>
  button.addEventListener("click", closePopup)
);
