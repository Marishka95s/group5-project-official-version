import ApiServiceModal from './apiServiceModal.js';
import modalTpl from '../../templates/modalTpl.hbs';
// import ApiServiceModal1 from './apiServiceOneEvent.js';
const galleryContainer = document.querySelector('.gallery_list');
const modalLightbox = document.querySelector('.lightbox__content');
const closeModalBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
// Modal components

galleryContainer.addEventListener('click', onGalleryContainerClick);
let currentSlide = null;
let necessaryId = null;

function onGalleryContainerClick(evt) {
    if (!evt.target.classList.contains('event_img') && !evt.target.classList.contains('event__info')) { return };
    console.log(evt.target)

    currentSlide = evt.target;
    necessaryId = currentSlide.parentNode.dataset.value;
    console.log(currentSlide.parentNode);
    console.log(necessaryId);

    const apiEvents = new ApiServiceModal(necessaryId);
    apiEvents.eventId = necessaryId;
    apiEvents.fetchQuery()
            
        .then(data => {
            const data1 = modalTpl({  });
            console.log(`Data1, ${data}`)
            modalLightbox.insertAdjacentHTML('beforeend', data1);
        })
            .catch(error => alert(error)); 
    
    if (!modalLightbox.classList.contains('is-open')) {
        modalLightbox.classList.add('is-open');
    }

    closeModalBtn.addEventListener('click', onCloseModal);
    lightboxOverlay.addEventListener('click', onCloseModal);
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


