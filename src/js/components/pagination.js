const element = document.querySelector('.pagination-list');
let totalPages = 20;
let page = 10;

element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page) {
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;

    if (page > 1) { //если страниц больше 1, добавляем li prev
        liTag += `<li class="pagination-item btn prev" onclick="createPagination(totalPages, ${page - 1})"><span>Prev</span></li>`;
        }

    if(page > 2){ //если страниц больше 2, добавляем li 1
    liTag += `<li class="pagination-item first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    
        if (page > 3) { //если страниц больше 3, добавляем ... после 1
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
        }
    }

    // сколько страниц покаказывают до текущей страницы
    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
  // сколько страниц покаказывают после текущей страницы
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage  = afterPage + 1;
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
        liTag += `<li class="pagination-item numb ${activeLi}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }

    if(page < totalPages - 1){ //если значение страницы меньше общему количеству страниц -1, то показать последнюю страницу
    if(page < totalPages - 2){ //если значение страницы меньше общему количеству страниц -2, то добавить ... перед последней страницей
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
    }
    liTag += `<li class="pagination-item last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) { //если страниц меньше общему количеству страниц, то добавляем li next
        liTag += `<li class="pagination-item" onclick="createPagination(totalPages, ${page + 1})"><span> Next</span></li>`;
    }
    
    element.innerHTML = liTag;
    return liTag
}