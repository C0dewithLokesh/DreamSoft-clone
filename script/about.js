const nav = document.querySelector('.main-header');
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('mobile-menu')


const breakpoint = 768;
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.innerWidth >= breakpoint && window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('nav-short');
    } else {
        nav.classList.remove('nav-short');
    }
}

// Hamburger

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}

// Animation
const animateWhenVisible = (element, animationClass) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', animationClass);
            }
        });
    });

    observer.observe(element);
}

// Animation Elements
const content_left = document.querySelector('.content-left');
animateWhenVisible(content_left, 'animate__fadeInLeft');

const content_mid = document.querySelector('.content-mid');
animateWhenVisible(content_mid, 'animate__fadeInLeft');

const content_right = document.querySelector('.content-right');
animateWhenVisible(content_right, 'animate__fadeInLeft');

const footer_bottom = document.querySelector('.footer-bottom');
animateWhenVisible(footer_bottom, 'animate__fadeInUp');