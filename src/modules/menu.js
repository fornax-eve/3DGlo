const toggleMenu = function () {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }
    // menuBtn.addEventListener('click', handleMenu);
    // menu.addEventListener('click', (e) => {
    //     if (e.target.matches('a') && e.target.closest('menu')) {
    //         handleMenu()
    //     }
    // })

    body.addEventListener('click', (e) => {
        if (e.target.matches('a') && e.target.closest('menu')) {
            if (e.target.classList.contains('close-btn')) {
                e.preventDefault()
            }
            handleMenu()
        } else if (e.target.closest('.menu')) {
            handleMenu()
        } else if (menu.classList.contains('active-menu') && (!e.target.closest('menu'))) {
            e.preventDefault();
            handleMenu()
        }
    })
}

export default toggleMenu;
