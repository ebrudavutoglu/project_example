import $ from 'jquery';
import bootstrap from 'bootstrap';
import popper from 'popper.js';
import Swiper from 'swiper';


window.$ = window.jQuery = $;
window.popper = popper;
window.Swiper = Swiper;

//Base
import ClassRouter from './base/ClassRouter';

//Pages
import HomePage from './pages/HomePage';

//Components


const router = ({
    'home-page' : () => {
        new HomePage();
    },
    '*': () => {
        console.log('Page not found');
    }
})

const setRouter = new ClassRouter(router);