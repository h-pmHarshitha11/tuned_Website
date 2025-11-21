document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarPlaceholder.innerHTML = data;
        // Set the active link based on the current page
        const currentPage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // You can style this 'active' class in your CSS
          }
        });
      });
  }
});
