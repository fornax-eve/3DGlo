const validation = function () {
    const calcBlock = document.querySelector('.calc-block');
    const calcInputs = calcBlock.querySelectorAll('input');
    const select = calcBlock.querySelector('.calc-type');

    const typeText = document.querySelectorAll('[name = "user_name"]')
    const btns = document.querySelectorAll('[type="submit"]')
    const yourMsg = document.querySelector('[placeholder="Ваше сообщение"]')
    console.log(yourMsg)

    calcInputs.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    })
    select.addEventListener('change', () => {

        if (select.selectedIndex == 0) {
            calcInputs.forEach((elem) => {
                elem.value = ""
            })
        }


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

    btns.forEach(elem => {
        let isTr = false;
        const text = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_name"]');
        const email = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_email"]');
        const phone = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_phone"]');
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            if (!/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/.test(email.value)) {
                // email.value = ''
                email.style.backgroundColor = 'pink';
            } else {
                email.style.backgroundColor = 'white';
            }
            if (/[^\d()-]/g.test(phone.value)) {
                // phone.value = ''
                phone.style.backgroundColor = 'pink';
            } else {
                phone.style.backgroundColor = 'white';
            }
            if ((text.value == '') || (email.value == '') || (phone.value =='')) {
                isTr = false;
            } else {
                isTr = true;
            }
        })

    })

    typeText.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яА-Я\-\s]/, "")
        })
    })

    yourMsg.addEventListener('input', () => {
        yourMsg.value = yourMsg.value.replace(/[^а-яА-Я\-\s]/, "")
    })
}

export default validation;
