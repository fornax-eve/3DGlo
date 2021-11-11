import {animate} from "./helper";

const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется!'

    const formBody = {}

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

    const validate = (list) => {
        let success = true;
        list.forEach(inp => {
            // if (!inp.classList.contains('success')) {
            if (inp.classList.contains("form-name")) {
                if (!/[а-яА-Я\s]+[^\-]+/g.test(inp.value)) {
                    success = false;
                }
            }
            if (inp.classList.contains("mess")) {
                if (inp.value != '') {
                    if (!/^[а-яА-Я\s\d\.\,\-]+$/.test(inp.value)) {
                        success = false;
                    }
                }
            }

            if (inp.classList.contains("form-phone")) {
                if (!/^[+]?\d+$/.test(inp.value)) {
                    success = false;
                }
            }
        })
        return success;
    }

    const submitForm = () => {
        const formData = new FormData(form)
        const formElements = form.querySelectorAll('input')

        statusBlock.textContent = loadText;
        form.append(statusBlock)

        formData.forEach((val, key) => {
            if (val != '') {
                formBody[key] = val;
            }
        })
        // someElem.forEach(elem => {
        //     const element = document.getElementById(elem.id)
        //
        //     if (elem.type === 'block') {
        //         formBody[elem.id] = element.textContent;
        //     } else if (elem.type === 'input') {
        //         formBody[elem.id] = element.value;
        //     }
        // })
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    const modal = document.querySelector('.popup');
                    statusBlock.style.color = 'green'
                    statusBlock.textContent = successText

                    if (formId == 'form3') {
                        animate({
                            timing(timeFraction) {
                                return timeFraction
                            },
                            duration: 3000,
                            draw(progress) {
                                modal.style.opacity = 1 - progress;
                            }
                        })
                    }

                    setTimeout(() => {
                        formElements.forEach(inp => {
                            inp.value = '';
                        })
                        statusBlock.style.color = 'white'
                        modal.style.display = 'none'
                        statusBlock.style.display = 'none'
                        modal.style.opacity = 1
                    }, 3500)
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            statusBlock.textContent = errorText + '  Неверный формат'
        }
    }
    try {
        if (!form) {
            throw new Error('Верните форму на место!!!')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm()

        })
    } catch (e) {
        console.log(e.message)
    }

}

export default sendForm
