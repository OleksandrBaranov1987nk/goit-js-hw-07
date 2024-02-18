function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(inputRef.value);

  if (amount < 1 || amount > 100 || !Number.isInteger(amount)) {
    return alert('Please enter a number between 1 and 100');
  }

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesRef.append(...boxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

