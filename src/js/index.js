var debounce = require('lodash.debounce');
import ApiServiceEvents from './components/apiServiceEvents.js';
import cardsEl from '../templates/cards.hbs';
import ApiServiceOneEvent from './components/apiServiceOneEvent.js';
import footer from './components/footer.js';
import select from './components/select.js';
import modal from './components/modal.js';
import input from './components/searchInput.js';
import searchByCountry from './components/searchByCountry.js';
import eventTpl from '../templates/eventTpl.hbs';
import modalTpl from '../templates/modalTpl.hbs';
import pagination from './components/pagination.js';
// import pontyfy styles and js
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { error } from '@pnotify/core/dist/PNotify.js';
import preload from './components/preloader.js';
import './components/firstSearch.js';
import '../sass/main.scss';
import './components/teamLightbox.js';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

// this block starts test EMPTY querry request for USA
// the result is an Array of Objects => see console log
const apiEvents = new ApiServiceOneEvent();
apiEvents
  .fetchQuery()
  .then(console.log('Fetch with defaults'))
  .catch(error => alert(error));