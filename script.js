const nav = document.querySelector('.main-header');
const section_a = document.querySelector('.section-a');
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('mobile-menu')


const breakpoint = 768; 
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.innerWidth >= breakpoint && window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('nav-short');
        section_a.classList.add('nav-short');
    } else {
        nav.classList.remove('nav-short');
        section_a.classList.remove('nav-short');
    }
}

// Hamburger

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}