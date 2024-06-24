// Initialize particles.js
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#A239CA", "#4717F6", "#E7DFDD"] // Array of colors from the palette
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#E7DFDD", // Light color for line links
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Add preloader functionality
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const particlesJs = document.getElementById('particles-js');
  const navbar = document.querySelector('.navbar');
  const welcomeMessage = document.querySelector('.welcome-message');

  // Set the opacity to 1 initially
  preloader.style.opacity = '1';

  // Increase the duration here (e.g., 3000 milliseconds for 3 seconds)
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
      preloader.style.display = 'none';
      particlesJs.style.display = 'block';
      navbar.style.display = 'flex'; // Ensure the navbar is flex
      welcomeMessage.style.display = 'block';
    }, 500); // Match the timeout duration to the CSS transition duration
  }, 1000); // Adjust this value to make the loading animation longer
});

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
  const cardInner = document.getElementById('cardInner');
  const backButton = document.getElementById('backButton');

  cardInner.addEventListener('click', function () {
    cardInner.classList.add('flip');
  });

  backButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the card from flipping again
    cardInner.classList.remove('flip');
  });
});
