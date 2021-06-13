const btnGoTop = document.querySelector('.back_to_top');

window.addEventListener('scroll', onScroll);
btnGoTop.addEventListener('click', onBackToTop);

function onScroll() {
    const scrollTop = window.scrollY;   
    const lengthScroll = document.documentElement.clientHeight;  //возвращаем первый дочерний элемент документа HTML по высоте старницы

console.log(scrollTop);
console.log(lengthScroll);
    if(scrollTop > lengthScroll) {
        btnGoTop.classList.add('back_to_top_show');
    } 
    else if (scrollTop < lengthScroll) {
        btnGoTop.classList.remove('back_to_top_show');
    }
}

function onBackToTop() {
    if(window.scrollY > 0) {
        window.scrollBy(0, -200);     // Прокрутка на один экран вертикально вниз.
        setTimeout(onBackToTop, 0);
    }
}

