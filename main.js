const exit = document.querySelector("#exit-for-login");

exit.addEventListener("click", function () {
  window.location.href = "login.html";
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
});