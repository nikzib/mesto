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

// Элементы карточек на странице
const pageElements = document.querySelector(".elements");
const pageElementTemplate = document.querySelector("#element").content;

// Элемент добавления нового элемента на страницу
const newElementButton = document.querySelector(".profile__button-add");

// Элементы popup add (новый элемент)
const newElementPopup = document.querySelector("#add-popup");
const newElementForm = newElementPopup.querySelector(".popup__form");
const newElementTitle = newElementPopup.querySelector("#popup-title-input");
const newElementLink = newElementPopup.querySelector("#popup-link-input");

// Элементы увеличенной картинки popup
const popupImage = document.querySelector(".popup_type-image");
const popupImageFigure = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__image-caption");

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

  const element = {
    name: newElementTitle.value,
    link: newElementLink.value,
  };

  addCard(element);

  closePopup(event);
  newElementForm.reset(); // использование метода reset() для очистки
}

// Функция установления like
function likeElement(event) {
  const like = event.target.closest(".element__like-button");
  like.classList.toggle("element__like-button_active");
}

// Функция удаления карточки при нажатии
function deleteElement(event) {
  event.target.closest(".element").remove();
}

// Функция увеличения картинки при нажатии
function zoomPopupImage(event) {
  popupImageFigure.src = event.target.src;
  popupImageFigure.alt = event.target.alt;

  popupImageCaption.textContent = event.target
    .closest(".element")
    .querySelector(".element__title").textContent;

  openPopup(popupImage);
}

// Функция инициализации элементов
function addCard(element) {
  pageElements.prepend(getNewElement(element.name, element.link));
}

function initElements(box, ...elements) {
  elements.forEach((element) => {
    box.prepend(getNewElement(element.name, element.link));
  });
}

// Функция создания из шаблона новой карточки
function getNewElement(name, link) {
  // Создание элемента из шаблона
  const element = pageElementTemplate.querySelector(".element").cloneNode(true);
  const elementImage = element.querySelector(".element__image");

  // Заполнение содержимого
  elementImage.src = link;
  elementImage.alt = name;
  element.querySelector(".element__title").textContent = name;

  // Обработчики нажатий
  element
    .querySelector(".element__image")
    .addEventListener("click", zoomPopupImage); // обрабатывание события нажатия на картинку и её увеличение
  element
    .querySelector(".element__like-button")
    .addEventListener("click", likeElement); // обрабатывание события like
  element
    .querySelector(".element__delete-button")
    .addEventListener("click", deleteElement); // обрабатывание события удаления элемента

  return element;
}

// Обрабатывание событий

// Обрабатывание события popup profile
profileButtonEdit.addEventListener("click", function (edit) {
  profileNameInput.value = profileName.textContent;
  profileProfessionInput.value = profileProfession.textContent;

  openPopup(profileEditPopup);
});

profileEditForm.addEventListener("submit", saveProfilePopup);

// Обрабатывание события popup element (новый элемент)
newElementButton.addEventListener("click", function (create) {
  openPopup(newElementPopup);
});

// Обрабатывание события "создать" нового элемента
newElementForm.addEventListener("submit", saveNewElement);

// Обрабатывание события кнопки закрытия popup
closePopupButton.forEach((button) =>
  button.addEventListener("click", closePopup)
);

// Вызовы функций
initElements(pageElements, ...initialCards); // отображение начальных элементов на странице
