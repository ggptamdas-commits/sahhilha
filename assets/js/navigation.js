/**
 * SAHHILHA (سهّلها) - Navigation & Menu Interaction
 * Manages Mobile Drawer, Bottom Bar, and Accessibility Controls.
 */

const NavigationManager = {
  init() {
    this.bindDrawerEvents();
    this.bindThemeToggle();
    this.highlightActivePage();
  },

  bindDrawerEvents() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    if (!drawer || !backdrop) return;

    const openDrawer = () => {
      drawer.classList.add('open');
      backdrop.classList.add('visible');
      drawer.setAttribute('aria-hidden', 'false');
      hamburgerBtn && hamburgerBtn.setAttribute('aria-expanded', 'true');
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      backdrop.classList.remove('visible');
      drawer.setAttribute('aria-hidden', 'true');
      hamburgerBtn && hamburgerBtn.setAttribute('aria-expanded', 'false');
    };

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', openDrawer);
    }

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeDrawer);
    }

    backdrop.addEventListener('click', closeDrawer);

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  },

  bindThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const themeBtnDrawer = document.getElementById('theme-toggle-drawer');

    const handleToggle = () => {
      StorageManager.toggleTheme();
    };

    if (themeBtn) {
      themeBtn.addEventListener('click', handleToggle);
    }
    if (themeBtnDrawer) {
      themeBtnDrawer.addEventListener('click', handleToggle);
    }
  },

  highlightActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link, .bottom-nav-item');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      if (href === '/' || href === '/index.html') {
        if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      } else if (currentPath.includes(href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  NavigationManager.init();
});
