const bannerSwap = document.querySelector("#banner-swap");
const karuselSwap = document.querySelector(".kar-1");
const karuselSwaptwo = document.querySelector(".kar-2");
const titleSwap = document.querySelector(".header");
const descripSwap = document.querySelector(".description");
const buttonClick = document.querySelector(".btn");

setInterval(() => {
  const currySrc = bannerSwap.getAttribute("src");
  if (currySrc === "/img/banner_background.svg") {
    bannerSwap.setAttribute("src", "/img/banner_background_1.svg");
  } else {
    bannerSwap.setAttribute("src", "/img/banner_background.svg");
  }
}, 5000);

setInterval(() => {
  const checkClass = karuselSwap.getAttribute("class");
  if (checkClass === "kar-1") {
    karuselSwap.setAttribute("class", "kar-2");
  } else {
    karuselSwap.setAttribute("class", "kar-1");
  }
}, 5000);

setInterval(() => {
  const checkClass = karuselSwaptwo.getAttribute("class");
  if (checkClass === "kar-1") {
    karuselSwaptwo.setAttribute("class", "kar-2");
  } else {
    karuselSwaptwo.setAttribute("class", "kar-1");
  }
}, 5000);

setInterval(() => {
  if (titleSwap.innerText === "Высокие цены на лом! Принимаем всё!") {
    titleSwap.innerText = "Сдавай металлолом — зарабатывай сегодня!";
  } else {
    titleSwap.innerText = "Высокие цены на лом! Принимаем всё!";
  }
}, 5000);

setInterval(() => {
  if (
    descripSwap.innerText ==
    "Покупаем чёрный и цветной лом по выгодной цене. Быстрый расчёт, самовывоз по городу."
  ) {
    descripSwap.innerText =
      "Медь, алюминий, латунь, сталь — сдай отходы металла и получи деньги сразу.";
  } else {
    descripSwap.innerText =
      "Покупаем чёрный и цветной лом по выгодной цене. Быстрый расчёт, самовывоз по городу.";
  }
}, 5000);

buttonClick.addEventListener("click", function () {
  window.location.href = "/SalePage/sale.html";
});
