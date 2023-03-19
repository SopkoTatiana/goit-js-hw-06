const div = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

createBtn.addEventListener('click', onCreateBnt);
destroyBtn.addEventListener('click', onRemoveBtn);

function onCreateBnt() {
  console.log(Number(input.value));
  const newElements = [];

  for (let i = 0; i < Number(input.value); i += 1) {
    const box = document.createElement('div');
    let boxSize = 30 + i * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    newElements.push(box);
  }

  div.append(...newElements);
}

function onRemoveBtn() {
  div.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
