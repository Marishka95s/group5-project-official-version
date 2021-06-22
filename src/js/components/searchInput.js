

////////////////////////////////////////
//// Sorry! код переехал в index.js ////   Ievgen R.
////////////////////////////////////////



// import Api from './apiServiceEvents';
// import eventTpl from '../../templates/eventTpl.hbs';
// import error from './error';

// const debounce = require('lodash.debounce');

// const API = new Api();
//API.query.toLowerCase();  //// Jack: tryed to disable as it is not needed
// const eventContainer = document.querySelector('.gallery_list');
// const input = document.querySelector('.search-input');
// input.addEventListener('input', debounce(onSearch, 500));



// function onSearch(event) {
//     API.query = event.target.value.toLowerCase().trim();

//     console.log(API.query);

//     if (API.query !== '' && API.query !== ' ') {
//         //API.resetPage();  //// Jack: tryed to disable as it is not needed
//         eventContainer.innerHTML = '';
//         fetchEvents();
//     } else {
//         error();
//     }
// }

// function fetchEvents() {
//     API.fetchQuery().then(card => {

//         eventContainer.insertAdjacentHTML('beforeend', eventTpl(card));
        
//     }).catch(error => alert(error))///////////////////// Jack: code line "catch" was added to catch an error
// }
