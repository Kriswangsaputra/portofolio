function sidebarButton() {
  var sidebarButton = document.getElementById("button-togle");
  var menu = document.getElementById("togle");

  sidebarButton.addEventListener("click", function () {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
}
