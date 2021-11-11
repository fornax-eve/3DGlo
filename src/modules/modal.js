import {animate} from "./helper";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupClose = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content');
    const colors = ['black', 'brown', 'darkslategray', 'maroon', 'indigo', 'midnightblue', 'purple', 'navy', 'darkgreen', 'goldenrod'];

    const animationWrapper = () => {
        let degree1 = 0;
        let count = 0;
        let istrue = true;
        popupClose.style.display = 'none'
        popupContent.style.borderRadius = '90px'
        animate({
            duration: 3000,
            timing(timeFraction) {
                return timeFraction
            },
            // timing: function back(x, timeFraction) {
            //     return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
            // }.bind(null, 1.5),
            draw(progress) {
                count++;
                popupClose.style.display = 'none'
                popupContent.style.borderRadius = '90px'
                if ((count % 3 == 0) && istrue) {
                    let random = Math.floor(Math.random() * 10);
                    popupContent.style.backgroundColor = colors[random]
                    popupClose.style.backgroundColor = colors[random]
                }
                degree1 = degree1 * progress * 2.5 + 250;
                if (degree1 <= 1440) {
                    popupClose.style.display = 'none'
                    popupContent.style.borderRadius = '90px'
                    popupContent.style.transform = `rotate(${degree1}deg)`
                } else if ((degree1 > 1440) && istrue) {
                    istrue = false;
                    popupClose.style.display = 'none'
                    popupContent.style.borderRadius = '90px'
                    degree1 = 1440;
                    popupContent.style.transform = `rotate(${degree1}deg)`
                } else {
                    popupContent.style.borderRadius = '0px'
                    popupClose.style.display = 'block'
                }
            }
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.documentElement.clientWidth >= 768) {
                animationWrapper()
            } else {
                popupContent.style.backgroundColor = 'rgb(36, 36, 31)'
                popupClose.style.backgroundColor = 'rgb(36, 36, 31)'
            }
            modal.style.display = 'block'
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal;
