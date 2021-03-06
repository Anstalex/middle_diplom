import handler from "./handler";
import { jsonCalc } from './calc';
import { modal } from './modal';

export const isValidTest = (inputs, callback) => {
    if ([...inputs].every(item => item.value !== '')) {
        callback();
    }
};

const forms = () => {
    const box = document.querySelectorAll('input[type=text]');
    const allInput = document.querySelectorAll('input');
    const btnSubmit = document.querySelectorAll('.btn-submit');
    const overlay = document.querySelector('.overlay');
    let formInputs;



    const sendForm = form => {
        const errorMessage = 'Что-то пошло не так';
        const loadMessage = `Загрузка...`;
        const successMessage = 'Спасибо!Мы скоро с вами свяжемся!';


        const statusMessages = document.getElementById('modal-message');
        statusMessages.style.cssText = `font-size: 2rem; min-height: 30px; margin: 30px 0; color:#000000;`;
        const postData = async body => await fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...body,
                ...jsonCalc
            })
        });
        const renderData = form => {
            formInputs = form.querySelectorAll('input.form-control');
            statusMessages.textContent = loadMessage;
            const formData = new FormData(form);

            const body = {};
            let test;
            for (const val of formData.entries()) {
                body[val[0]] = val[1];
            }
            test = postData(body);
            modal && modal.classList.add('hide');
            overlay.classList.add('overlay-close');
            test
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Status network not correct');
                    }
                    statusMessages.textContent = successMessage;
                    allInput.forEach(item => {
                        item.value = '';
                        item.classList.remove('invalid');
                        item.classList.remove('valid');
                    });
                }).catch(error => {
                    statusMessages.textContent = errorMessage;
                    console.error(error);
                });
        };
        renderData(form);


    };

    allInput.forEach(item => {
        item.setAttribute('data-placeholder', item.placeholder);
    });

    box.forEach(item => {
        handler(item, 'input', function() {
            if (this.name === 'phone') {
                this.value = this.value.replace(/[^-+()\d]/g, '');
            } else {
                this.value = this.value.replace(/[^\sа-яёa-z]+/gi, '');
            }
            if (this.value) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.add('invalid');
                this.classList.remove('valid');
            }
        });
        handler(item, 'blur', function() {
            if (this.name === 'phone') {
                if (this.value.length !== 18) {
                    this.placeholder = 'Не менее 9 цифр';
                    this.value = '';
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                    setTimeout(() => {
                        this.placeholder = this.dataset.placeholder;
                    }, 1000);

                }
            }
        });
    });

    btnSubmit.forEach((item, index) => {
        const isValidFormContainer = item.parentNode.parentNode.parentNode;
        const form = isValidFormContainer.parentNode.tagName === 'FORM' ? isValidFormContainer.parentNode : isValidFormContainer;
        form.setAttribute('data-index', index);
        item.setAttribute('data-index', index);
        handler(item, 'click', function(e) {
            e.preventDefault();

            if (form.dataset.index === this.dataset.index) {

                let inputs = form.querySelectorAll('input.form-control');

                if (inputs.length <= 1) {
                    inputs = form.parentNode.querySelectorAll('input');
                }

                for (let i = 0; i < inputs.length; i++) {
                    if (!inputs[i].value) {
                        inputs[i].placeholder = 'Заполните поле';
                        inputs[i].classList.add('invalid');
                        if (inputs[i].name === 'phone') {
                            if (inputs[i].value.length !== 18) {
                                inputs[i].value = '';
                                inputs[i].classList.add('invalid');
                                inputs[i].classList.remove('valid');
                            }
                        }
                    } else {
                        inputs[i].classList.remove('invalid');
                        inputs[i].classList.add('valid');
                    }
                }

                setTimeout(() => {
                    for (let i = 0; i < inputs.length; i++) {
                        inputs[i].placeholder = inputs[i].dataset.placeholder;
                        inputs[i].classList.remove('invalid');
                        inputs[i].classList.remove('valid');
                    }
                }, 1000);

                isValidTest(inputs, () => {
                    sendForm(form);
                });


            }

        }
        );
    });


};
export default forms;
