AOS.init();
const animasi = document.querySelectorAll(".about");

animasi.forEach((animasinya,i) => {
  animasinya.dataset.aos = "fade-up";
  animasinya.dataset.aosOnce = "true";
});
