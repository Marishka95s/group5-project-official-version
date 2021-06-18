import * as basicLightbox from 'basiclightbox';
import MariaUrl from '../../images/team/Maria.jpg';
import YuliaUrl from '../../images/team/Yulia.jpg';
import AndrewUrl from '../../images/team/Andrew.jpg';
import BorysUrl from '../../images/team/Borys.jpg';
import AndrewProsianykUrl from '../../images/team/AndrewProsianyk.jpg';
import RostyslavUrl from '../../images/team/Rostyslav.jpg';
import AllaUrl from '../../images/team/Alla.jpg';
import SergeyProkopchukUrl from '../../images/team/Serhii_Prokopchuk.jpg';
import IevgenUrl from '../../images/team/Ievgen.jpg';
import SergeySidorchukUrl from '../../images/team/Sergey.jpg';
import spriteUrl from '../../images/sprite.svg';

const markup = `<button type="button" class="lightbox__button" data-action="close-lightbox">
    <svg class="event__icon" aria-label="Navigation map point">
      <use class="icon-close" href="sprite.5ec50489.svg#icon-close"></use>
    </svg>
    </button><div class="team-wrapper"><div class="team-card">
    <img src="${MariaUrl}" alt="Mariia" class="team-image">
    <p class="team-name">Mariia</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/Marishka95s" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${YuliaUrl}" alt="Yuliia" class="team-image">
    <p class="team-name">Yuliia</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/YuliiaBond" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${AndrewUrl}" alt="Andrew" class="team-image">
    <p class="team-name">Andrew</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Andrew-del-maker" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${BorysUrl}" alt="Borys" class="team-image">
    <p class="team-name">Borys</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Borys-Samoilenko" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${AndrewProsianykUrl}" alt="AndrewProsianyk" class="team-image">
    <p class="team-name">Andrew</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/AndrewProsianyk" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${RostyslavUrl}" alt="Rostyslav" class="team-image">
    <p class="team-name">Rostyslav</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/R0st" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${AllaUrl}" alt="Alla" class="team-image">
    <p class="team-name">Alla</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Bondarenkoalla" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${SergeyProkopchukUrl}" alt="SergeyProkopchuk" class="team-image">
    <p class="team-name">Sergey</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/GosuSosed" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${IevgenUrl}" alt="Ievgen" class="team-image">
    <p class="team-name">Ievgen</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Ievgen-Rybalko" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${SergeySidorchukUrl}" alt="Sergey-Sidorchuk" class="team-image">
    <p class="team-name">Sergey</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Sergey-Sidorchuk" target="_blank" class="team-git"><svg class="logo__icon">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div></div>`;

const container = document.querySelector('.js-team-modal');
const closeModalBtn = document.querySelector('.lightbox__button');

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  closeModalBtn.addEventListener('click', closeModalHandler);
  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
//
