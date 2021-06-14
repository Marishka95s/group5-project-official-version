var debounce = require('lodash.debounce');
import PicturesApiService from './components/apiService.js';
import footer from './components/footer.js';
import select from './components/select.js';
import eventTpl from '../templates/eventTpl.hbs';
import modalTpl from '../templates/modalTpl.hbs';

// import pontyfy styles and js
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import {error} from '@pnotify/core/dist/PNotify.js';

import '../sass/main.scss';


