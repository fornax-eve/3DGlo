const validation = function () {
    const calcBlock = document.querySelector('.calc-block');
    const calcInputs = calcBlock.querySelectorAll('input');
    const select = calcBlock.querySelector('.calc-type');

    const emailText = document.querySelectorAll('[name = "user_email"]')
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

    const validationForDoubles = (string) => {
        let new_str = string.replace(/\-{2,}/g, '-');
        let str = new_str.replace(/\s{2,}/g, ' ');
        while ((str[0] == ' ') || (str[0] == '-') || (str[str.length - 1] == ' ') || (str[str.length - 1] == '-')) {
            str = str.replace(/^-+|-+$/g, '');
            str = str.replace(/^ +| +$/g, '');
        }
        return str;
    }

    const upperCase_lowerCase = (string) => {
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

    const nameValidation = (string) => {
        if (string.length < 2) {
            return false;
        }
        let yourTextInput = validationForDoubles(string);
        string = upperCase_lowerCase(yourTextInput).join(' ');
        return string;
    }

    const emailValidation = (string) => {
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

    const phoneValidation = (string) => {
        let new_str = string.replace(/\-{2,}/g, '-');
        let new_str1 = new_str.replace(/^-+|-+$/g, '');
        let new_str2 = new_str1.replace(/\({2,}/g, '(');
        let new_str3 = new_str2.replace(/\){2,}/g, ')');
        string = new_str3;
        if ((string.length > 4) && (string.length < 17)) {
            return string;
        } else {
            return false;
        }

    }

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

        const validation = (e) => {

            e.preventDefault();

            if (!nameValidation(text.value)) {
                text.style.backgroundColor = 'pink';
            } else {
                text.value = nameValidation(text.value);
                text.style.backgroundColor = 'white';
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

        elem.addEventListener('submit', validation);

        text.addEventListener('blur',  (e) => {
            if (!nameValidation(text.value)) {
                text.style.backgroundColor = 'pink';
            } else {
                text.value = nameValidation(text.value);
                text.style.backgroundColor = 'white';
            }
        });

        email.addEventListener('blur',  (e) => {
            if (!emailValidation(email.value)) {
                email.style.backgroundColor = 'pink';
            } else {
                email.value = emailValidation(email.value);
                email.style.backgroundColor = 'white';
            }
        });

        phone.addEventListener('blur', (e) => {
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

    emailText.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^a-zA-Z\-\@\_\.\!\~\*\']/, "") //@  -  _  . ! ~ * '
        })
    })

    typeText.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яА-Я\-\s]/, "")
        })
    })

    typePhone.forEach(elem => {
        elem.addEventListener('input', () => {
            if (elem.value.length > 16) {
                elem.value = elem.value.substr(0, 16);
            } else {
                elem.value = elem.value.replace(/[^\d\(\)\-\+]/, "")
            }
        })
    })

    yourMsg.addEventListener('input', () => {
        yourMsg.value = yourMsg.value.replace(/[^а-яА-Я\-\s\d\,\.\:]/, "")
    })
}

export default validation;
