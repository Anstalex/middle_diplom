(()=>{"use strict";const e=(e,t,i)=>{e.addEventListener(t,i)},t=document.querySelector("html"),i=document.querySelectorAll(".benefits__item");let o;(()=>{const t=document.querySelector(".header-modal--opened"),i=document.querySelector(".services-modal--opened"),o=document.querySelector(".overlay");e(document,"click",(e=>{const s=e.target;s.closest(".btn-warning")?(o.classList.remove("overlay-close"),t.classList.remove("header-modal")):s.closest(".btn-success")?(o.classList.remove("overlay-close"),i.classList.remove("services-modal")):(!s.closest(".header-modal--opened")&&!s.closest(".services-modal--opened")||s.matches(".header-modal__close")||s.matches(".services-modal__close"))&&(o.classList.add("overlay-close"),t.classList.add("header-modal"),i.classList.add("services-modal"))}))})(),(()=>{class o{constructor({main:e,wrap:t,next:i,slide:o,prev:s,infinity:n=!1,slidesToShow:l=3,slidesToShowMobile:r=1,position:d=0}){this.main=document.querySelector(e),this.slide=document.querySelectorAll(o),this.wrap=document.querySelector(t),this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slidesToShow=l,this.slidesToShowMobile=r,this.options={position:d,infinity:n,widthSlide:Math.floor(100/this.slidesToShow),widthSlideMobile:Math.floor(100/this.slidesToShowMobile)}}init(){this.controlSlider(),this.loadMobileSlider()}loadMobileSlider(){if(t.clientWidth>576)for(let e=0;e<this.slide.length;e++)this.slide[e].style.flex=`0 0 ${this.options.widthSlide}%`;else for(let e=0;e<i.length;e++)this.slide[e].style.flex=`0 0 ${this.options.widthSlideMobile}%`}prevSlider(e,t){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slide.length-e),this.wrap.style.transform=`translateX(-${this.options.position*t}%)`)}nextSlider(e,t){(this.options.infinity||this.options.position<this.slide.length-e)&&(++this.options.position,this.options.position>this.slide.length-e&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*t}%)`)}controlSlider(){e(this.prev,"click",(()=>{t.clientWidth<576?this.prevSlider(this.slidesToShowMobile,this.options.widthSlideMobile):this.prevSlider(this.slidesToShow,this.options.widthSlide)})),e(this.next,"click",(()=>{t.clientWidth<576?this.nextSlider(this.slidesToShowMobile,this.options.widthSlideMobile):this.nextSlider(this.slidesToShow,this.options.widthSlide)}))}}const s=new o({infinity:!0,main:".benefits-inner",wrap:".benefits-wrap",slide:".benefits__item",next:".benefits__arrow--right",prev:".benefits__arrow--left"}),n=new o({infinity:!0,main:".wrap-slider",wrap:".service-slider",slide:".serv",next:".services__arrow--right",prev:".services__arrow--left",slidesToShow:2});s.init(),n.init()})(),(e=>{const t=document.querySelector(".count_1"),i=document.querySelector(".count_2"),s=document.querySelector(".count_3"),n=document.querySelector(".count_4"),l={};function r(){!function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,i=Math.floor(t%60),o=Math.floor(t/60%60),s=Math.floor(t/60/60%24),n=Math.floor(t/60/60/24);l.timeRemaining=t,l.days=n,l.hours=s,l.minutes=o,l.seconds=i}();const o=e=>e<10?"0"+e:+e;t.children[1].textContent=o(l.days),i.children[1].textContent=o(l.hours),s.children[1].textContent=o(l.minutes),n.children[1].textContent=o(l.seconds)}r(),l.timeRemaining>0?o=setInterval(r,1e3):(t.innerText="00",i.innerText="00",s.innerText="00",n.innerText="00",clearInterval(o))})("10 august 2021 01:10"),(()=>{const t=document.querySelector(".smooth-scroll"),i=document.getElementById("offer");e(window,"scroll",(()=>{console.log(window.clientWidth)})),e(t,"click",(()=>{i.scrollIntoView({block:"start",behavior:"smooth"})}))})()})();