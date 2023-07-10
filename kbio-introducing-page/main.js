const toggleBtn = document.querySelector('.navBar_toggleBtn');
const menu = document.querySelector('.navBar_menu');

toggleBtn.addEventListener(`click`, () => {
    menu.classList.toggle(`active`)
})