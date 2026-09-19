/**
 * SAHHILHA (سهّلها) - Search Architecture & Filtering Engine
 * Supports Arabic / English name lookup, category filtering, and keyword indexing.
 */

const SearchEngine = {
  // Normalize Arabic letters for accurate matching
  normalizeArabic(text) {
    if (!text) return '';
    return text
      .trim()
      .toLowerCase()
      .replace(/[إأآا]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/[ًٌٍَُِّْ]/g, ''); // Strip Tashkeel
  },

  search(query, categoryFilter = null) {
    const normalizedQuery = this.normalizeArabic(query);
    if (!normalizedQuery && !categoryFilter) {
      return TOOLS;
    }

    return TOOLS.filter(tool => {
      // Category filter check
      if (categoryFilter && categoryFilter !== 'all' && tool.category !== categoryFilter) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      // Keyword & Text matching
      const matchNameAr = this.normalizeArabic(tool.nameAr).includes(normalizedQuery);
      const matchNameEn = (tool.nameEn || '').toLowerCase().includes(normalizedQuery);
      const matchDesc = this.normalizeArabic(tool.description).includes(normalizedQuery);
      const matchKeywords = (tool.keywords || []).some(k => this.normalizeArabic(k).includes(normalizedQuery));

      return matchNameAr || matchNameEn || matchDesc || matchKeywords;
    });
  }
};
