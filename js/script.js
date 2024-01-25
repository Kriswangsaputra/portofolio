document.addEventListener("DOMContentLoaded", function() {
  const coba = document.querySelectorAll(".aos");
  coba.forEach(function (element) {
    AOS.init();
    element.dataset.aos = "zoom-out-down";
    element.dataset.aosDelay = "100";
    element.dataset.aosDuration = "1000";
  });
});
