document.addEventListener("DOMContentLoaded", () => {
  //! Horizontal Scrolling Effect
  /* This Script is for horizontal scrolling override in the container.horizontal-scroll-container */
  const container = document.querySelector(".horizontal-scroll-container");
  let isScrolling = false;

  container.addEventListener("wheel", (event) => {
    if (!isScrolling) {
      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Adjust the duration as needed

      const delta = event.deltaY > 0 ? window.innerWidth : -window.innerWidth;
      container.scrollBy({ left: delta, behavior: "smooth" });
    }

    event.preventDefault();
  });
  //! Horizontal Scrolling Effect
  // This script will load BG music in the DOM
  const audio = new Audio("music/Under-the-Sea-The-Little-Mermaid.mp3");
  audio.loop = true;

  // Play audio when the document is clicked
  document.addEventListener("click", () => {
    audio.play();
  });

  // Autoplay the audio when the document has finished loading
  audio.play();
  //! BG Music Autoplay and Loop
});
