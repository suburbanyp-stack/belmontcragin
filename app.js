/**
 * BelmontCragin.com Frontend Logic
 * Interactive enhancements, scroll behavior, dynamic resource search, and mobile navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Header Scroll Effect ---
  const header = document.getElementById('main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  // Initial check on load
  handleScroll();

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate burger menu
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('open'));
    });

    // Automatically close menu when a navigation link or button is clicked (excluding dropdown toggles)
    const navLinks = navMenu.querySelectorAll('a:not(.dropdown-toggle)');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('open'));
      });
    });
  }

  // --- Dropdown Menu Toggle (Mobile & Desktop Click Support) ---
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentDropdown = toggle.closest('.dropdown');
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      parentDropdown.classList.toggle('active');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close dropdown when moving mouse off the component (and open on hover)
  const dropdownElements = document.querySelectorAll('.dropdown');
  dropdownElements.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.add('active');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('active');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Dynamic Search / Filter for Community Resource Directory ---
  const searchInput = document.getElementById('directory-search');
  const cards = document.querySelectorAll('.grid .card');
  const countIndicator = document.getElementById('results-count');

  if (searchInput && cards.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      let matchCount = 0;

      cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-desc').textContent.toLowerCase();
        
        if (title.includes(query) || description.includes(query)) {
          card.style.display = '';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          matchCount++;
        } else {
          // Soft fade out
          card.style.opacity = '0';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 200);
        }
      });

      // Update match count indicator if it exists
      if (countIndicator) {
        if (query === '') {
          countIndicator.textContent = '';
        } else {
          countIndicator.textContent = `Found ${matchCount} matching resource${matchCount === 1 ? '' : 's'}`;
        }
      }
    });
  }

  // Add micro-animation styling helper for hamburger button
  const style = document.createElement('style');
  style.innerHTML = `
    .menu-toggle span.open:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    .menu-toggle span.open:nth-child(2) {
      opacity: 0;
    }
    .menu-toggle span.open:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  `;
  document.head.appendChild(style);
});
