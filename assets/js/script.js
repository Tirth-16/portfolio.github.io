// ===========================
// Loading Screen
// ===========================
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 1500);
});

// ===========================
// Navbar Page Switching
// ===========================
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.textContent.trim().toLowerCase();

    navLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    link.classList.add("active");

    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      }
    });
  });
});

// ===========================
// Magic Cursor
// ===========================
window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".trail-cursor");
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate(${cursorX - 8}px, ${cursorY - 8}px)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
});
window.addEventListener("click", () => {
  const cursor = document.querySelector(".trail-cursor");
  cursor.classList.add("hover");
  setTimeout(() => cursor.classList.remove("hover"), 150);
});

