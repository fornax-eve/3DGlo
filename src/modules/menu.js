import {animate} from "./helper";

const toggleMenu = function () {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');
    const serviceBlock = document.querySelector('[href="#service-block"]');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    body.addEventListener('click', (e) => {
        if (e.target.matches('a') && e.target.closest('menu')) {
            if (e.target.classList.contains('close-btn')) {
                e.preventDefault()
            } else {
                e.preventDefault();
                let targetElement = document.querySelector(e.target.hash);
                let elem = targetElement.getBoundingClientRect();
                let result = elem.top + window.pageYOffset;
                animate({
                    duration: 778,
                    timing(timeFraction) {
                        return Math.pow(timeFraction, 12)
                    },
                    draw(progress) {
                        document.documentElement.scrollTop = progress * result;
                    }
                });
            }
            handleMenu()
        } else if (e.target.closest('.menu')) {
            handleMenu()
        } else if (menu.classList.contains('active-menu') && (!e.target.closest('menu'))) {
            e.preventDefault();
            handleMenu()
        } else if (e.target.closest('[href="#service-block"]')) {
            const hash = e.target.closest('[href="#service-block"]').hash
            const serviceBl = document.querySelector(hash);
            let coords = serviceBl.getBoundingClientRect().top + window.pageYOffset;
            let scrollTop = document.documentElement.scrollTop;
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                   document.documentElement.scrollTop = scrollTop + (progress * coords);
                   if (document.documentElement.scrollTop > coords) {
                       document.documentElement.scrollTop = coords;
                   }
                }
            })
        }
    })
}

export default toggleMenu;
