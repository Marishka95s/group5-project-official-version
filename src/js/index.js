//var debounce = require('lodash.debounce');
import PicturesApiService from './components/apiService.js'
import eventTpl from '../templates/eventTpl.hbs';
import modalTpl from '../templates/modalTpl.hbs';

//import pontyfy styles and js
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import {error} from '@pnotify/core/dist/PNotify.js';

import '../sass/main.scss';


const apiService1 = new PicturesApiService();
apiService1.fetchQuery().then(console.table);

//get with width of browser window in pixels;
console.log('document.documentElement.clientWidth', document.documentElement.clientWidth);

// async function renderEvents() {
//     const options = {

//     };
//     const responce = apiService1.fetchQuery(options);
//     const data = await responce.json();
//     const obj = await 
// }