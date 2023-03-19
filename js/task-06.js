const input = document.querySelector('#validation-input');
const minLength = Number(input.dataset.length);

input.addEventListener('blur', () => {
  if (input.value.length >= minLength) {
    input.className = 'valid';
    return;
  }
  input.className = 'invalid';
});
