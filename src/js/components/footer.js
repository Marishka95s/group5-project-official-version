const btnGoTop = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnGoTop.style.display = "block";
  } else {
    btnGoTop.style.display = "none";
  }
}
btnGoTop.addEventListener('click',(e) =>{
    e.preventDefault();
    scrollFunction()
    window.scroll(0, 0)
})
  

// const btnGoTop = document.querySelector('.back_to_top');

// window.addEventListener('scroll', onScroll);
// btnGoTop.addEventListener('click', onBackToTop);

// function onScroll() {
//     const scrollTop = window.scrollY;   
//     const lengthScroll = document.documentElement.clientHeight;  //возвращаем первый дочерний элемент документа HTML по высоте старницы

// // console.log(scrollTop);
// // console.log(lengthScroll);
//     if(scrollTop > lengthScroll) {
//         btnGoTop.classList.add('back_to_top_show');
//     } 
//     else if (scrollTop < lengthScroll) {
//         btnGoTop.classList.remove('back_to_top_show');
//     }
// }

// function onBackToTop() {
//     if(window.scrollY > 0) {
//         window.scrollBy(0, -200);     // Прокрутка на один экран вертикально вниз.
//         setTimeout(onBackToTop, 0);
//     }
// }

