
/////////////////////////////////////////////////////////////////
//// код переехал, раздел поиска по СТРАНЕ теперь в index.js ////    Ievgen R.
/////////////////////////////////////////////////////////////////


//import countries from '../countries.json';
//import Api from './apiServiceEvents';
//import eventTpl from '../../templates/eventTpl.hbs';
// const inner = document.querySelector('[data-choice="active"]')
// const eventContainer = document.querySelector('.gallery_list');

// console.log('const eventContainer = document.querySelector(.gallery_list);', eventContainer);
// const cntrySrch = new Api();
// inner.addEventListener('change', () => {
//     const selectedCountry = inner.innerText;
//     console.log(selectedCountry);
//     let searchTerm = selectedCountry;
//     let countryValue = countries.find(country => country.label === searchTerm).value;

//     cntrySrch.countryCode = countryValue;
//     console.log(cntrySrch.countryCode);
//     eventContainer.innerHTML = ''; ///////////////////// Jack: code line was added
//     fetchEvents();
// })
// function fetchEvents() {
//     cntrySrch.fetchQuery().then(card => {
//        eventContainer.insertAdjacentHTML('beforeend', eventTpl(card))  
//     }).catch(error => alert(error));
// }