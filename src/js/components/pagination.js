export default class Pagination {
    constructor() {
        this.ref = document.querySelector('.pagination-list');
        this.totalPages = 1; // total pages need to be get from API
        this.page = 1; // pay attantion, in Querry pages start from 0, in pagination from 1
        this.countryCode;
        this.searchQuerry;
    }
    
    createPaginationMarkup() {

        if (this.totalPages === 1) {   // когда только 1 стр не рисуем
            return '';
        } else {
            this.ref?.firstElementChild?.classList.add('active');  // in all other cases mark 1st page as active by default  IF pagination was rendered before
        }

        let liTag = '';
        let activeLi;
    
        let beforePage = this.page - 1;   // с какой кнопки отображаем;
        let afterPage = this.page + 1;   //  по какую кнопку отображаем;
    
        // сколько страниц показывать до текущей страницы //how many pages or li show before the current li
        if (this.page === this.totalPages) {
            beforePage = beforePage - 1;
            afterPage = this.totalPages;
        } else if (this.page === this.totalPages - 1) {
            beforePage = beforePage;
            afterPage = this.totalPages;
        }    
        
        // сколько страниц показывать после текущей страницы //how many pages or li show after the current li
        if (this.page === 1) {
            beforePage = 1;
            afterPage = afterPage + 1;
        } else if (this.page === 2) {
            beforePage = 1;
            afterPage = afterPage;
        }

    
        // start drawing from left to right:
        if (this.page >= 2) { //если текущая страница больше 1, добавляем li prev
            liTag += `<li class="pagination-item btn-prev" ><span>Prev</span></li>`;  //onclick="createPagination(totalPages, ${page - 1})"

        }
        //убераем перехлёст в граничном случае totalPages = 3;
        if ((this.totalPages != 3) && (this.page >= 3)) { //если текущая страница больше 2, добавляем li 1

        liTag += `<li class="pagination-item first numb" ><span>1</span></li>`;  //onclick="createPagination(totalPages, 1)"
            if (this.page >= 4) { //если текущая страница больше 3, добавляем ... после 1
            liTag += `<li class="pagination-item dots js-lower"><span class="js-lower">...</span></li>`;
            }

     }

        for (let plength = beforePage; plength <= afterPage; plength++) {
            if (plength > this.totalPages) { //если длина больше, чем общие число страниц, то продолжаем
                continue;
            }
            if (plength == 0) { //если длина равна 0, то +1
                plength = plength + 1;
        }
            if (this.page == plength) { // если номер страницы равен длине, то добавить свойство active в li
                activeLi = 'active';
            } else { //иначе оставить пустым
                activeLi = '';
            }
            liTag += `<li class="pagination-item numb ${activeLi}" ><span>${plength}</span></li>`;  //onclick="createPagination(totalPages, ${plength})"
    }


        //двойным условием убераем перехлёст в граничном случае totalPages = 3;
        if ((this.totalPages != 3) && (this.page < this.totalPages - 1)) { //если значение текущей страницы меньше общего количества страниц -1, то показать последнюю страницу
            if (this.page < this.totalPages - 2) { //если значение текущей страницы меньше общего количества страниц -2, то добавить ... перед последней страницей
            liTag += `<li class="pagination-item dots"><span>...</span></li>`;
            }
        liTag += `<li class="pagination-item last numb" ><span>${this.totalPages}</span></li>`; //onclick="createPagination(totalPages, ${totalPages})"
        }
        if (this.page < this.totalPages) { //если текущая страница меньше общего количества страниц, то добавляем li next
            liTag += `<li class="pagination-item btn-next"><span>Next</span></li>`;  //onclick="createPagination(totalPages, ${page + 1})"
        
        }
    
        this.ref.innerHTML = liTag;
        
    }



    get currentPage() {
    return this.page;
    }

    set currentPage(newPage) {
    this.page = newPage;
    }

    get allPages() {
    return this.totalPages;
    }

    set allPages(newTotalPages) {
    this.totalPages = newTotalPages;
    }

    get query() {
    return this.searchQuery;
    }

    set query(newQuery) {
    this.searchQuery = newQuery;
    }

    get countryCodeId() {
    return this.countryCode;
    }

    set countryCodeId(newCountryCodeId) {
    this.countryCode = newCountryCodeId;
    }

}