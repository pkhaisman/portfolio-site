let hamburgerIcon = document.querySelector('.nav__hamburger-icon');
let navItems = document.querySelector('.nav__list');

hamburgerIcon.addEventListener('click', () => {
    navItems.classList.toggle('display-nav-links');
})

function addScroll(node, scrollTo) {
    node.addEventListener('click', () => {
        window.scroll({
            top: scrollTo,
            behavior: 'smooth'
        });
    })
}

let aboutLink = document.querySelector('.about');
let projectsLink = document.querySelector('.project');
let contactLink = document.querySelector('.contact');
addScroll(aboutLink, 700);
addScroll(projectsLink, 1395.5);
addScroll(contactLink, 2400);




