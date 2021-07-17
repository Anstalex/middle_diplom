'use strict';
import toggleModal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import forms from "./modules/forms";
import certificate from "./modules/certificate";
import scroll from "./modules/scroll";
import calc from "./modules/calc";
import maskPhone from "./modules/maskPhone";

toggleModal();
slider();
timer('10 august 2021 01:10');
forms();
certificate();
scroll();
calc();
maskPhone('input[name=phone]');
