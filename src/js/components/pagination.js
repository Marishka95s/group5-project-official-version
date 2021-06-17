const element = document.querySelector('.pagination-list');
let totalPages = 20; // total pages need to be get from API, when totalPages<6 where are problems
let page = 1; // active page we start from


element.innerHTML = createPagination(totalPages, page);
element.firstElementChild.classList.add('active');

element.addEventListener('click', onClick);

function onClick(evt) {
    console.log('evt.target.classList.contains:', evt.target.classList.contains('activeLi'), 'page=before-click:', page, 'type evt.target.textContent:', typeof evt.target.textContent);
    if ((evt.target.nodeName !== 'SPAN')
        || evt.target.classList.contains('active')) {  // Женя: contains dont work???
        return;
    }
    let currentPage = evt.target.textContent;
    console.log('currentPage', currentPage);
    
    if (currentPage === '...') {
        return;
    }

    if ((currentPage === 'Prev') && (page > 1)) {
        evt.target.classList.toggle('active');
        page -= 1;
        createPagination(totalPages, page);
        return;
    }
    if ((currentPage === 'Next') && (page < totalPages)) {
        page += 1;
        createPagination(totalPages, page);
        return;
    }

    page = Number(currentPage);
    createPagination(totalPages, page);

}

function createPagination(totalPages, page) {
    let liTag = '';
    let activeLi;
    console.log('Page', page,'  ','totalPages', totalPages);
    let beforePages = (page > 1) ? page - 1 : page;   // Женя: это костылик - надо разобраться';
    console.log('beforePages', beforePages);
    let afterPages = (page < totalPages) ? page + 1 : page;   //Женя: это костылик - надо разобраться';
    console.log('afterPages', afterPages);

    if (totalPages === 1) {   // Женя: когда только 1 стр не рисуем
        return;
    }

    if (page > 1) { //если страниц больше 1, добавляем li prev
        liTag += `<li class="pagination-item btn-prev" ><span>Prev</span></li>`;  //onclick="createPagination(totalPages, ${page - 1})"
        
    }

    if(page > 2){ //если страниц больше 2, добавляем li 1
    liTag += `<li class="pagination-item first numb" ><span>1</span></li>`;  //onclick="createPagination(totalPages, 1)"
    
        if (page > 3) { //если страниц больше 3, добавляем ... после 1
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
        }
    }


    //Женя: это костылик - надо разобраться. С if (totalPages > 4) начало работать для totalPage=2
    if (totalPages > 4) {
        // сколько страниц показывают до текущей страницы
    if (page === totalPages) {
        beforePages = beforePages - 2;
    } else if (page === totalPages - 1) {
        beforePages = beforePages - 1;
    }
    }


  // сколько страниц покаказывают после текущей страницы
    if (page === 1) {
        afterPages = afterPages + 2;
    } else if (page === 2) {
        afterPages  = afterPages + 1;
    }



    for (let plength = beforePages; plength <= afterPages; plength++) {
        if (plength > totalPages) { //если длина больше, чем общие число страниц, то продолжаем
            continue;
        }
        if (plength == 0) { //если длина равна 0, то +1
            plength = plength + 1;
    }
        if (page == plength) { // если номер страницы равен длине, то добавить свойство active в li
            activeLi = 'active';
        } else { //иначе оставить пустым
            activeLi = '';
        }
        liTag += `<li class="pagination-item numb ${activeLi}" ><span>${plength}</span></li>`;  //onclick="createPagination(totalPages, ${plength})"
    }

    if (page < totalPages - 1) { //если значение страницы меньше общему количеству страниц -1, то показать последнюю страницу
        if (page < totalPages - 2) { //если значение страницы меньше общему количеству страниц -2, то добавить ... перед последней страницей
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
        }
    liTag += `<li class="pagination-item last numb" ><span>${totalPages}</span></li>`; //onclick="createPagination(totalPages, ${totalPages})"
    }
    if (page < totalPages) { //если страниц меньше общему количеству страниц, то добавляем li next
        liTag += `<li class="pagination-item btn-next"><span>Next</span></li>`;  //onclick="createPagination(totalPages, ${page + 1})"
    
    }
    
    element.innerHTML = liTag;
    return liTag;
}