// Theme Dropdown
document.addEventListener('DOMContentLoaded', () => {
    const autoOption = document.getElementById('auto-option');
    const lightOption = document.getElementById('light-option');
    const darkOption = document.getElementById('dark-option');
    const selectedThemeIcon = document.getElementById('selected-theme-icon');

    
    // Function to set theme
    function setTheme(theme, iconClass) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
        selectedThemeIcon.className = iconClass;

        // Apply system theme preference if theme is "auto"
        if (theme === 'auto') {
            applySystemTheme();
        }
    }

    // Function to apply system theme preference
    function applySystemTheme() {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }

    // Event listeners for option clicks
    autoOption.addEventListener('click', () => setTheme('auto', 'fas fa-adjust'));
    lightOption.addEventListener('click', () => setTheme('light', 'fas fa-sun'));
    darkOption.addEventListener('click', () => setTheme('dark', 'fas fa-moon'));

    // Load saved theme from localStorage or set default theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        switch(savedTheme) {
            case 'light':
                setTheme('light', 'fas fa-sun');
                break;
            case 'dark':
                setTheme('dark', 'fas fa-moon');
                break;
            default:
                setTheme('auto', 'fas fa-adjust');
        }
    } else {
        setTheme('auto', 'fas fa-adjust');
    }

    // Add a listener to update the theme if the system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (document.body.className === 'auto') {
            applySystemTheme();
        }
    });
});


// Navbar Mobile
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// Slider
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

