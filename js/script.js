import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from'./modules/forms';
import modals from './modules/modals';
import sliders from  './modules/sliders';
import timer from './modules/timer';
import {openModal} from './modules/modals';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);


    tabs('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
    calc();
    cards();
    forms('form');
    modals('[data-modal]', '.modal', modalTimerId);
    sliders({
        sliderSelcetor: '.offer__slide',
        slidersSelector: '.offer__slider',
        preArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '2020-07-10');      

});