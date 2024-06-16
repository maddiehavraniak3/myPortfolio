document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      
      // Only prevent default if the target exists within the same page
      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
