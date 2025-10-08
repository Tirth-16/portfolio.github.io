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
