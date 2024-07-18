document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const dropdownContent = document.querySelector(".dropdown-content");

  menuIcon.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
    if (dropdownContent.classList.contains("show")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-caret-down");
      menuIcon.style.transform = "rotate(360deg)";
      menuIcon.style.opacity = "1"; 
    } else {
      menuIcon.classList.remove("fa-caret-down");
      menuIcon.classList.add("fa-bars");
      menuIcon.style.transform = "rotate(0deg)";
      menuIcon.style.opacity = "1";
    }
  });
});
