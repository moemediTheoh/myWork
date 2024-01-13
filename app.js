const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobile_menu = document.querySelector('header .nav-bar .nav-list ul')
const header = document.querySelector('.header.cont')

hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('actiive');
        mobile_menu.classList.toggle('active')
});


document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    const header = document.querySelector('.header');

    if (scroll_position > 50) { // Adjust the scroll threshold as needed
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});