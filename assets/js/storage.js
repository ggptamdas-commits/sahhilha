/**
 * SAHHILHA (سهّلها) - Local Storage & Preferences Manager
 * Handles Dark Mode, User Favorites, and Recently Used Tools.
 */

const StorageManager = {
  KEYS: {
    THEME: 'sahhilha_theme',
    FAVORITES: 'sahhilha_favorites',
    RECENT: 'sahhilha_recent_tools'
  },

  // Theme Management
  initTheme() {
    const savedTheme = localStorage.getItem(this.KEYS.THEME);
    if (savedTheme) {
      this.applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.applyTheme('dark');
    } else {
      this.applyTheme('light');
    }
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.KEYS.THEME, theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن');
    }
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    return newTheme;
  },

  // Favorites Management
  getFavorites() {
    try {
      const items = localStorage.getItem(this.KEYS.FAVORITES);
      return items ? JSON.parse(items) : [];
    } catch (e) {
      console.warn('Could not read favorites from localStorage:', e);
      return [];
    }
  },

  isFavorite(toolId) {
    const favs = this.getFavorites();
    return favs.includes(toolId);
  },

  toggleFavorite(toolId) {
    let favs = this.getFavorites();
    if (favs.includes(toolId)) {
      favs = favs.filter(id => id !== toolId);
    } else {
      favs.push(toolId);
    }
    try {
      localStorage.setItem(this.KEYS.FAVORITES, JSON.stringify(favs));
    } catch (e) {
      console.warn('Could not save favorites to localStorage:', e);
    }
    return favs.includes(toolId);
  },

  // Recently Used Tools
  getRecentTools() {
    try {
      const items = localStorage.getItem(this.KEYS.RECENT);
      return items ? JSON.parse(items) : [];
    } catch (e) {
      return [];
    }
  },

  addRecentTool(toolId) {
    let recents = this.getRecentTools();
    recents = recents.filter(id => id !== toolId);
    recents.unshift(toolId);
    if (recents.length > 8) {
      recents = recents.slice(0, 8);
    }
    try {
      localStorage.setItem(this.KEYS.RECENT, JSON.stringify(recents));
    } catch (e) {
      console.warn('Could not save recents to localStorage:', e);
    }
  }
};

// Initialize theme immediately to avoid flash of unstyled theme
StorageManager.initTheme();
