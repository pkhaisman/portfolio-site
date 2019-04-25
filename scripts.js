let hamburgerIcon = document.querySelector('.nav__hamburger-icon');
let navItems = document.querySelector('.nav__list');

hamburgerIcon.addEventListener('click', () => {
    console.log('click');
    navItems.classList.toggle('display-nav-links');
})