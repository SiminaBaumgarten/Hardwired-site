$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    // prevArrow: $(".prev"),
    // nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

//Open the Modal
function openModal() {
  document.getElementById("myModal").classList.remove("d-none");
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").classList.add("d-none");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("d-none");
  }

  slides[slideIndex - 1].classList.remove("d-none");
}

//full screen
let elem = document.querySelector("#myModal");
let imgContainer = document.querySelectorAll(".lightbox-img-container");
let txt = document.querySelectorAll(".info-txt");
let imgLightbox = document.querySelectorAll(".lightbox-img");
let fullScreenBtn = document.getElementById("fullScreenBtn");
let exitFullScreenBtn = document.getElementById("exitFullScreenBtn");
document.getElementById("close").addEventListener("click", closeFullScreen);

function fullScreen() {
  fullScreenBtn.classList.add("d-none");
  exitFullScreenBtn.classList.remove("d-none");
  for (i = 0; i < txt.length; i++) {
    txt[i].classList.add("d-none");
    imgLightbox[i].classList.add("vh-100");
    imgContainer[i].classList.add("w-100");
  }
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function closeFullScreen() {
  fullScreenBtn.classList.remove("d-none");
  exitFullScreenBtn.classList.add("d-none");
  for (i = 0; i < txt.length; i++) {
    txt[i].classList.remove("d-none");
    imgLightbox[i].classList.remove("vh-100");
    imgContainer[i].classList.remove("w-100");
  }
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
