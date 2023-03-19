const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.password.value === '' ||
    event.currentTarget.elements.email.value === ''
  ) {
    alert('Заповніть усі поля введення');
    return;
  }

  const userData = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  event.currentTarget.reset();
}
