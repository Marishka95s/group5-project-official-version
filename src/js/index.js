var debounce = require('lodash.debounce');

// Templates

import eventTpl from '../templates/eventTpl.hbs';

// Component
import Pagination from './components/pagination.js';
import ApiServiceEvents from './components/apiServiceEvents.js';
import countries from './countries.json';
import err from './components/error.js';
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


const pagination = new Pagination();

// раздел со ссылочками
pagination.ref = document.querySelector('.pagination-list');
const eventContainer = document.querySelector('.gallery_list');
const inputRef = document.querySelector('.search-input');



// const apiOneEvent = new ApiServiceOneEvent();
// apiOneEvent
//   .fetchQuery()
//   .then(console.log('Fetched ONE EVENT for MODAL in index.js'))
//   .catch(error => alert(error));


// this block starts EMPTY querry request for USA --- DEFAULTS may be
// changed in class ApiServiceEvents()
// the result of API's "fetchQuerry" is an Array of Objects
const apiEvents = new ApiServiceEvents();
apiEvents
  fetchEvents();


inputRef.addEventListener('input', debounce(onSearch, 700));

///////////////////////////////////////////////////////////////////
/////// сюда переехал раздел по поиска ВВОДА из searchInput.js ////
///////////////////////////////////////////////////////////////////



function onSearch(event) {
    apiEvents.query = event.target.value.toLowerCase().trim();

    console.log('apiEvents.query:', apiEvents.query);

    if (apiEvents.query !== ' ') { // пустой позволим, чтобы сортировка по стране срабатывала
      
      eventContainer.innerHTML = '';
      pagination.ref.innerHTML = ''; //// before "fetchEvents" we clear pagination
      fetchEvents();
      //console.log('apiEvents.totalpages:', apiEvents.totalpages);
    } else {
        err();
    }
}

/////////////////////////////////////////////////////////////////////
//// сюда переехал раздел поиска по СТРАНЕ из searchByCountry.js ////
/////////////////////////////////////////////////////////////////////

const inner = document.querySelector('[data-choice="active"]')
//const eventContainer = document.querySelector('.gallery_list');  -- уже есть выше

//const cntrySrch = new Api(); -- апи стартуем один экземпляр на всех, чтоб он хранил в себе все состояния запросов
inner.addEventListener('change', () => {
    const selectedCountry = inner.innerText;
    console.log(selectedCountry);
    let searchTerm = selectedCountry;
    let countryValue = countries.find(country => country.label === searchTerm).value;

    apiEvents.countryCodeId = countryValue;

    console.log(apiEvents.countryCode);
    eventContainer.innerHTML = ''; ///////////////////// Jack: code line was added
    pagination.ref.innerHTML = ''; //// before "fetchEvents" we clear pagination
    fetchEvents();
})
// function fetchEvents() {
//     cntrySrch.fetchQuery().then(card => {
//        eventContainer.insertAdjacentHTML('beforeend', eventTpl(card))  
//     }).catch(error => alert(error));
// }




function fetchEvents() {
    apiEvents.fetchQuery().then(card => {

        eventContainer.innerHTML = '';
        
        eventContainer.insertAdjacentHTML('beforeend', eventTpl(card));
        pagination.allPages = apiEvents.allPages;
        pagination.currentPage = apiEvents.currentPage + 1;
       // console.log('in index.js pagination.allPages:::', pagination.allPages,'API:', apiEvents.allPages);
       // console.log('in index.js pagination.currentPage:::', pagination.currentPage,'API', apiEvents.currentPage);
        pagination.createPaginationMarkup();
    }).catch(error => err())///////////////////// Jack: code line "catch" was added to catch an error
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
        if (evt.target.classList.contains('js-lower')) {
            pagination.currentPage = Math.ceil(pagination.currentPage / 2);
        } else {
            pagination.currentPage = pagination.allPages -
                Math.floor((pagination.allPages - pagination.currentPage)/2);
        }
        apiEvents.currentPage = Number(pagination.currentPage - 1);
        fetchEvents();
        pagination.createPaginationMarkup();
        return;
    }

    if ((clickedPage === 'Prev') && (pagination.currentPage > 1)) {
        //evt.target.classList.toggle('active');
        pagination.currentPage -= 1;
        apiEvents.currentPage = pagination.currentPage - 1;
        fetchEvents();
        pagination.createPaginationMarkup();
        
        return;
    }
    if ((clickedPage === 'Next') && (pagination.currentPage < pagination.allPages)) {
        pagination.currentPage += 1;
      
        apiEvents.currentPage = pagination.currentPage - 1;
        fetchEvents();
        pagination.createPaginationMarkup();
        
        return;
    }

  pagination.currentPage = Number(clickedPage);
  
  apiEvents.currentPage = pagination.currentPage - 1;
  fetchEvents();
  pagination.createPaginationMarkup();
    
}