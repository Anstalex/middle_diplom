import handler from "./handler";

const scroll = () => {
    const btnScroll = document.querySelector('.smooth-scroll');
    const initialSection = document.getElementById('offer');
    const secondSection = document.getElementById('benefits');
    handler(document, 'scroll', () => {
        const topSection = secondSection.getBoundingClientRect().top;
        if (topSection < 0) {
            btnScroll.classList.remove('hide');
        }else{
            btnScroll.classList.add('hide');
        }
    })

    handler(btnScroll, 'click', () => {
        initialSection.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });
};

export default scroll;
