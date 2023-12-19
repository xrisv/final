const slider = document.getElementById('slider');
  const slides = document.getElementById('slides');

  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % 3; // 3 is the number of slides
    const transformValue = -currentIndex * 100 + '%';
    slides.style.transform = `translateX(${transformValue})`;
  }, 5000);
  let currentSlide = 0;

  function showSlide() {
    const slides = document.getElementById("slides");
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    showSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    showSlide();