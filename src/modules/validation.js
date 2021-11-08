const validation = function () {
    const calcBlock = document.querySelector('.calc-block');
    const calcInputs = calcBlock.querySelectorAll('input');
    const select = calcBlock.querySelector('.calc-type');

    const typeText = document.querySelectorAll('[name = "user_name"]')
    const typePhone = document.querySelectorAll('[name="user_phone"]')
    const btns = document.querySelectorAll('[type="submit"]')
    const yourMsg = document.querySelector('[placeholder="Ваше сообщение"]')



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
                elem.setAttribute('disabled', 'disabled')
            })
        } else {
            calcInputs.forEach((elem) => {
                elem.removeAttribute('disabled')
            })
        }
    })

    const validationForDoubles = function (string) {
        let new_str = string.replace(/\-{2,}/g, '-');
        let str = new_str.replace(/\s{2,}/g, ' ');
        while ((str[0] == ' ') || (str[0] == '-') || (str[str.length - 1] == ' ') || (str[str.length - 1] == '-')) {
            str = str.replace(/^-+|-+$/g, '');
            str = str.replace(/^ +| +$/g, '');
        }
        return str;
    }

    const upperCase_lowerCase = function (string) {
        let array = [];
        string.split(' ').forEach(el => {
            if (!/^-/g.test(el)) {
                if (string.length != '') {
                    let str = el[0].toUpperCase() + el.substr(1).toLowerCase();
                    array.push(str)
                } else {
                    return
                }

            } else {
                array.push(el)
            }
        })
        return array;
    }

    const nameValidation = function (string) {
        if (string.length < 2) {
            return false;
        }
        let yourTextInput = validationForDoubles(string);
        string = upperCase_lowerCase(yourTextInput).join(' ');
        return string;
    }

    const emailValidation = function (string) {
        if (string.length < 10) {
            return false;
        }
        if (!/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/.test(string)) {
            return false;
        } else {
            string = string.replace(/^\-+/g, '');
        }
        return string;
    }

    const phoneValidation = function (string) {
        let new_str = string.replace(/\-{2,}/g, '-');
        let new_str1 = new_str.replace(/^-+|-+$/g, '');
        let new_str2 = new_str1.replace(/\({2,}/g, '(');
        let new_str3 = new_str2.replace(/\){2,}/g, ')');
        string = new_str3;
        if ((string.length > 5) && (string.length < 15)) {
            return string;
        } else {
            return false;
        }

    }

    // const createElLabel =

    btns.forEach(elem => {
        let isTr = false;
        const text = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_name"]');
        const email = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_email"]');
        const phone = elem.parentElement.parentElement.parentElement.querySelector('[name = "user_phone"]');

        elem.style.position = 'relative';
        const label = document.createElement('label');
        label.style.position = 'absolute';
        // label.style.display = 'inline-block';
        elem.append(label);
        label.textContent = 'Нужно правильно заполнить все поля';
        label.style.top = '-15px';
        label.style.left = '5px';
        label.style.color = 'red';
        label.style.fontSize = '12px';
        label.style.display = 'none';

        // const nameValidation = function (string) {
        //     if (string.length < 2) {
        //         return false;
        //     }
        //     let yourTextInput = validationForDoubles(string);
        //     console.log(yourTextInput)
        //     string = upperCase_lowerCase(yourTextInput).join(' ');
        //     console.log(string)
        //     return string;
        // }

        const validation = function (e) {

            e.preventDefault();

            if (!nameValidation(text.value)) {
                text.style.backgroundColor = 'pink';
            } else {
                text.value = nameValidation(text.value);
                text.style.backgroundColor = 'white';
                console.log('fdjgfjdds')
            }

            if (!emailValidation(email.value)) {
                email.style.backgroundColor = 'pink';
            } else {
                email.value = emailValidation(email.value);
                email.style.backgroundColor = 'white';
            }

            if (!phoneValidation(phone.value)) {
                phone.style.backgroundColor = 'pink';
            } else {
                phone.value = phoneValidation(phone.value);
                phone.style.backgroundColor = 'white';
            }

            if ((!nameValidation(text.value)) || (!emailValidation(email.value)) || (!phoneValidation(phone.value))) {
                isTr = false;
                label.style.display = 'block'
            } else {
                isTr = true;
                label.style.display = 'none'
            }

            if (!elem.closest('.footer-form')) {
                return;
            }
            yourMsg.value = validationForDoubles(yourMsg.value);
        }

        elem.addEventListener('click', validation, false);

        text.addEventListener('blur', function (e) {
            if (!nameValidation(text.value)) {
                text.style.backgroundColor = 'pink';
            } else {
                text.value = nameValidation(text.value);
                text.style.backgroundColor = 'white';
                console.log('fdjgfjdds')
            }
        });

        email.addEventListener('blur', function (e) {
            if (!emailValidation(email.value)) {
                email.style.backgroundColor = 'pink';
            } else {
                email.value = emailValidation(email.value);
                email.style.backgroundColor = 'white';
            }
        });

        phone.addEventListener('blur', function (e) {
            if (!phoneValidation(phone.value)) {
                phone.style.backgroundColor = 'pink';
            } else {
                phone.value = phoneValidation(phone.value);
                phone.style.backgroundColor = 'white';
            }
        });

        if (elem.closest('.footer-form')) {
            yourMsg.addEventListener('blur', validation)
        }
    })

    typeText.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яА-Я\-\s]/, "")
        })
    })

    typePhone.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^\d\(\)\-]/, "")
        })
    })

    yourMsg.addEventListener('input', () => {
        yourMsg.value = yourMsg.value.replace(/[^а-яА-Я\-\s]/, "")
    })
}

export default validation;
