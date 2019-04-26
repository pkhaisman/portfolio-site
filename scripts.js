let hamburgerIcon = document.querySelector('.nav__hamburger-icon');
let navItems = document.querySelector('.nav__list');

hamburgerIcon.addEventListener('click', () => {
    navItems.classList.toggle('display-nav-links');
})

// function addScroll(node, scrollTo) {
//     node.addEventListener('click', () => {
//         window.scroll({
//             top: scrollTo,
//             behavior: 'smooth'
//         });
//     })
// }

// let aboutLink = document.querySelector('.about');
// let aboutPosition = document.querySelector('.about-section').offsetTop;
// let projectsLink = document.querySelector('.project');
// let projectSection = document.querySelector('.project-section').offsetTop
// let contactLink = document.querySelector('.contact');
// addScroll(aboutLink, aboutPosition);
// addScroll(projectsLink, projectSection);
// addScroll(contactLink, 2400);




