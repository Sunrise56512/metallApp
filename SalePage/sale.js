const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");
const btn = document.querySelector(".btn-none");
const cardParagraph = document.querySelector(".none-card");
const btnTwo = document.querySelector(".button");

cardTwo.addEventListener("click", function () {
  if (cardTwo.classList.contains("card-2")) {
    cardTwo.classList.add("card-outlined");
    cardTwo.classList.remove("card-2");
    cardOne.classList.remove("card-outlined");
    cardOne.classList.add("card-1");
    btn.classList.add("btn");
    btn.classList.remove("btn-none");
    cardParagraph.classList.remove("none-card-2");
    btnTwo.classList.add("button");
    btnTwo.classList.remove("button-padding");
  } else if (cardTwo.classList.contains("card-outlined")) {
    cardTwo.classList.add("card-2");
    cardTwo.classList.remove("card-outlined");
    btn.classList.remove("btn");
    btn.classList.add("btn-none");
  }
});

cardOne.addEventListener("click", function () {
  if (cardOne.classList.contains("card-1")) {
    cardOne.classList.add("card-outlined");
    cardOne.classList.remove("card-1");
    cardTwo.classList.remove("card-outlined");
    cardTwo.classList.add("card-2");
    btn.classList.add("btn");
    btn.classList.remove("btn-none");
    cardParagraph.classList.remove("none-card-2");
    btnTwo.classList.add("button");
    btnTwo.classList.remove("button-padding");
  } else if (cardOne.classList.contains("card-outlined")) {
    cardOne.classList.add("card-1");
    cardOne.classList.remove("card-outlined");
    btn.classList.remove("btn");
    btn.classList.add("btn-none");
  }
});

btn.addEventListener("click", function () {
  if (cardOne.classList.contains("card-outlined")) {
    window.location.href = "/categoryPage/categoty.html";
  } else if (cardTwo.classList.contains("card-outlined")) {
    window.location.href = "";
  } else {
    cardParagraph.classList.add("none-card-2");
    btnTwo.classList.add("button-padding");
    btnTwo.classList.remove("button");
  }
});
