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

    const animate = function ({timing, draw, duration}) {

        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
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
        }
    })
}

export default toggleMenu;
