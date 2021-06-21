var debounce = require('lodash.debounce');

// Templates

import eventTpl from '../templates/eventTpl.hbs';

// Component
import Pagination from './components/pagination.js';
import ApiServiceEvents from './components/apiServiceEvents.js';
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
const apiOneEvent = new ApiServiceOneEvent();
apiOneEvent
  .fetchQuery()
  .then(console.log('Fetched ONE in index.js'))
  .catch(error => alert(error));

const apiEvents = new ApiServiceEvents();
apiEvents
  .fetchQuery()
  .then(console.log('Fetched ALL in index.js'))
  .catch(error => alert(error));



  
const pagination = new Pagination();

// раздел со ссылочками
pagination.ref = document.querySelector('.pagination-list');
const eventContainer = document.querySelector('.gallery_list');
const inputRef = document.querySelector('.search-input');

inputRef.addEventListener('input', debounce(onSearch, 500));



function onSearch(event) {
    apiEvents.query = event.target.value.toLowerCase().trim();

    console.log('apiEvents.query:', apiEvents.query);

    if (apiEvents.query !== '' && apiEvents.query !== ' ') {
      //API.resetPage();  //// Jack: tryed to disable as it is not needed
      eventContainer.innerHTML = '';
      pagination.ref.innerHTML = ''; //// on fetch clear pagination
      fetchEvents();
      //console.log('apiEvents.totalpages:', apiEvents.totalpages);
    } else {
        error();
    }
}

function fetchEvents() {
    apiEvents.fetchQuery().then(card => {

        eventContainer.innerHTML = '';
        
        eventContainer.insertAdjacentHTML('beforeend', eventTpl(card));
        pagination.allPages = apiEvents.allPages;
        pagination.currentPage = apiEvents.currentPage + 1;
       // console.log('in index.js pagination.allPages:::', pagination.allPages,'API:', apiEvents.allPages);
       // console.log('in index.js pagination.currentPage:::', pagination.currentPage,'API', apiEvents.currentPage);
        pagination.createPaginationMarkup();
    }).catch(error => alert(error))///////////////////// Jack: code line "catch" was added to catch an error
}



// initial pagination render
if (pagination.allPages > 1) {
      pagination.createPaginationMarkup();
  }
  
// pagination render onPageClick

pagination.ref.addEventListener('click', onPageClick);


function onPageClick(evt) {
    
    const elemClicked = evt.target.nodeName;
    //console.log('elemClicked:', elemClicked)
    if (elemClicked === 'UL')
        //можно еще прописать выход, если клик по текущей активной странице (evt.currentTarget.firstElementChild.classList.contains('active')
    {
        return;
    }
    
    let clickedPage;
    
    if ( elemClicked === 'SPAN' ) {  // text taken if clicked on 'SPAN'
        clickedPage = evt.target.textContent;
        //console.log('currentPage:', clickedPage);
    }
    if (elemClicked === 'LI') {  // text taken if clicked on 'LI'
        clickedPage = evt.target.firstElementChild.textContent;
        //console.log('currentPage:', clickedPage);
    }
  
    if (clickedPage === '...') {
        return;
    }

    if ((clickedPage === 'Prev') && (pagination.currentPage > 1)) {
        evt.target.classList.toggle('active');
        pagination.page -= 1;
        apiEvents.currentPage = pagination.currentPage - 1;
        fetchEvents();
        pagination.createPaginationMarkup();
        pagination.createPaginationMarkup();
        return;
    }
    if ((clickedPage === 'Next') && (pagination.currentPage < pagination.allPages)) {
        pagination.currentPage += 1;
      
        apiEvents.currentPage = pagination.currentPage - 1;
        fetchEvents();
        pagination.createPaginationMarkup();
        pagination.createPaginationMarkup();
        return;
    }

  pagination.currentPage = Number(clickedPage);
  
  apiEvents.currentPage = pagination.currentPage - 1;
  fetchEvents();
  pagination.createPaginationMarkup();
    
}