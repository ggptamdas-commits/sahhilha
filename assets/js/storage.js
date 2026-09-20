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
    return get(KEYS.THEME, null);
  };

  const setTheme = (theme) => {
    return set(KEYS.THEME, theme);
  };

  const applyTheme = (theme) => {
    const saved = theme || getTheme();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const active = saved || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', active);

    const icons = {
      dark: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
      light: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    };

    const btns = document.querySelectorAll('#theme-toggle-btn, #theme-toggle-drawer, .theme-toggle');
    btns.forEach(btn => {
      btn.innerHTML = icons[active] || icons.light;
      btn.setAttribute('aria-label', active === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن');
    });

    return active;
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || getTheme() || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    if (window.App && window.App.showToast) {
      window.App.showToast(next === 'dark' ? 'تم تفعيل الوضع الداكن' : 'تم تفعيل الوضع الفاتح', 'info', 2000);
    }
    return next;
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
