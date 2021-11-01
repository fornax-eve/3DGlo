const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupClose = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content')
    const colors = ['black', 'brown', 'darkslategray', 'maroon', 'indigo', 'midnightblue', 'purple', 'navy', 'darkgreen', 'goldenrod'];
    let animFrame, animFrame1, animFrame2;

    const animate = () => {
        let degree1 = 0;
        let count = 0;
        popupClose.style.display = 'none'
        popupContent.style.borderRadius = '90px'
        animFrame = requestAnimationFrame(function animatos() {
            count++;
            if (count % 3 == 0) {
                let random = Math.floor(Math.random() * 10);
                popupContent.style.backgroundColor = colors[random]
                popupClose.style.backgroundColor = colors[random]
            }
            degree1 = degree1 + 20;
            if (degree1 <= 720) {
                popupContent.style.transform = `rotate(${degree1}deg)`
                requestAnimationFrame(animatos)
            } else {
                popupContent.style.borderRadius = '0px'
                popupClose.style.display = 'block'
            }
        })
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.documentElement.clientWidth >= 768) {
                animate()
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
