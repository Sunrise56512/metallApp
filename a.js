const exit = document.querySelector("#exit-for-login");

exit.addEventListener("click", function () {
  window.location.href = "login.html";
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
});

window.location.href =
  "http://127.0.0.1:5500/homePage/home%20page%20mobile.html#targetDiv";
