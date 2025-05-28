// const cardOne = document.querySelector(".card-1");
// const cardTwo = document.querySelector(".card-2");
// const cardThree = document.querySelector(".card-3");
// const btn = document.querySelector(".btn-none");
// const btnTwo = document.querySelector(".button");

// cardOne.addEventListener("click", function () {
//   const isActiv = cardOne.classList.contains("card-outlined");
//   const isActivBtn = btn.classList.contains("btn");

//   btn.classList.add("btn-none");
//   btn.classList.remove("btn");
//   cardOne.classList.remove("card-outlined");
//   cardTwo.classList.remove("card-outlined");
//   cardThree.classList.remove("card-outlined");
//   if (!isActiv && !isActivBtn) {
//     cardOne.classList.add("card-outlined");
//     btn.classList.add("btn");
//     btn.classList.remove("btn-none");
//   }
// });

// cardTwo.addEventListener("click", function () {
//   const isActiv = cardTwo.classList.contains("card-outlined");
//   const isActivBtn = btn.classList.contains("btn");

//   btn.classList.add("btn-none");
//   btn.classList.remove("btn");
//   cardOne.classList.remove("card-outlined");
//   cardTwo.classList.remove("card-outlined");
//   cardThree.classList.remove("card-outlined");
//   if (!isActiv && !isActivBtn) {
//     cardTwo.classList.add("card-outlined");
//     btn.classList.add("btn");
//     btn.classList.remove("btn-none");
//   }
// });

// cardThree.addEventListener("click", function () {
//   const isActiv = cardThree.classList.contains("card-outlined");
//   const isActivBtn = btn.classList.contains("btn");

//   btn.classList.add("btn-none");
//   btn.classList.remove("btn");
//   cardOne.classList.remove("card-outlined");
//   cardTwo.classList.remove("card-outlined");
//   cardThree.classList.remove("card-outlined");
//   if (!isActiv && !isActivBtn) {
//     cardThree.classList.add("card-outlined");
//     btn.classList.add("btn");
//     btn.classList.remove("btn-none");
//   }
// });
const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");
const cardThree = document.querySelector(".card-3");
const btn = document.querySelector(".btn-none");
const btnTwo = document.querySelector(".button");
const cardNone = document.querySelector(".none-card");
const arrowBack = document.querySelector(".back");

function handleCardClick(activeCard) {
  const isActive = activeCard.classList.contains("card-outlined");

  // Убираем обводку со всех карточек
  cardOne.classList.remove("card-outlined");
  cardTwo.classList.remove("card-outlined");
  cardThree.classList.remove("card-outlined");

  // Прячем кнопку
  btn.classList.remove("btn");
  btn.classList.add("btn-none");

  cardNone.classList.remove("none-card-2");
  cardNone.classList.add("none-card");

  // Если карточка неактивна — активируем её и показываем кнопку
  if (!isActive) {
    activeCard.classList.add("card-outlined");
    btn.classList.add("btn");
    btn.classList.remove("btn-none");
    btnTwo.classList.remove("button-padding");
  }
}

cardOne.addEventListener("click", () => handleCardClick(cardOne));
cardTwo.addEventListener("click", () => handleCardClick(cardTwo));
cardThree.addEventListener("click", () => handleCardClick(cardThree));

btn.addEventListener("click", function () {
  const cards = [cardOne, cardTwo, cardThree];

  const isActiveBtn = cards.some((card) =>
    card.classList.contains("card-outlined")
  );

  if (!isActiveBtn) {
    btnTwo.classList.add("button-padding");
    cardNone.classList.add("none-card-2");
  } else {
    btnTwo.classList.remove("button-padding");
    cardNone.classList.remove("none-card-2");
  }
});

function windowHref(links) {
  if (cardOne.classList.contains("card-outlined")) {
    window.location.href = "/subCategory/subcategory.html";
  } else if (cardTwo.classList.contains("card-outlined")) {
    window.location.href = "";
  } else if (cardThree.classList.contains("card-outlined")) {
    window.location.href = "";
  }
}

btn.addEventListener("click", () => windowHref());

arrowBack.addEventListener("click", () => {
  window.location.href = "/SalePage/sale.html";
});
