import handler from "./handler";

const scroll = () => {
    const btnScroll = document.querySelector('.smooth-scroll');
    const initialSection = document.getElementById('offer');
    handler(window,'scroll',()=>{
        console.log(window.clientWidth)
    })

    handler(btnScroll, 'click', () => {
        initialSection.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });
};

export default scroll;
