// Wait for the whole page to load
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  // Add a small delay for smooth transition (optional)
  setTimeout(() => {
    loadingScreen.style.display = "none";  // Hide loading screen
    mainContent.style.display = "block";   // Show main content
  }, 1500); // 1.5 seconds
});
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetPage = link.textContent.trim().toLowerCase();

    // Remove active from all nav links and pages
    navLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // Add active to clicked nav link
    link.classList.add("active");

    // Show only the matching section
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      }
    });
  });
});
const cursor=document.querySelector(".trail-cursor");
window.addEventListener("mousemove",(e) =>{
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
let mouseX =0,mouseY=0;
let cursorX = 0,cursorY=0;
window.addEventListener("mousemove",(e) =>{
  mouseX =e.clientX;
  mouseY=e.clientY;
});
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  cursor.style.transform = `translate(${cursorX - 8}px, ${cursorY - 8}px)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();