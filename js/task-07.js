const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${range.value}px`;
range.addEventListener('input', () => {
  text.style.fontSize = `${range.value}px`;
});
