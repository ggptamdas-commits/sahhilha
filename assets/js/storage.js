/**
 * SAHHILHA (سهّلها) - User Preferences & Local Storage Manager
 * Handles favorites, recents, and local settings with error resilience.
 */

const StorageManager = {
  STORAGE_KEYS: {
    THEME: 'sahhilha_theme',
    FAVORITES: 'sahhilha_favorites',
    RECENT_TOOLS: 'sahhilha_recent_tools'
  },

  isAvailable() {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  },

  get(key, defaultValue = null) {
    if (!this.isAvailable()) return defaultValue;
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn(`Error reading from localStorage [${key}]:`, e);
      return defaultValue;
    }
  },

  set(key, value) {
    if (!this.isAvailable()) return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn(`Error writing to localStorage [${key}]:`, e);
      return false;
    }
  },

  getFavorites() {
    return this.get(this.STORAGE_KEYS.FAVORITES, []);
  },

  isFavorite(toolId) {
    const favorites = this.getFavorites();
    return favorites.includes(toolId);
  },

  toggleFavorite(toolId) {
    let favorites = this.getFavorites();
    const index = favorites.indexOf(toolId);
    let isNowFavorite = false;

    if (index > -1) {
      favorites.splice(index, 1);
      isNowFavorite = false;
    } else {
      favorites.push(toolId);
      isNowFavorite = true;
    }

    this.set(this.STORAGE_KEYS.FAVORITES, favorites);
    return isNowFavorite;
  },

  addRecentTool(toolId) {
    if (!toolId) return;
    let recents = this.get(this.STORAGE_KEYS.RECENT_TOOLS, []);
    recents = recents.filter(id => id !== toolId);
    recents.unshift(toolId);
    // Keep top 6
    if (recents.length > 6) recents = recents.slice(0, 6);
    this.set(this.STORAGE_KEYS.RECENT_TOOLS, recents);
  },

  getRecentTools() {
    return this.get(this.STORAGE_KEYS.RECENT_TOOLS, []);
  },

  getTheme() {
    if (!this.isAvailable()) return 'light';
    return localStorage.getItem(this.STORAGE_KEYS.THEME) || 'light';
  },

  setTheme(theme) {
    if (!this.isAvailable()) return;
    localStorage.setItem(this.STORAGE_KEYS.THEME, theme);
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StorageManager };
}
