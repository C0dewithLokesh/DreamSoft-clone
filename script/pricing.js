const nav = document.querySelector('.main-header');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const searchIcon = document.querySelector('.search i');
const navItems = document.querySelectorAll('.open-search');
const showSearch = document.getElementById('show-search');


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


// scroll position

document.addEventListener('scroll', scrollPage);

function scrollPage() {
    const scrollPos = window.scrollY;

    // console.log(scrollPos);
    if (scrollPos > 2519 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 2519 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // Get count target
            const target = +counter.getAttribute('data-target');
            // Get current counter value
            const c = +counter.innerText;

            // Create an increment
            const increment = target / 100;

            // If counter is less than target, add increment
            if (c < target) {
                // Round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}

// open search

searchIcon.addEventListener('click', openSearch);

function openSearch() {
    if (navItems[0].style.display === 'none') {
        navItems.forEach(item => item.style.display = 'block');
        showSearch.style.display = 'none';

        searchIcon.classList.remove('fas', 'fa-times-circle');
        searchIcon.classList.add('fa-light', 'fa-search');
    } else {
        navItems.forEach(item => item.style.display = 'none');
        showSearch.style.display = 'block';

        searchIcon.classList.remove('fa-light', 'fa-search');
        searchIcon.classList.add('fas', 'fa-times-circle');

    }
}