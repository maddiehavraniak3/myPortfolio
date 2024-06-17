document.addEventListener("DOMContentLoaded", () => {
    const educationItems = document.querySelectorAll(".timeline-item");
    const options = {
      root: null,
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    educationItems.forEach(item => {
      observer.observe(item);
    });
  });
  