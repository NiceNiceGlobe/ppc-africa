/* -------------------------------------------------------------
   PPC Africa Replica – script.js
   Built for Bootstrap 5.3.3 + AOS 2.3.4
-------------------------------------------------------------- */

// Initialise Animate On Scroll
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 80,
  });
});

// Navbar colour / shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("shadow-sm");
  } else {
    nav.classList.remove("shadow-sm");
  }
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Floating sidebar behaviour (optional future logic)
const sidebarLinks = document.querySelectorAll(".floating-sidebar a");
sidebarLinks.forEach(link => {
  link.addEventListener("mouseenter", () => link.classList.add("active"));
  link.addEventListener("mouseleave", () => link.classList.remove("active"));
});

// Console confirmation
console.log("✅ PPC Africa responsive demo loaded successfully.");