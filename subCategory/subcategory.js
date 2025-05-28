const textArea = document.querySelector("#autotext");

function resizeTextArea(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

textArea.addEventListener("input", () => resizeTextArea(textArea));

window.addEventListener("load", () => resizeTextArea(textArea));

const imageBlock = document.getElementById("imageBlock");
const fileInput = document.getElementById("fileInput");
const previewContainer = document.getElementById("previewContainer");
const previewImage = document.getElementById("previewImage");
const placeholderImage = document.getElementById("placeholderImage");
const removeBtn = document.getElementById("removeBtn");
const addImageButton = document.getElementById("add-img");
const imageAddBlock = document.querySelector(".image-add");

// Клик на первую "картинку"
imageBlock.addEventListener("click", () => {
  fileInput.click();
});

// Клик на кнопку "добавить"
addImageButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageData = e.target.result;

      // Если первая картинка еще не выбрана
      if (previewContainer.style.display === "none") {
        placeholderImage.style.display = "none";
        previewImage.src = imageData;
        previewContainer.style.display = "flex";
        addImageButton.style.display = "flex";
        imageBlock.style.display = "none";
      } else {
        // Добавляем дополнительное изображение
        const newPreview = document.createElement("div");
        newPreview.classList.add("icon-1");

        newPreview.innerHTML = `
          <img src="/img/икс.svg" class="exit" />
          <img src="${imageData}" id="previewImage"/>
        `;

        const exitButton = newPreview.querySelector(".exit");
        exitButton.addEventListener("click", () => {
          newPreview.remove();
        });

        imageAddBlock.insertBefore(newPreview, addImageButton);
      }

      fileInput.value = "";
    };

    reader.readAsDataURL(file);
  }
});

removeBtn.addEventListener("click", () => {
  previewContainer.style.display = "none";
  previewImage.src = "";
  placeholderImage.style.display = "block";
  fileInput.value = "";

  // Получаем все доп. изображения
  const allPreviews = document.querySelectorAll(".image-add .icon-1");
  const customPreviews = Array.from(allPreviews).filter(
    (el) => el !== previewContainer
  );

  if (customPreviews.length === 0) {
    imageBlock.style.display = "flex";
    addImageButton.style.display = "none";
  }
});

const inputArea = document.querySelector("#autotext");
const selectionOne = document.getElementById("select-1");
const selectionTwo = document.getElementById("select-2");
const selectionThree = document.getElementById("select-3");
const selectionFour = document.getElementById("select-4");

inputArea.addEventListener("change", () => {
  localStorage.setItem("textArea", inputArea.value);
});

selectionOne.addEventListener("change", () => {
  localStorage.setItem("Примерный вес лома", selectionOne.value);
});

selectionTwo.addEventListener("change", () => {
  localStorage.setItem("Как часто образуется лом", selectionTwo.value);
});

selectionThree.addEventListener("change", () => {
  localStorage.setItem(
    "Требуется ли демонтаж или резка негабаритного лома?",
    selectionThree.value
  );
});

selectionFour.addEventListener("change", () => {
  localStorage.setItem(
    "Требуется ли спуск или вынос с помещения?",
    selectionFour.value
  );
});

const savedArea = localStorage.getItem("textArea");
if (savedArea) {
  inputArea.value = savedArea;
}

const savedSelectOne = localStorage.getItem("Примерный вес лома");
if (savedSelectOne) {
  selectionOne.value = savedSelectOne;
}

const savedSelectTwo = localStorage.getItem("Как часто образуется лом");
if (savedSelectTwo) {
  selectionTwo.value = savedSelectTwo;
}

const savedSelectThree = localStorage.getItem(
  "Требуется ли демонтаж или резка негабаритного лома?"
);
if (savedSelectThree) {
  selectionThree.value = savedSelectThree;
}

const savedSelectFour = localStorage.getItem(
  "Требуется ли спуск или вынос с помещения?"
);
if (savedSelectFour) {
  selectionFour.value = savedSelectFour;
}

document.addEventListener("DOMContentLoaded", function () {
  // Кнопка, которую нужно активировать
  const button = document.querySelector(".btn-none");

  // Список ключей в localStorage, которые нужно проверить
  const requiredKeys = [
    "textArea",
    "Как часто образуется лом",
    "Примерный вес лома",
    "Требуется ли демонтаж или резка негабаритного лома?",
    "Требуется ли спуск или вынос с помещения?",
  ];

  // Функция проверки localStorage
  function checkLocalStorage() {
    // Проверяем, существуют ли все ключи и они не пустые
    const allDataPresent = requiredKeys.every((key) => {
      const value = localStorage.getItem(key);
      return value !== null && value.trim() !== "";
    });

    // Активируем или деактивируем кнопку
    button.disabled = !allDataPresent;

    // Опционально: добавляем визуальную индикацию
    if (allDataPresent) {
      button.classList.remove("btn-none");
      button.classList.add("btn");
    } else {
      button.classList.remove("btn");
      button.classList.add("btn-none");
    }
  }

  // Проверяем при загрузке страницы
  checkLocalStorage();

  // Отслеживаем изменения в localStorage
  window.addEventListener("storage", checkLocalStorage);

  // Опционально: проверяем при взаимодействии с формой
  document.addEventListener("input", checkLocalStorage);

  button.addEventListener("click", () => {
    window.location.href = "/homePage/Home page mobile.html";
  });
});
