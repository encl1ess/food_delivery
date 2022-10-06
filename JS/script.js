require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import cards from './modules/cards';
import forms from './modules/forms';
import timer from './modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000),
            deadLine = '2023-01-01';
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    forms('form', modalTimerId);
    timer('.timer', deadLine);
    slider({
        container: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    modal('[data-modal]','.modal', modalTimerId);
});