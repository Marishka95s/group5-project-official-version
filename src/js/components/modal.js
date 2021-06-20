// import files from "./gallery-items.js";
// 1.Создание и рендер разметки по массиву данных и предоставленному шаблону.
// 2 Реализация делегирования на галерее ul.js-gallery и получение url большого
// изображения. 
// 3 Открытие модального окна по клику на элементе галереи.
// 4 Подмена значения атрибута src элемента img.lightbox**image. 
// 5 Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"]. Очистка значения атрибута
// src элемента img.lightbox**image. Это необходимо для того, чтобы при следующем
// открытии модального окна, пока грузится изображение, мы не видели предыдущее.



// const refs = {
//   containerGallery: document.querySelector('.js-gallery'),
//   overlay: document.querySelector('.lightbox__overlay'),
//   lightbox: document.querySelector('.js-lightbox'),
//   closeBtn: document.querySelector('[data-action="close-lightbox"]'),
//   imgModul: document.querySelector('.lightbox__image'),
// };

import ApiService from './apiServiceOneEvent.js'
import modalTemplate from '../../templates/modalTpl.hbs'

const refs = {
    lightbox: document.querySelector('.lightbox'),
    btnClose: document.querySelector('.btn_close'),
    modalEventContent: document.querySelector('.modalEvent__content'),
    moreInfoBtn: document.querySelector('.moreInfo__button'),
    ulQ: document.querySelector('.gallery_list'),
}

const API = new ApiService()
console.log(refs.ulQ);

// function onClick(e) {
//     refs.ulQ.innerHTML = ''
//     isCard = e.target.closest('.gallery_list');
//     if (!isCard) {
//         return
// }

// refs.lightbox.addEventListener('click', onCreateModal)

// function onCreateModal(event) {
//     if (!event.target.classList.contains('modalEvent__image--round')) {
//         return;
//     }
//     event.preventDefault()
//     console.log(event.target);
//     const el = event.target;
//     const elCurrent = event.currentTarget;
//     onOpenLightbox(el);
//     window.addEventListener('keydown', onEscPress);
//     console.log(refs.lightbox);
// }

//  function onOpenLightbox(el) {
//   refs.lightbox.classList.add('is-open');
//   refs.overlay.addEventListener('click', onCloseLightbox);
//   refs.closeBtn.addEventListener('click', onCloseLightbox);
//   refs.imgModul.src = el.dataset.source;
//   refs.imgModul.alt = el.alt;
  
// };

// function createMarkUp(files) {
//     return files.map(({preview, original, description}) => {
//          return `
//     <li class="gallery__item">
//   <a class="gallery__link"
//      href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
// }).join('');
// };

// refs.containerGallery.insertAdjacentHTML('beforeend', createMarkUp(files));
// refs.containerGallery.addEventListener('click', onCreateGalleryClick);

// function onCreateGalleryClick(ev) {
//   if (!ev.target.classList.contains('gallery__image')) {
//     return;
//   }
//   ev.preventDefault();
//   console.log(ev.target);
//   const el = ev.target;
//   const elCurrent = ev.currentTarget;
//   onOpenLightbox(el);
//   window.addEventListener('keydown', onEscPress);
//   console.log(refs.lightbox);
// }

// function onOpenLightbox(el) {
//   refs.lightbox.classList.add('is-open');
//   refs.overlay.addEventListener('click', onCloseLightbox);
//   refs.closeBtn.addEventListener('click', onCloseLightbox);
//   refs.imgModul.src = el.dataset.source;
//   refs.imgModul.alt = el.alt;
  
// };

// function onCloseLightbox() {
  
//   refs.closeBtn.removeEventListener('click', onCloseLightbox);
//   refs.lightbox.classList.remove('is-open');
//   window.removeEventListener('keydown', onEscPress);
  
//   onClearSrc();
// };

// function onEscPress(ev) {
//   if (ev.code === 'Escape') {
//     onCloseLightbox();
//   }
// }

// function onClearSrc() {
//    refs.imgModul.src = '';
//   refs.imgModul.alt = '';
// }