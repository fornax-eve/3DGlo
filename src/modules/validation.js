const validation = function () {
    const typeText = document.querySelectorAll('[name = "user_name"]')
    const btns = document.querySelectorAll('[type="submit"]')

    btns.forEach(elem => {
        let isTr = false;
        const text = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_name"]');
        const email = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_email"]');
        const phone = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_phone"]');
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            if (!/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/.test(email.value)) {
                email.value = ''
            }
            if (/[^\d()-]/g.test(phone.value)) {
                phone.value = ''
            }
            if ((text.value == '') || (email.value == '') || (phone.value =='')) {
                isTr = false;
            } else {
                isTr = true;
            }
            if (isTr) {
                alert('Некорректное заполнение')
            } else {
                alert('السلام عليكم‎ ')
            }
        })

    })


    typeText.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яА-Я\-\s]/, "")
        })
    })
}

export default validation;
