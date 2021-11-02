const slider = function (ul_img, li_img, ul_dts, li_dt, arrow, li_img_a = 'portfolio-item-active', li_dt_a = 'dot-active') {

    const sliderBlock = document.querySelector(`.${ul_img}`);
    const slides = document.querySelectorAll(`.${li_img}`);
    // const dots = document.querySelectorAll('.dot');
    const dotsPack = document.querySelector(`.${ul_dts}`);
    const imgActive = document.querySelector(`.${li_img_a}`)
    const arrows = document.querySelector(`.${arrow}`)

    const timeInterval = 2000;
    let currentSlide = 0;
    const dots = [];
    let interval;

    if (!(sliderBlock && slides && dotsPack && imgActive && arrows)) {
        return
    }

    const addDot = () => {
        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement('li');
            dot.classList.add(li_dt);
            dots.push(dot)
            dotsPack.append(dot);
        }
        nextSlide(slides, currentSlide, li_img_a);
        nextSlide(dots, currentSlide, li_dt_a);
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, li_img_a);
        prevSlide(dots, currentSlide, li_dt_a);

        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, li_img_a);
        nextSlide(dots, currentSlide, li_dt_a);
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener('click', (e) => {
        if (!e.target.matches(`.${li_dt}, .${arrow}`)) { //'.dot, .portfolio-btn'
            return;
        }
        e.preventDefault();
        prevSlide(slides, currentSlide, li_img_a);
        prevSlide(dots, currentSlide, li_dt_a);
        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains(li_dt)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
                ;
            })
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, li_img_a);
        nextSlide(dots, currentSlide, li_dt_a);
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`.${li_dt}, .${arrow}`)) {//'.dot, .portfolio-btn'
            console.log(e.target)
            stopSlide()
        }

    }, {capture: true})

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches(`.${li_dt}, .${arrow}`)) {//'.dot, .portfolio-btn'
            startSlide(timeInterval)
        }
    }, {capture: true})

    addDot();
    startSlide(timeInterval);

}

export default slider;
