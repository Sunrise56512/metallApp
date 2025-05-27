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

// Обработка выбора файла
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader(); // 💥 добавлено!

    reader.onload = (e) => {
      if (previewContainer.style.display === "none") {
        placeholderImage.style.display = "none";
        previewImage.src = e.target.result;
        previewContainer.style.display = "flex";
        addImageButton.style.display = "flex";
        imageBlock.style.display = "none";
      } else {
        const newPreview = document.createElement("div");
        newPreview.classList.add("icon-1");

        newPreview.innerHTML = `
          <img src="/img/икс.svg" class="exit" />
          <img src="${e.target.result}" id="previewImage"/>
        `;

        const exitButton = newPreview.querySelector(".exit");
        exitButton.addEventListener("click", () => {
          newPreview.remove();
        });

        imageAddBlock.insertBefore(newPreview, addImageButton);
      }

      fileInput.value = "";
    };

    reader.readAsDataURL(file); // 💥 вызываем после создания reader
  }
});

removeBtn.addEventListener("click", () => {
  previewContainer.style.display = "none";
  previewImage.src = "";
  placeholderImage.style.display = "block";
  fileInput.value = "";

  // Получаем все доп. изображения, исключая первый previewContainer
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
