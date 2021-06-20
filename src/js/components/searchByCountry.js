import countries from '../countries.json';
import Api from './apiServiceEvents';
import eventTpl from '../../templates/eventTpl.hbs';
const inner = document.querySelector('[data-choice="active"]')

const eventContainer = document.querySelector('.gallery_list');

const cntrySrch = new Api();

inner.addEventListener('change', () => {
    const selectedCountry = inner.innerText;
    console.log(selectedCountry);
    let searchTerm = selectedCountry;
    let countryValue = countries.find(country => country.label === searchTerm).value;
    
    // fetch(`https://app.ticketmaster.com/discovery/v2/venues.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=${countryValue}`).then(response => {
    //     return response.json();
    // }).then(data => {
    //     console.log(data);
    // });
    
    cntrySrch.countryCode = countryValue;
    console.log(cntrySrch.countryCode);
    eventContainer.innerHTML = ''; ///////////////////// Jack: code line was added
    fetchEvents();
    
})

function fetchEvents() {
    cntrySrch.fetchQuery().then(card => {
       eventContainer.insertAdjacentHTML('beforeend', eventTpl(card))
        

    }).catch(error => alert(error));
}