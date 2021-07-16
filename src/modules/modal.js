import handler from "./handler";

const toggleModal = () => {
    const popup = document.querySelector('.header-modal--opened');
    const servicePopup = document.querySelector('.services-modal--opened');
    const overlay = document.querySelector('.overlay');
    const modals = document.querySelector('.modal-all');
    const order = document.getElementById('order');
    const response = document.getElementById('responseMessage');
    const certificate = document.querySelectorAll('.modal-certificate');
    handler(document, 'click', e => {
        const target = e.target;
        if (target.closest('.btn-start')) {
            const inputsPopup = popup.querySelectorAll('input');
            inputsPopup.forEach(item => {
                item.value = '';
                item.classList.remove('invalid');
                item.classList.remove('valid');
            });
            overlay.classList.remove('overlay-close');
            popup.classList.remove('header-modal');
        } else if (target.closest('.btn-start-success')) {
            const inputsServicePopup = servicePopup.querySelectorAll('input');
            inputsServicePopup.forEach(item => {
                item.value = '';
                item.classList.remove('invalid');
                item.classList.remove('valid');
            });
            overlay.classList.remove('overlay-close');
            servicePopup.classList.remove('services-modal');
        } else if (target.closest('.btn-open-modal')) {
            const inputsOrderPopup = order.querySelectorAll('input');
            inputsOrderPopup.forEach(item => {
                item.value = '';
                item.classList.remove('invalid');
                item.classList.remove('valid');
            });
            overlay.classList.remove('overlay-close');
            order.classList.remove('hide');
        } else if ((!target.closest('.header-modal--opened')) &&
            (!target.closest('.services-modal--opened')) &&
            (!target.closest('#order')) &&
            (!target.closest('.modal-certificate__container')) &&
            (!target.closest('.document-overlay'))  ||
            (target.matches('.header-modal__close')) ||
            (target.matches('.modal_close')) ||
            (target.matches('.services-modal__close'))) {
            overlay.classList.add('overlay-close');
            popup.classList.add('header-modal');
            servicePopup.classList.add('services-modal');
            order.classList.add('hide');
            certificate.forEach(item => {
                item.classList.remove('active');
            });

        }
    });
};
export default toggleModal;
