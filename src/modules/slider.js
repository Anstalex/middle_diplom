import handler from "./handler";

const html = document.querySelector('html');
const sliders = document.querySelectorAll('.benefits__item')

const slider = () => {

    class SliderCarousel {
        constructor({
                        main,
                        wrap,
                        next,
                        slide,
                        prev,
                        infinity = false,
                        slidesToShow = 3,
                        slidesToShowMobile = 1,
                        position = 0
                    }) {
            this.main = document.querySelector(main);
            this.slide = document.querySelectorAll(slide);
            this.wrap = document.querySelector(wrap);
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.slidesToShowMobile = slidesToShowMobile;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow),
                widthSlideMobile: Math.floor(100 / this.slidesToShowMobile)
            };
        }

        init() {
            // this.addItemClass();
            this.controlSlider();
            this.loadMobileSlider();

        }

        loadMobileSlider() {
            if (html.clientWidth > 576) {
                for (let i = 0; i < this.slide.length; i++) {
                    this.slide[i].style.flex = `0 0 ${this.options.widthSlide}%`
                }
            } else {
                for (let i = 0; i < sliders.length; i++) {
                    this.slide[i].style.flex = `0 0 ${this.options.widthSlideMobile}%`

                }
            }
        };

        prevSlider(view,width) {
            if (this.options.infinity||this.options.position > 0) {
                --this.options.position;
                if(this.options.position<0){
                  this.options.position =  this.slide.length - view
                }
                this.wrap.style.transform = `translateX(-${this.options.position * width}%)`;
            }
        }

        nextSlider(view,width) {
            if (this.options.infinity||this.options.position < this.slide.length - view) {
                ++this.options.position;
                if(this.options.position > this.slide.length-view){
                    this.options.position = 0
                }
                    this.wrap.style.transform = `translateX(-${this.options.position * width}%)`;
            }
        }

        controlSlider() {
            handler(this.prev, 'click',()=>{
                if (html.clientWidth<576){
                    this.prevSlider(this.slidesToShowMobile, this.options.widthSlideMobile);
                }else{
                    this.prevSlider(this.slidesToShow, this.options.widthSlide);
                }
            } )
            handler(this.next, 'click', ()=>{if (html.clientWidth<576){
                this.nextSlider(this.slidesToShowMobile,this.options.widthSlideMobile)
            }else{
                this.nextSlider(this.slidesToShow,this.options.widthSlide)
            }
    });
        }
    }

    const carousel = new SliderCarousel({
        infinity:true,
        main: '.benefits-inner',
        wrap: '.benefits-wrap',
        slide: '.benefits__item',
        next: '.benefits__arrow--right',
        prev: '.benefits__arrow--left'
    });

    const serviceCarousel = new SliderCarousel({
        infinity:true,
        main: '.wrap-slider',
        wrap: '.service-slider',
        slide: '.serv',
        next: '.services__arrow--right',
        prev: '.services__arrow--left',
        slidesToShow: 2,
    });

    carousel.init();
    serviceCarousel.init();
};
export default slider;
