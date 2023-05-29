const openPopupButtonEl = document.querySelector("#open-popup-button");
const closePopupButtonEl = document.querySelector("#close-popup-button");
const editPopupEl = document.querySelector("#edit-popup");
const pageTitleEl = document.querySelector(".profile__name");
const pageSubtitleEl = document.querySelector(".profile__profession");
const nameInputEl = document.querySelector("#popup__name-input");
const subnameInputEl = document.querySelector("#popup__subname-input");
const editFormEl = document.querySelector("#edit-form");

openPopupButtonEl.addEventListener("click", function () {
  openPopup(editPopupEl);
  nameInputEl.value = pageTitleEl.textContent;
  subnameInputEl.value = pageSubtitleEl.textContent;
});

closePopupButtonEl.addEventListener("click", function () {
  closePopup(editPopupEl);
});

nameInputEl.value = pageTitleEl.textContent;
subnameInputEl.value = pageSubtitleEl.textContent;

editFormEl.addEventListener("submit", function (event) {
  event.preventDefault();

  pageTitleEl.textContent = nameInputEl.value;
  pageSubtitleEl.textContent = subnameInputEl.value;

  closePopup(editPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add("popup_opened");
}

function closePopup(popupEl) {
  popupEl.classList.remove("popup_opened");
}

/* Раздел: карточки */

/* Исходные карточки из "коробки" */

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

function createCards(...cards) {
  const cardsElement = document.querySelector(".elements");
  const cardTemplate = document.querySelector("#element").content;

  cards.forEach((card) => {
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);

    cardElement.querySelector(".element__image").src = card.link;
    cardElement.querySelector(".element__image").alt = card.name;
    cardElement.querySelector(".element__title").textContent = card.name;

    cardsElement.prepend(cardElement);
  });
}

createCards(...initialCards);
