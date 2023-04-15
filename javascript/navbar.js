const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle("active");
  });
}


