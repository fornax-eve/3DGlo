const calc = function () {
    const calcBlock = document.querySelector('.calc-block');
    const calcInputs = calcBlock.querySelectorAll('input');
    const select = calcBlock.querySelector('.calc-type');

    calcInputs.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    })
    select.addEventListener('change', () => {
        calcInputs.forEach((elem) => {
            elem.value = ""
        })
        if (select.selectedIndex == 0) {
            calcInputs.forEach((elem) => {
                elem.setAttribute('disabled','disabled')
            })
        } else {
            calcInputs.forEach((elem) => {
                elem.removeAttribute('disabled')
            })
        }
    })

}

export default calc;
