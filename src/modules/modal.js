import handler from "./handler";

const toggleModal = () => {
    const popup = document.querySelector('.header-modal--opened');
    const servicePopup = document.querySelector('.services-modal--opened');
    const overlay = document.querySelector('.overlay');
    handler(document, 'click', (e) => {
        const target = e.target;
        if (target.closest('.btn-warning')){
            overlay.classList.remove('overlay-close');
            popup.classList.remove('header-modal');
        }else if(target.closest('.btn-success')){
            overlay.classList.remove('overlay-close');
            servicePopup.classList.remove('services-modal');
        }else if(!target.closest('.header-modal--opened')&&
            (!target.closest('.services-modal--opened'))||
            (target.matches('.header-modal__close'))||
            (target.matches('.services-modal__close'))){
            overlay.classList.add('overlay-close');
            popup.classList.add('header-modal');
            servicePopup.classList.add('services-modal');
        }

    })
};
export default toggleModal;
