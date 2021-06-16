import Api from './apiServiceEvents';
import eventTpl from '../../templates/eventTpl.hbs';
import error from './error';

const debounce = require('lodash.debounce');

const API = new Api();

const eventContainer = document.querySelector('.gallery_list');
const input = document.querySelector('.search-input');
input.addEventListener('input', debounce(onSearch, 500));



function onSearch(event) {
    API.query = event.target.value.trim();

    console.log(API.query);

    if (API.query !== '' && API.query !== ' ') {
        API.resetPage();
        eventContainer.innerHTML = '';
        fetchEvents();
    } else {
        error();
    }
}

function fetchEvents() {
    API.fetchQuery().then(card => {
        eventContainer.insertAdjacentHTML('beforeend', eventTpl(card))

    })
}