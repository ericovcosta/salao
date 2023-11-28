const menu = document.getElementById('menu');
const closeBtn = document.querySelector('.btn_menu');

closeBtn.addEventListener('click', (e)=>{
    // menu.style.display = 'None'
    const iconMenu = document.querySelector('.fa-bars');
    const iconClose = document.querySelector('.fa-xmark');
    menu.classList.toggle('hide');
    iconMenu.classList.toggle('hide');
    iconClose.classList.toggle('hide');
})
