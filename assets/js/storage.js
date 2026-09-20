/**
 * SAHHILHA (سهّلها) - Storage Module
 * Safe local storage wrapper for theme, favorites, and recent tools.
 * Handles storage quotas, incognito mode restrictions, and JSON parsing gracefully.
 */

const StorageManager = (() => {
  const KEYS = {
    THEME: "sahhilha_theme",
    FAVORITES: "sahhilha_favorites",
    RECENTS: "sahhilha_recent_tools"
  };

  const isAvailable = () => {
    try {
      const test = "__test__";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  const get = (key, fallback = null) => {
    if (!isAvailable()) return fallback;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (e) {
      console.warn("StorageManager read error:", e);
      return fallback;
    }
  };

  const set = (key, value) => {
    if (!isAvailable()) return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn("StorageManager write error:", e);
      return false;
    }
  };

  const getTheme = () => {
    return 'dark';
  };

  const setTheme = () => {
    return set(KEYS.THEME, 'dark');
  };

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.style.colorScheme = 'dark';

    const btns = document.querySelectorAll('#theme-toggle-btn, #theme-toggle-drawer, .theme-toggle');
    btns.forEach(btn => {
      btn.style.display = 'none';
    });

    return 'dark';
  };

  const toggleTheme = () => {
    return applyTheme();
  };

  const getFavorites = () => {
    return get(KEYS.FAVORITES, []);
  };

  const isFavorite = (toolId) => {
    const favorites = getFavorites();
    return favorites.includes(toolId);
  };

  const toggleFavorite = (toolId) => {
    const favorites = getFavorites();
    const index = favorites.indexOf(toolId);
    let newState = false;
    if (index > -1) {
      favorites.splice(index, 1);
      newState = false;
    } else {
      favorites.push(toolId);
      newState = true;
    }
    set(KEYS.FAVORITES, favorites);
    return newState;
  };

  const getRecentTools = () => {
    return get(KEYS.RECENTS, []);
  };

  const addRecentTool = (toolId) => {
    if (!toolId) return;
    let recents = getRecentTools();
    recents = recents.filter(id => id !== toolId);
    recents.unshift(toolId);
    if (recents.length > 6) {
      recents = recents.slice(0, 6);
    }
    set(KEYS.RECENTS, recents);
  };

  const clearRecentTools = () => {
    set(KEYS.RECENTS, []);
  };

  // Auto apply theme on script load
  applyTheme();

  return {
    getTheme,
    setTheme,
    applyTheme,
    toggleTheme,
    getFavorites,
    isFavorite,
    toggleFavorite,
    getRecentTools,
    addRecentTool,
    clearRecentTools
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = StorageManager;
}