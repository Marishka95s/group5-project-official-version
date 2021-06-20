import ApiServiceModal from './apiServiceModal.js';
import ApiServiceModal1 from './apiServiceOneEvent.js';
const galleryContainer = document.querySelector('.gallery_list');
const modalLightbox = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = modalLightbox.querySelector('.lightbox__overlay');

// Modal components
const modalImageRound = document.querySelector('.modalEvent__image--round'); // Link + textContent
const modalImageCube = document.querySelector('.modalEvent__image--cube'); //Link + textContent
const modalInfo = document.querySelector('.modalEvent__info'); //textContent
const modalDate = document.querySelector('.modalEvent__date'); //textContent
const modalTime = document.querySelector('.modalEvent__time'); //textContent
const modalCity = document.querySelector('.modalEvent__city'); //textContent
const modalCountry = document.querySelector('.modalEvent__country'); //textContent
const modalPlace = document.querySelector('.modalEvent__place'); //textContent
const modalArtist = document.querySelector('.modalEvent__artist'); //textContent

const modalPriceStandart = document.querySelector('.modalEvent__standart--price'); //textContent
const modalTicketBuyStandart = document.querySelector('.buyTickets__button--standart'); //link
const modalPriceVIP = document.querySelector('.modalEvent__vip--price'); //textContent
const modalTicketBuyVIP = document.querySelector('.buyTickets__button--vip'); //link

const modalMoreInfo = document.querySelector('.moreInfo__button'); //link


galleryContainer.addEventListener('click', onGalleryContainerClick);
let currentSlide = null;


function onGalleryContainerClick(evt) {
    if (!evt.target.classList.contains('event_img') && !evt.target.classList.contains('event__info')) { return };
    console.log(evt.target)

    currentSlide = evt.target;
    let necessaryId = currentSlide.parentNode.dataset.value;
    console.log(currentSlide.parentNode);
    console.log(necessaryId);

    const apiEvents = new ApiServiceModal(necessaryId);
      apiEvents.fetchQuery()
            .then(console.log('Fetch with defaults'))
            .catch(error => alert(error)); 

    modalDataAttributesChanging(currentSlide);
    
    if (!modalLightbox.classList.contains('is-open')) {
        modalLightbox.classList.add('is-open');
    }

    if (modalLightbox.classList.contains('is-open')) {
        window.addEventListener('keydown', onChangingImgKeyPress);
    };

    closeModalBtn.addEventListener('click', onCloseModal);
    lightboxOverlay.addEventListener('click', onCloseModal)
    window.addEventListener('keydown', onEscKeyPress);   
};

function modalDataAttributesChanging(currentSlide) {

//   const modalCard = {
//     id: event.id, // unneccessary info
//     event: event.name, // unneccessary info
//     imgUrl: url,
//     imgAlt: `Image of '${event.name}'`,
//     info: info, // INFO  divided with <br> each statement starts from new line
//     date: event.dates.start.localDate, // WHEN
//     time: timeToMinutes, // WHEN
//     timezone: event.dates.timezone, // WHEN
//     city: event._embedded.venues[0].city.name, // WHERE
//     country: event._embedded.venues[0].country.name, // WHERE
//     attractions: attractionsArray, // WHO in array
//     price: priceArrayOfObjects,
//     link: event.url, // href for button "BUY TICKETS"
//     moreFromThisAuthor: event._embedded.attractions[0].url,  // href for button "moreFromThisAuthor"
// };

  modalImageRound.src = modalCard.imgUrl;
  modalImageRound.alt = modalCard.imgAlt;
  modalImageCube.src = modalCard.imgUrl;
  modalImageCube.alt = modalCard.imgAlt;

  modalInfo.textContent = modalCard.info;
  modalDate.textContent = modalCard.date;
  modalTime.textContent = modalCard.time;
  modalCity.textContent = modalCard.city;
  modalCountry.textContent = modalCard.country;
  // modalPlace.textContent = modalCard.;
  // modalArtist.textContent = modalCard.;

  // modalPriceStandart.textContent = modalCard.price;
  // modalTicketBuyStandart.href = modalCard.link;
  // modalPriceVIP.textContent = modalCard.price;
  // modalTicketBuyVIP.href = modalCard.link;

  modalMoreInfo.href = modalCard.moreFromThisAuthor;
};

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) { onCloseModal() }   
};

function onCloseModal() {
    modalLightbox.classList.remove('is-open');
    // lightboxImageSrcCleaning();
}

// function lightboxImageSrcCleaning() {
//     necessaryImg.src = '';
// };

