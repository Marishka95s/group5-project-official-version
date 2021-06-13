var debounce = require('lodash.debounce');
import ApiServiceEvents from './components/apiServiceEvents.js';
import footer from './components/footer.js';

import eventTpl from '../templates/eventTpl.hbs';
import modalTpl from '../templates/modalTpl.hbs';

// import pontyfy styles and js
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import {error} from '@pnotify/core/dist/PNotify.js';

import '../sass/main.scss';


// this block starts test EMPTY querry request for USA
// the result is an Array of Objects => see console log
const apiEvents = new ApiServiceEvents();
apiEvents.fetchQuery().then(console.log)
    .catch((error) => alert(error)
);
