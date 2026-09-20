/**
 * SAHHILHA (سهّلها) - Search & Filtering Engine
 * Client-side search and category filtering for tools catalog.
 */

const SearchEngine = {
  /**
   * Search tools by text query and optional category filter.
   * @param {string} query - Free-text search input
   * @param {string} categoryId - Optional category ID filter
   * @returns {Array} Matching tool objects
   */
  search(query, categoryId = null) {
    if (typeof TOOLS === 'undefined' || !Array.isArray(TOOLS)) {
      console.warn('TOOLS registry not loaded.');
      return [];
    }

    const cleanQuery = this.normalizeArabic(query.trim().toLowerCase());

    return TOOLS.filter(tool => {
      // Category matching
      if (categoryId && categoryId !== 'all' && tool.category !== categoryId) {
        return false;
      }

      // Empty query returns all tools in selected category
      if (!cleanQuery) return true;

      // Multi-term token matching (all tokens must match at least one field)
      const tokens = cleanQuery.split(/\s+/).filter(t => t.length > 0);

      const nameArNorm = this.normalizeArabic(tool.nameAr || '');
      const nameEnNorm = (tool.nameEn || '').toLowerCase();
      const descNorm = this.normalizeArabic(tool.description || '');
      const keywordsNorm = (tool.keywords || []).map(k => this.normalizeArabic(k)).join(' ');

      const combinedText = `${nameArNorm} ${nameEnNorm} ${descNorm} ${keywordsNorm}`;

      return tokens.every(token => combinedText.includes(token));
    });
  },

  /**
   * Normalize Arabic text for search matching.
   * Strips tashkeel (diacritics), tatweel (kashida), and normalizes hamzas.
   * @param {string} text 
   * @returns {string} Normalized text
   */
  normalizeArabic(text) {
    if (!text) return '';
    return text
      // Remove diacritics
      .replace(/[\u064B-\u065F\u0670]/g, '')
      // Remove tatweel (kashida)
      .replace(/\u0640/g, '')
      // Normalize alef variants
      .replace(/[إأآ]/g, 'ا')
      // Normalize teh marbuta
      .replace(/ة/g, 'ه')
      // Normalize alif maqsura
      .replace(/ى/g, 'ي')
      .toLowerCase();
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SearchEngine };
}
