const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const closeBtn = lightbox.querySelector(".close");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");

let currentImages = [];
let currentIndex = 0;


const imageLinks = document.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"]');
currentImages = Array.from(imageLinks);

imageLinks.forEach((link, index) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    currentIndex = currentImages.indexOf(link);
    showImage(currentImages[currentIndex].href);
  });
});

function showImage(src) {
  lightboxImg.src = src;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden"; // 
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = ""; 
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage(currentImages[currentIndex].href);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentImages[currentIndex].href);
}


closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);


lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

document.querySelectorAll('.lightbox-trigger').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    lightbox.style.display = 'block';
    lightboxImg.src = link.href;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


document.querySelectorAll('.paypal-btn').forEach(e => {
    e.addEventListener('click', function(event) {
        event.stopPropagation();
      });
})