/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    //when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is greater than 50 viewport height, add the show-scroll class to scroll-top class
    if(this.scrollY >= 50) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();
    
    /*check if field has a value*/
    if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        /*show message*/
        errorMessage.textContent = 'Fill up all the input fields';
    }

    else {
        /*serviceID - templateID - #form - publickey*/
        emailjs.sendForm('service_qyx9ry8', 'template_66fw4oc', '#contact-form','4yfho-lhCWmIumYfv').then(() => {
            /*show message and add color, window + dot to open emoji*/
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent ☑️';

            /*remove message after 5s*/
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('Oops! Something went wrong...', error);
        }
    );

    /*clear input fields*/
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);