let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
    document.querySelector('.menu').classList.add('active');
    document.querySelector('body').style.background = "blur";
})

let exitBtn = document.querySelector('.exit-btn');
exitBtn.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
})


