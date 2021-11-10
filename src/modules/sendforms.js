const sendForm = function ({formId, someElem = []}) {
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
            //     success = false;
            // }/^[a-zA-Z_ ]*$/
            if (inp.classList.contains("form-name")) {
                if (/[а-яА-Я\s]+[^\-]+/g.test(inp.value)) {
                    console.log(inp.value)
                    console.log('true')
                } else {
                    console.log('false')
                }
            }
            if (inp.classList.contains("form-email")) {

            }
            if (inp.classList.contains("form-phone")) {

            }
        })
        // const string  = 'Это мой test-test.test@google.com';
// const testEmail = /[\-\.\w]+@(\w+\.)+\w+/gi;
// console.log(string.match(/[\-\.\w]+@(\w+\.)+\w+/gi))
// console.log(testEmail.test(string))

        return success;
    }

    const submitForm = () => {
        const formData = new FormData(form)
        const formElements = form.querySelectorAll('input')

        statusBlock.textContent = loadText;
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val;
            // console.log(formBody[key])
        })
        console.log(formBody)
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            // console.log(element)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElements.forEach(inp => {
                        inp.value = '';
                    })
                    console.log(data)
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
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
