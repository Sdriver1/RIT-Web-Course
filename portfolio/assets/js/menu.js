document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const dropdown = document.querySelector(".dropdown");
  const menuLinks = document.querySelectorAll(".navbar nav a");
  const dropdownContent = document.querySelector(".dropdown-content");

  function updateMenu() {
    if (window.innerWidth <= 1000) {
      menuLinks.forEach((link) => (link.style.display = "none"));
      dropdownContent.innerHTML = `
          <a href="resume">Resume</a>
          <a href="photos">Photo Gallery</a>
          <a href="favorites/movies">Favorite Movie</a>
          <a href="favorites/songs">Favorite Song</a>
        `;
    } else {
      menuLinks.forEach((link) => (link.style.display = "inline-block"));
      dropdownContent.innerHTML = "";
    }
  }

  menuIcon.addEventListener("click", function () {
    dropdown.classList.toggle("show");
    if (dropdown.classList.contains("show")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-caret-down");
    } else {
      menuIcon.classList.remove("fa-caret-down");
      menuIcon.classList.add("fa-bars");
    }
  });

  window.addEventListener("resize", updateMenu);
  updateMenu();
});
