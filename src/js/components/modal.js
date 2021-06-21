import ApiServiceModal from './apiServiceModal.js';
import modalTpl from '../../templates/modalTpl.hbs';

const galleryContainer = document.querySelector('.gallery_list');
const modalLightbox = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
// const modalContent = document.querySelector('.lightbox__content');
// Modal components

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
    apiEvents.eventId = necessaryId;
    apiEvents.fetchQuery()            
        .then(data => {
            const { id, imgUrl, imgAlt, info, date, time, timezone, city, country, attractions, price, link, moreFromThisAuthor, venue } = data;
            const data1 = modalTpl({ id, imgUrl, imgAlt, info, date, time, timezone, city, country, attractions, price, link, moreFromThisAuthor, venue });
            console.dir(data);
            console.log({ id, imgUrl, imgAlt, info, date, time, timezone, city, country, attractions, price, link, moreFromThisAuthor, venue })
            modalLightbox.insertAdjacentHTML('afterbegin', data1);
            console.log(modalLightbox);
        })
            .catch(error => alert(error)); 
    
    if (!modalLightbox.classList.contains('is-open')) {
        modalLightbox.classList.add('is-open');
    }

    closeModalBtn.addEventListener('click', onCloseModal);
    console.log(lightboxOverlay)
    // lightboxOverlay.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', onEscKeyPress);   
};

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) { onCloseModal() }   
};

function onCloseModal() {
    modalLightbox.classList.remove('is-open');
}


