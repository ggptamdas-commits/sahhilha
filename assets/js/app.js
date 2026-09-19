/**
 * SAHHILHA (سهّلها) - Homepage Application Controller
 * Handles Tool Card rendering, Search Chips, and Interactive Components.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toolsContainer = document.getElementById('tools-container');
  const searchInput = document.getElementById('search-input');
  const searchForm = document.getElementById('search-form');
  const searchChips = document.querySelectorAll('.search-chip');
  const categoriesContainer = document.getElementById('categories-container');

  // Render Category Cards
  if (categoriesContainer && typeof CATEGORIES !== 'undefined') {
    categoriesContainer.innerHTML = CATEGORIES.map(cat => `
      <div class="category-card" data-category="${cat.id}">
        <div class="category-icon" aria-hidden="true">${cat.icon}</div>
        <div class="category-info">
          <h3 class="category-title">${cat.nameAr}</h3>
          <span class="category-badge">${cat.badge || 'قريباً'}</span>
        </div>
        <div class="category-arrow" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
      </div>
    `).join('');
  }

  // Render Tool Cards
  function renderTools(toolsList) {
    if (!toolsContainer) return;

    if (!toolsList || toolsList.length === 0) {
      toolsContainer.innerHTML = `
        <div class="no-results" role="status">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>لم يتم العثور على نتائج</h3>
          <p>جرّب البحث بكلمة أخرى أو تصفح الأقسام المتاحة.</p>
        </div>
      `;
      return;
    }

    toolsContainer.innerHTML = toolsList.map(tool => {
      const isFav = StorageManager.isFavorite(tool.id);
      const catObj = CATEGORIES.find(c => c.id === tool.category) || {};
      const categoryName = catObj.nameAr || 'عام';

      return `
        <article class="tool-card" data-id="${tool.id}">
          <div class="tool-card-header">
            <div class="tool-icon-wrapper" aria-hidden="true">${tool.icon}</div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="tool-status-badge">${tool.status === 'coming-soon' ? 'قريباً' : 'متاح'}</span>
              <button type="button" class="btn-favorite ${isFav ? 'active' : ''}" data-tool-id="${tool.id}" aria-label="${isFav ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
          </div>
          <h3 class="tool-card-title">${tool.nameAr}</h3>
          <p class="tool-card-desc">${tool.description}</p>
          <div class="tool-card-footer">
            <span class="tool-category-label">${categoryName}</span>
            <button class="btn btn-disabled" disabled aria-disabled="true">
              قريباً
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Wire Favorite buttons
    document.querySelectorAll('.btn-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const toolId = e.currentTarget.getAttribute('data-tool-id');
        const active = StorageManager.toggleFavorite(toolId);
        e.currentTarget.classList.toggle('active', active);
        const svg = e.currentTarget.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', active ? 'currentColor' : 'none');
        }
      });
    });
  }

  // Initial Tool Render (Featured placeholders)
  if (typeof TOOLS !== 'undefined') {
    renderTools(TOOLS);
  }

  // Handle Search Input
  function performSearch() {
    const query = searchInput ? searchInput.value : '';
    const results = SearchEngine.search(query);
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

  // Popular search chips click
  searchChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const term = chip.getAttribute('data-search') || chip.textContent.trim();
      if (searchInput) {
        searchInput.value = term;
        performSearch();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        searchInput.focus();
      }
    });
  });
});
