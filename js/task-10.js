function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає 
// кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів
// очищається.

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і 
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у 
// форматі HEX.Використовуй готову функцію getRandomHexColor 
// для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const inputRef = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divRef = document.querySelector("#boxes");

function createBoxes(amount) {
  let markup = "";
  let size = 30;
  for (let i = 1; i <= amount; i += 1){
   markup=markup.concat(`<div style="background-color:${getRandomHexColor()}; width:${size}px; height: ${size}px">aa</div>`);
   size = size + 10;
  }
 divRef.innerHTML=markup;
}

createBtn.addEventListener("click", onCreateButtonClick);

function onCreateButtonClick(event) {
const amount = inputRef.value;
  createBoxes(amount);
};

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  divRef.innerHTML = "";
}



