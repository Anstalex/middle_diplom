import handler from "./handler";

const forms = () => {
    const box = document.querySelectorAll('input[type=text]');
    const btnSubmit = document.querySelectorAll('.btn-submit');
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
            } else if ((this.value.length < 5) || (!this.value)) {
                this.classList.add('invalid');
                this.classList.remove('valid');
            }
        });
        handler(item, 'blur', function() {
            if (this.name === 'phone') {
                if (this.value.length !== 17) {
                    this.value = '';
                    this.classList.add('invalid');
                    this.classList.remove('valid');
                }
            }
        });
    });
    btnSubmit.forEach((item, index) => {
        handler(item, 'click', e => {
            e.preventDefault();
            const form = item.parentNode.parentNode.parentNode;
            form.setAttribute('data-index', index);
            if (form.dataset.index === 'index') {
                const input = form.querySelectorAll('input');
                input.forEach(item => {
                    if (item.value) {
                        item.classList.add('valid');
                        item.classList.remove('invalid');
                    } else {
                        item.classList.remove('valid');
                        item.classList.add('invalid');
                    }
                });
            }

        }
        );
    });


};
export default forms;
