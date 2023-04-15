
const carousels = [...document.querySelectorAll(".carousel")];
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let carouselindex = 0;
let intervalId ;

carousels[0].classList.add("carousel-active", "no-transition");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".sub-title");
const btnSection = document.querySelector(".btn-sec");
title.classList.add("carousel-active");
subtitle.classList.add("carousel-active");
btnSection.classList.add("carousel-active");

prevBtn.addEventListener("click", minusSlide);
nextBtn.addEventListener("click", plusSlide);

//BUTTONS CAROUSEL
      function plusSlide() {
            carousels[carouselindex].classList.remove("carousel-active");
            if (carouselindex == carousels.length - 1) {
                  carouselindex = 0;
            } else {
                  carouselindex++;
            }
            carousels[carouselindex].classList.add("carousel-active");
            clearInterval(intervalId);
    
}
      function minusSlide() {
            carousels[carouselindex].classList.remove("carousel-active");
            if (carouselindex == 0) {
                  carouselindex = carousels.length - 1;
            } else {
                  carouselindex--;
            }
            carousels[carouselindex].classList.add("carousel-active");
            clearInterval(intervalId);
          
      }