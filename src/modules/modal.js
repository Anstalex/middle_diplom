import handler from "./handler";

const toggleModal = () => {
    const popup = document.querySelector('.header-modal--opened');
    const overlay = document.querySelector('.overlay');
    handler(document, 'click', (e) => {
        const target = e.target;
        if (target.closest('.btn-warning')){
            overlay.classList.remove('overlay-close');
            popup.classList.remove('header-modal');
        }else if(!target.closest('.header-modal--opened')||(target.matches('.header-modal__close'))){
            overlay.classList.add('overlay-close');
            popup.classList.add('header-modal');
        }

    })
};
export default toggleModal;
