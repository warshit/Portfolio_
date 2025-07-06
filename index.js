const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const MenuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

MenuIcon.addEventListener('click', () => {
    MenuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const barsBox = document.querySelector('.bars-animation');

    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    barsBox.classList.remove('active'); // Remove instantly
    barsBox.classList.add('active');    // Add instantly
    MenuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            sections[idx].classList.add('active'); // No delay
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
        sections[0].classList.add('active'); // No delay
    }
});

// Resume Button Logic
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-details');

        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(details => details.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// Portfolio Slider
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlideContainer = document.querySelector('.portfolio-carousel .img-slide');
const totalSlides = document.querySelectorAll('.portfolio-carousel .img-item').length;

let index = 0;

// Function to update the image slide
const activePortfolio = () => {
    const portfolioDetails = document.querySelectorAll('.portfolio-details');

    imgSlideContainer.style.transform = `translateX(-${index * 100}%)`;
    portfolioDetails.forEach(details => details.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};

// Right Arrow Click Event
arrowRight.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    activePortfolio();
});

// Left Arrow Click Event
arrowLeft.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    activePortfolio();
});
