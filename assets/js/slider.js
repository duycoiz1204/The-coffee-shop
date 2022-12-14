
let slideIndex = 1;
showSlides(1)
let id = setInterval(() =>{
  showSlides(slideIndex);
  slideIndex = (slideIndex+1)%4;
},5000);


function plusSlides(n) {
  clearInterval(id);
  slideIndex = n==1?(slideIndex+1)%4:(slideIndex+3)%4;
  showSlides(slideIndex);
  id = setInterval(() =>{
    slideIndex = (slideIndex+1)%4;
    showSlides(slideIndex);
},5000);
}

function currentSlide(n) {
  clearInterval(id);
  slideIndex = n;
  showSlides(slideIndex);
  id = setInterval(() =>{
      slideIndex = (slideIndex+1)%4;
      showSlides(slideIndex);
  },5000);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}