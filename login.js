const input = document.querySelector("#log-in");
const buttonSubmit = document.querySelector(".btn");
const password = document.querySelector("#password");
const toggle = document.querySelector(".img-eye");
const toggleOff = document.querySelector(".img-eye-none");

input.addEventListener("input", function () {
  const nameValue = input.value.trim();

  if (nameValue.trim() === "admin") {
    buttonSubmit.disabled = false;
  } else if (nameValue.trim() === "Admin") {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});

password.addEventListener("password", function () {
  const passwordValue = password.value;

  if (passwordValue === "admin123") {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !buttonSubmit.disabled) {
    buttonSubmit.click();
  }
});

buttonSubmit.addEventListener("click", function () {
  window.location.href =
    "http://127.0.0.1:5500/homePage/home%20page%20mobile.html#targetDiv";
  localStorage.setItem("user", "admin");
});

toggle.addEventListener("click", function () {
  password.type = "text";
  toggle.classList.add("none");
  toggleOff.classList.add("block");
  toggleOff.classList.remove("none");
  toggle.classList.remove("block");
});

toggleOff.addEventListener("click", function () {
  password.type = "password";
  toggle.classList.remove("none");
  toggleOff.classList.remove("block");
  toggleOff.classList.add("none");
  toggle.classList.add("block");
});
