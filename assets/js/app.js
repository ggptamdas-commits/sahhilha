/**
 * SAHHILHA (سهّلها) - Homepage Application Controller
 * Handles Tool Card rendering, Search Chips, Category Filtering, URL Hash, and Favorites.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toolsContainer = document.getElementById('tools-container');
  const searchInput = document.getElementById('search-input');
  const searchForm = document.getElementById('search-form');
  const searchChips = document.querySelectorAll('.search-chip');
  const noResultsEl = document.getElementById('no-results-message');

  let activeCategory = null;

  // Global Reset Function for Fallback button
  window.resetSearch = function() {
    if (searchInput) searchInput.value = '';
    activeCategory = null;
    const filterBtns = document.querySelectorAll('.btn-filter');
    filterBtns.forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.btn-filter[data-filter="all"]');
    if (allBtn) allBtn.classList.add('active');
    if (noResultsEl) noResultsEl.style.display = 'none';
    if (typeof TOOLS !== 'undefined') {
      renderTools(TOOLS);
    }
  };

  // Handle Filter Buttons (.btn-filter)
  const filterBtns = document.querySelectorAll('.btn-filter');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      activeCategory = (filter === 'all' || !filter) ? null : filter;
      performSearch();
    });
  });

  // URL Hash Handler (e.g. #saudi, #calculators, #arabic, #restaurant)
  function handleUrlHash() {
    const hash = (window.location.hash || '').replace('#', '').trim();
    if (!hash) return;
    const matchingBtn = document.querySelector(`.btn-filter[data-filter="${hash}"]`);
    if (matchingBtn) {
      matchingBtn.click();
    }
  }
  handleUrlHash();
  window.addEventListener('hashchange', handleUrlHash);

  // Render Tool Cards
  function renderTools(toolsList) {
    if (!toolsContainer) return;

    if (!toolsList || toolsList.length === 0) {
      toolsContainer.innerHTML = '';
      if (noResultsEl) {
        noResultsEl.style.display = 'block';
      } else {
        toolsContainer.innerHTML = `
          <div class="no-results" role="status" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin:0 auto 1rem; color:var(--text-muted);">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <h3 style="font-size:1.25rem; margin-bottom:0.5rem; color:var(--text);">لم يتم العثور على أدوات مطابقة</h3>
            <p style="color:var(--text-muted); margin-bottom:1.5rem;">جرّب البحث بكلمة أخرى أو تصفح التصنيفات في الأعلى.</p>
            <button type="button" class="btn btn-secondary" onclick="resetSearch()" style="padding:0.5rem 1.25rem;">عرض جميع الأدوات</button>
          </div>
        `;
      }
      return;
    }

    if (noResultsEl) {
      noResultsEl.style.display = 'none';
    }

    toolsContainer.innerHTML = toolsList.map(tool => {
      const isFav = typeof StorageManager !== 'undefined' && StorageManager.isFavorite(tool.id);
      const catObj = (typeof CATEGORIES !== 'undefined' && CATEGORIES.find(c => c.id === tool.category)) || {};
      const categoryName = catObj.nameAr || 'عام';
      const isActive = tool.status === 'active';

      return `
        <article class="tool-card" data-id="${tool.id}">
          <div class="tool-card-header">
            <div class="tool-icon-wrapper" aria-hidden="true">${tool.icon}</div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="tool-status-badge" style="${isActive ? 'background-color:var(--primary-light); color:var(--primary); font-weight:700;' : ''}">${isActive ? 'متاح الآن' : 'قريباً'}</span>
              <button type="button" class="btn-favorite ${isFav ? 'active' : ''}" data-tool-id="${tool.id}" aria-label="${isFav ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
          </div>
          <h3 class="tool-card-title"><a href="${tool.url}" style="color:inherit; text-decoration:none;">${tool.nameAr}</a></h3>
          <p class="tool-card-desc">${tool.description}</p>
          <div class="tool-card-footer">
            <span class="tool-category-label">${categoryName}</span>
            ${isActive ? 
              `<a href="${tool.url}" class="btn btn-primary" style="padding:0.45rem 1.15rem; font-size:0.875rem;">استخدم الأداة</a>` :
              `<button class="btn btn-disabled" disabled aria-disabled="true">قريباً</button>`
            }
          </div>
        </article>
      `;
    }).join('');

    // Wire Favorite buttons
    document.querySelectorAll('.btn-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const toolId = e.currentTarget.getAttribute('data-tool-id');
        if (typeof StorageManager !== 'undefined') {
          const active = StorageManager.toggleFavorite(toolId);
          e.currentTarget.classList.toggle('active', active);
          const svg = e.currentTarget.querySelector('svg');
          if (svg) {
            svg.setAttribute('fill', active ? 'currentColor' : 'none');
          }
          if (window.App && window.App.showToast) {
            window.App.showToast(active ? 'تمت إضافة الأداة إلى المفضلة' : 'تمت إزالة الأداة من المفضلة', 'info');
          }
        }
      });
    });
  }

  // Initial Tool Render
  if (typeof TOOLS !== 'undefined') {
    renderTools(TOOLS);
  }

  // Handle Search & Filter Input
  function performSearch() {
    const query = searchInput ? searchInput.value : '';
    let results = [];
    const pool = (typeof TOOLS !== 'undefined' && Array.isArray(TOOLS)) ? TOOLS : [];
    if (typeof SearchEngine !== 'undefined') {
      results = SearchEngine.search(query, pool, activeCategory);
    } else {
      results = pool;
    }
    renderTools(results);
  }

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      performSearch();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      performSearch();
    });
  }

  // Popular search chips click (support data-query, data-search, or text)
  searchChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const term = chip.getAttribute('data-query') || chip.getAttribute('data-search') || chip.textContent.trim();
      if (searchInput) {
        searchInput.value = term;
        performSearch();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        searchInput.focus();
      }
    });
  });
});