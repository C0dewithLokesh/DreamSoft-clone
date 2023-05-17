const nav = document.querySelector('.main-header');
const section_a = document.querySelector('.section-a');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const searchIcon = document.querySelector('.search i');
const navItems = document.querySelectorAll('.open-search');
const showSearch = document.getElementById('show-search');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;


const breakpoint = 768;
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.innerWidth >= breakpoint && window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('nav-short');
        // section_a.classList.add('nav-short');
    } else {
        nav.classList.remove('nav-short');
        // section_a.classList.remove('nav-short');
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
const tab_img = document.getElementById('tab-img');
animateWhenVisible(tab_img, 'animate__fadeInUp');

const cards = document.querySelector('.service-cards');
animateWhenVisible(cards, 'animate__fadeInLeft');

const project_content = document.querySelector('.project-content');
animateWhenVisible(project_content, 'animate__fadeInLeft');

const filter_projects = document.querySelector('.filter-projects');
animateWhenVisible(filter_projects, 'animate__fadeInRight');

const projects_list = document.querySelector('.projects-list');
animateWhenVisible(projects_list, 'animate__fadeInRight');

const section_e = document.querySelector('.section-e');
animateWhenVisible(section_e, 'animate__fadeInRight');

const section_f = document.querySelector('.section-f');
animateWhenVisible(section_f, 'animate__fadeInLeft');

const info = document.querySelector('.g-container .info');
animateWhenVisible(info, 'animate__fadeInUp');

const mobile_img = document.querySelector('.g-container .mobile-img');
animateWhenVisible(mobile_img, 'animate__fadeInLeft');

const quote_container = document.querySelector('.quote-container');
animateWhenVisible(quote_container, 'animate__fadeInLeft');

const blog_posts = document.querySelector('.blog-posts');
animateWhenVisible(blog_posts, 'animate__fadeInRight');

const content_left = document.querySelector('.content-left');
animateWhenVisible(content_left, 'animate__fadeInLeft');

const content_mid = document.querySelector('.content-mid');
animateWhenVisible(content_mid, 'animate__fadeInLeft');

const content_right = document.querySelector('.content-right');
animateWhenVisible(content_right, 'animate__fadeInLeft');

const footer_bottom = document.querySelector('.footer-bottom');
animateWhenVisible(footer_bottom, 'animate__fadeInUp');

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

// Share button
const shareBtn = document.getElementById('shareBtn');
const shareIcon = document.getElementById('share-icons');

shareBtn.addEventListener('click', () => shareIcon.classList.toggle('show'));

// filter projects

const filterLinks = document.querySelectorAll('.filter-projects a');
const items = document.querySelectorAll('.projects-list li');

filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = link.dataset.filter;

        // remove active class from all links
        filterLinks.forEach(link => {
            link.classList.remove('active');
        });

        // add active class to clicked link
        link.classList.add('active');

        // show/hide items based on filter
        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


// section -G

// Get all the tab links and tab panes
const tabLinks = document.querySelectorAll('.nav-tabs a');
const tabPanes = document.querySelectorAll('.tab-pane');

// Loop through the tab links and add an event listener to each one
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the link from navigating to a new page

        // Remove the 'active' class from all the tab links and tab panes
        tabLinks.forEach(link => link.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add the 'active' class to the clicked tab link and corresponding tab pane
        const tabId = link.getAttribute('href');
        const tabPane = document.querySelector(tabId);
        link.classList.add('active');
        tabPane.classList.add('active');
    });
});