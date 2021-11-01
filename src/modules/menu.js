const menu = function() {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItem = menu.querySelectorAll('li > a');

    const handleMenu = () => {
        // if (!menu.style.transform) {
        //     menu.style.transform = 'translateX(0)'
        // } else {
        //     menu.style.transform = ''
        // }
        menu.classList.toggle('active-menu')
    }
    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        handleMenu();
    });
    menuItem.forEach(elem => elem.addEventListener('click', (e) => {
        // e.preventDefault();
        handleMenu();
    }))
}

export default menu;
