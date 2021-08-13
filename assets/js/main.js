//SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//REMOVE MENU FOR MOBILE
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 50 ?
    header.classList.add('scroll-header') :
    header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//SHOW SCROLL Up ICON
function scrollUp() {
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 200 ?
    scrollup.classList.add('show-scroll') :
    scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? 
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link') :
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
    })
}
window.addEventListener('scroll', scrollActive);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.home_header, .section_title`, {delay: 600})
sr.reveal(`.home_footer`, {delay: 700, origin: 'right'})
sr.reveal(`.home_img`, {delay: 900, origin: 'top'})

sr.reveal(`.products_card, .footer_content, .footer_copy`, {origin: 'top', interval: 100})
sr.reveal(`.specs_data, .discount_animate, .footer_logo`, {origin: 'left', interval: 100})
sr.reveal(`.specs_img, .discount_img`, {origin: 'right'})
sr.reveal(`.case_img, .top`, {origin: 'top'})
sr.reveal(`.right`, {origin: 'right'})
sr.reveal(`.bottom`, {origin: 'bottom'})
sr.reveal(`.left`, {origin: 'left'})
sr.reveal(`.case_data`)