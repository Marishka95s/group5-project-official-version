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
