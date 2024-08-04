const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function()   
 {
  if (sidebar.style.right === "-250px") {
    sidebar.style.right = "0";
  } else {
    sidebar.style.right = "-250px";
  }
});


const carouselItems = document.querySelector('.carousel-items');
let currentItem = 0;
const itemWidth = carouselItems.children[0].offsetWidth;
let isSlidingRight = true; // Arah awal slide ke kanan

function slideCarousel() {
    if (isSlidingRight) {
        currentItem++;
        if (currentItem >= carouselItems.children.length) {
            currentItem = 0; // Reset ke item pertama jika mencapai akhir
        }
    } else {
        currentItem--;
        if (currentItem < 0) {
            currentItem = carouselItems.children.length - 1; // Reset ke item terakhir jika mencapai awal
        }
    }

    carouselItems.style.transform = `translateX(-${currentItem * itemWidth}px)`;

    // Setelah slide, balik arah
    isSlidingRight = !isSlidingRight; 
}

setInterval(slideCarousel, 3000); // Slide setiap 5 detik

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-comp');
  const totalSlides = slides.length;

  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');

  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
}



