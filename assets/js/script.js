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
// DOM Ready: Navbar + Cursor
// ===========================
window.addEventListener("DOMContentLoaded", () => {
  // ===========================
  // Navbar Page Switching
  // ===========================
 const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.getAttribute("data-target").trim();

    // remove active from everything
    navLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // activate clicked link
    link.classList.add("active");

    // show matched page
    const pageToShow = document.querySelector(`article[data-page="${targetPage}"]`);
    if (pageToShow) {
      pageToShow.classList.add("active");
    } else {
      console.error(`❌ No article found for data-page="${targetPage}"`);
    }
  });
});

  // ===========================
  // Magic Cursor
  // ===========================
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

  // remove default hand cursor
  document.querySelectorAll("a, button").forEach(el => {
    el.style.cursor = "none";
  });
});

// ===========================
// Click Effect on Cursor
// ===========================
window.addEventListener("click", () => {
  const cursor = document.querySelector(".trail-cursor");
  cursor.classList.add("hover");
  setTimeout(() => cursor.classList.remove("hover"), 150);
});
