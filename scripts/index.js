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
