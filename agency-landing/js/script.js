const form  = document.querySelector('.form');
const formInput  = document.querySelector('.form__input');

formInput.addEventListener('focus', () => {
    form.classList.add('form--active')
})

formInput.addEventListener('blur', () => {
    form.classList.remove('form--active')
})