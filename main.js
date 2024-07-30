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

