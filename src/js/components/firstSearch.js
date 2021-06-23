

////////////////////////////////////////
//// Sorry! код переехал в index.js ////   Ievgen R.
////////////////////////////////////////



// import Api from './apiServiceEvents';
// import eventTpl from '../../templates/gallery.hbs';

// const eventContainer = document.querySelector('.gallery_list');

// const API = new Api();
// API.searchQuery = 'Eagles';
// firstSearch();

// async function firstSearch() {
//     sessionStorage.clear();
//     await API.getEvent();

//     if (API.query._embedded) {
        
//         creatGallery(API.query);
//     } else {
//         eventContainer.innerHTML = '';
//     }
//     // console.log(API.query._embedded.events);
// }

// function creatGallery(data) {
//     data._embedded.events.forEach(e => {
//         e.img = e.images.find(el => el.ratio === '4_3');
//     });
//     eventContainer.innerHTML = eventTpl(data._embedded.events);
// }
