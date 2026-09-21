/**
 * SAHHILHA (سهّلها) - Search Engine
 * Arabic-aware client-side search engine.
 * Handles text normalization (Tashkeel, Tatweel, Hamzas, Taa Marbuta, Alef Maksura).
 */

const SearchEngine = (() => {
  /**
   * Normalize Arabic text for robust fuzzy search
   */
  const normalizeArabic = (text) => {
    if (!text || typeof text !== "string") return "";

    return text
      // Normalize to lowercase for English
      .toLowerCase()
      // Remove Arabic diacritics (Tashkeel)
      .replace(/[\u064B-\u065F\u0670]/g, "")
      // Remove Arabic Tatweel (Kashida)
      .replace(/\u0640/g, "")
      // Normalize Hamza and Alef variants to bare Alef
      .replace(/[إأآٱ]/g, "ا")
      // Normalize Alef Maksura to Ya
      .replace(/ى/g, "ي")
      // Normalize Taa Marbuta to Haa
      .replace(/ة/g, "ه")
      // Normalize variant forms of Kaf and Ya
      .replace(/ك/g, "ك")
      .replace(/ی/g, "ي")
      // Clean multiple whitespace
      .replace(/\s+/g, " ")
      .trim();
  };

  /**
   * Search through tool list
   * Supports both signatures:
   *   search(query, tools, categoryFilter)
   *   search(query, categoryFilter)
   * @param {string} query - Raw search query
   * @param {Array|string} tools - Array of tool objects or categoryFilter if omitted
   * @param {string} categoryFilter - Optional category id to scope results
   * @returns {Array} Filtered and ranked array of tool objects
   */
  const search = (query, tools, categoryFilter = "all") => {
    // Polymorphic signature check
    if (typeof tools === "string" || tools === null || tools === undefined) {
      categoryFilter = tools || "all";
      tools = (typeof TOOLS !== "undefined" && Array.isArray(TOOLS)) ? TOOLS : [];
    } else if (!Array.isArray(tools)) {
      tools = (typeof TOOLS !== "undefined" && Array.isArray(TOOLS)) ? TOOLS : [];
    }

    let pool = tools;
    if (categoryFilter && categoryFilter !== "all") {
      pool = tools.filter(tool => tool.category === categoryFilter);
    }

    const cleanQuery = normalizeArabic(query);
    if (!cleanQuery) {
      return pool;
    }

    const queryTokens = cleanQuery.split(" ").filter(t => t.length > 0);

    const scored = pool.map(tool => {
      let score = 0;
      const normNameAr = normalizeArabic(tool.nameAr);
      const normNameEn = (tool.nameEn || "").toLowerCase();
      const normDesc = normalizeArabic(tool.description);
      const normKeywords = (tool.keywords || []).map(k => normalizeArabic(k));
      const normCategory = normalizeArabic(tool.category);

      // Check for exact full phrase match in name
      if (normNameAr.includes(cleanQuery) || normNameEn.includes(cleanQuery)) {
        score += 100;
      }

      // Check query tokens
      for (const token of queryTokens) {
        if (normNameAr.includes(token)) score += 40;
        if (normNameEn.includes(token)) score += 30;

        // Keywords match
        for (const kw of normKeywords) {
          if (kw.includes(token)) {
            score += 25;
            if (kw === token) score += 20; // Exact keyword hit
          }
        }

        // Description match
        if (normDesc.includes(token)) score += 10;

        // Category match
        if (normCategory.includes(token)) score += 15;
      }

      return { tool, score };
    });

    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.tool);
  };

  return {
    normalizeArabic,
    search
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SearchEngine;
}