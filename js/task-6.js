const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount, boxesContainer) => {
  destroyBoxes(boxesContainer);
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

const destroyBoxes = (boxesContainer) => {
  boxesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded',  () => {
  const input = document.querySelector('#controls input[type="number"]');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click',  () => {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount, boxesContainer);
    }

    input.value = '';
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes(boxesContainer);
  });
});