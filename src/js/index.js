var debounce = require('lodash.debounce');

// Templates
import '../templates/cards.hbs';
import '../templates/eventTpl.hbs';

// Component
import ApiServiceOneEvent from './components/apiServiceEvents.js';
import './components/footer.js';
import './components/select.js';
import './components/searchInput.js';
import './components/searchByCountry.js';
import './components/pagination.js';
import './components/preloader.js';
import './components/firstSearch.js';
import './components/teamLightbox.js';
import './components/modal.js';

// import pontyfy styles and js
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { error } from '@pnotify/core/dist/PNotify.js';

import '../sass/main.scss';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

// this block starts test EMPTY querry request for USA
// the result is an Array of Objects => see console log
const apiEvents = new ApiServiceOneEvent();
apiEvents
  .fetchQuery()
  .then(console.log('Fetch with defaults'))
  .catch(error => alert(error));