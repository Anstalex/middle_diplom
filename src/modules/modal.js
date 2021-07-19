import handler from "./handler";
export let modal;
let inputs;


const toggleModal = () => {
    const overlay = document.querySelector('.overlay');

    const openPopup = () => {
        modal.classList.remove('hide');
        overlay.classList.remove('overlay-close');
    };
    const closePopup = () => {
        modal.classList.add('hide');
        overlay.classList.add('overlay-close');
    };
    const cleanPopup = () => {
        inputs = modal.querySelectorAll('input.form-control');
        inputs.forEach(item => {
            item.value = '';
            item.classList.remove('invalid');
            item.classList.remove('valid');
        });

    };


    handler(document, 'click', e => {
        const target = e.target;
        if (target.closest('.btn-start')) {
            if (!target.closest('.btn-submit')) {
                modal = document.getElementById(`${target.dataset.id}`);
                inputs = modal.querySelectorAll('input.form-control');
                openPopup(target);
            } else {
                console.log(modal, 1312321);
                inputs = modal?.querySelectorAll('input.form-control') ?? [];
                if (inputs.length && [...inputs].every(item => item.value !== '')) {
                    modal = document.getElementById(`${target.dataset.id}`);
                    openPopup(target);
                }
            }
        } else if ((target.matches(`.overlay`)) ||
            (target.matches('.btn-close'))) {
            cleanPopup();
            closePopup();
        }
    });
};
export default toggleModal;
