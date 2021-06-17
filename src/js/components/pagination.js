const element = document.querySelector('.pagination-list');
let totalPages = 20; // total pages need to be get from API, when totalPages<6 where are problems
let page = 1; // active page we start from


element.innerHTML = createPagination(totalPages, page);

if (totalPages != 1) { // for single page do not show pagination at all
    element.firstElementChild.classList.add('active');  // in all other cases mark 1st page as active by default
}

element.addEventListener('click', onClick);

function onClick(evt) {
    
    const elemClicked = evt.target.nodeName;
    console.log('elemClicked:', elemClicked)
    if (elemClicked === 'UL')
        //можно еще прописать выход, если клик по текущей активной странице (evt.currentTarget.firstElementChild.classList.contains('active')
    {
        return;
    }
    
    let currentPage;
    
    if ( elemClicked === 'SPAN' ) {  // text taken from 'SPAN'
        currentPage = evt.target.textContent;
        console.log('currentPage:', currentPage);
    }
    if (elemClicked === 'LI') {  // text taken from 'LI'
        currentPage = evt.target.firstElementChild.textContent;
        console.log('currentPage:', currentPage);
    }
    
    

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

    if (totalPages === 1) {   // когда только 1 стр не рисуем
        return '';
    }

    let liTag = '';
    let activeLi;
    
    let beforePage = page - 1;   // с какой кнопки отображаем;
    let afterPage = page + 1;   //  по какую кнопку отображаем;
    
    // сколько страниц показывать до текущей страницы //how many pages or li show before the current li
    if (page === totalPages) {
        beforePage = beforePage - 1;
        afterPage = totalPages;
    } else if (page === totalPages - 1) {
        beforePage = beforePage;
        afterPage = totalPages;
    }    
        
    // сколько страниц показывать после текущей страницы //how many pages or li show after the current li
    if (page === 1) {
        beforePage = 1;
        afterPage = afterPage + 1;
    } else if (page === 2) {
        beforePage = 1;
        afterPage = afterPage;
    }

    
    // start drawing from left to right:
    if (page >= 2) { //если текущая страница больше 1, добавляем li prev
        liTag += `<li class="pagination-item btn-prev" ><span>Prev</span></li>`;  //onclick="createPagination(totalPages, ${page - 1})"
        
    }
    //убераем перехлёст в граничном случае totalPages = 3;
    if ((totalPages != 3) && (page >= 3)) { //если текущая страница больше 2, добавляем li 1
        
    liTag += `<li class="pagination-item first numb" ><span>1</span></li>`;  //onclick="createPagination(totalPages, 1)"
        if (page >= 4) { //если текущая страница больше 3, добавляем ... после 1
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
        }
        
    }

    

    for (let plength = beforePage; plength <= afterPage; plength++) {
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

    
    //двойным условием убераем перехлёст в граничном случае totalPages = 3;
    if ((totalPages != 3) && (page < totalPages - 1)) { //если значение текущей страницы меньше общего количества страниц -1, то показать последнюю страницу
        if (page < totalPages - 2) { //если значение текущей страницы меньше общего количества страниц -2, то добавить ... перед последней страницей
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
        }
    liTag += `<li class="pagination-item last numb" ><span>${totalPages}</span></li>`; //onclick="createPagination(totalPages, ${totalPages})"
    }
    if (page < totalPages) { //если текущая страница меньше общего количества страниц, то добавляем li next
        liTag += `<li class="pagination-item btn-next"><span>Next</span></li>`;  //onclick="createPagination(totalPages, ${page + 1})"
    
    }
    
    element.innerHTML = liTag;
    return liTag;
}