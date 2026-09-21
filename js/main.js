const burgerBtn = document.getElementById('burgerBtn');
const navbar = document.querySelector('.navbar');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});