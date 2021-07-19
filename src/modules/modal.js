import handler from "./handler";
// import jsonCalc from "./calc";


const toggleModal = () => {
    const menu = document.querySelector('.navbar-nav');
    const btnStart = document.querySelector('.btn-start');
    const popup = document.querySelector('.header-modal--opened');
    const servicePopup = document.querySelector('.services-modal--opened');
    const overlay = document.querySelector('.overlay');
    const allBtn = document.querySelectorAll('.btn');
    const modals = document.querySelector('.modal-all');
    const order = document.getElementById('order');
    const response = document.getElementById('responseMessage');
    const certificate = document.querySelectorAll('.modal-certificate');
    let modal;
    const openPopup = element => {
        modal = document.getElementById(`${element.dataset.id}`);
        console.log(modal);
        modal.classList.remove('hide');
        overlay.classList.remove('overlay-close');
    };
    const closePopup = () => {
        modal.classList.add('hide');
        overlay.classList.add('overlay-close');
        const inputsPopup =  modal.querySelectorAll('input');
        inputsPopup.forEach(item => {
            item.value = '';
            item.classList.remove('invalid');
            item.classList.remove('valid');
        });
    };

    handler(document, 'click', e => {
        const target = e.target;
        if (target.closest('.btn-start')) {
            openPopup(target);
        } else if ((!target.closest(`#${modal.id}`)) ||
        (target.matches('.btn-close'))) {
            closePopup();
        }
    });
};
export default toggleModal;
