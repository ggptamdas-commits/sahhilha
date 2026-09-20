/**
 * SAHHILHA (سهّلها) - Platform Configuration
 * Central configuration for site settings, categories, and registered tools.
 */

const CONFIG = {
  siteUrl: "https://sahhilha.pages.dev",
  siteNameAr: "سهّلها",
  siteNameEn: "Sahhilha",
  taglineAr: "أدوات مجانية تجعل حياتك أسهل",
  taglineEn: "Free tools that make your life easier",
  description: "منصة عربية تجمع أدوات رقمية عملية ومجانية للمستخدمين والأنشطة التجارية في العالم العربي: حاسبات متخصصة، أدوات اللغة العربية، أدوات المطاعم، ومولدات رموز QR.",
  currentYear: 2026,

  googleAnalyticsId: "",
  searchConsoleVerification: "",

  enableFavorites: true,
  enableRecentTools: true,
  enableDarkMode: true,
  enableAdSlots: false
};

const CATEGORIES = [
  {
    id: "saudi",
    nameAr: "أدوات السعودية",
    nameEn: "Saudi Tools",
    description: "حاسبات وأنظمة متعلقة بنظام العمل والخدمات في المملكة العربية السعودية.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    badge: "متاح"
  },
  {
    id: "calculators",
    nameAr: "الحاسبات",
    nameEn: "Calculators",
    description: "حاسبات مالية ورقمية وإحصائية دقيقة لمختلف الاستخدامات اليومية والمهنية.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
    badge: "متاح"
  },
  {
    id: "arabic",
    nameAr: "أدوات اللغة العربية",
    nameEn: "Arabic Tools",
    description: "معالجة النصوص العربية، تحويل الأرقام لكلمات، وتنسيق الأوامر للذكاء الاصطناعي.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>`,
    badge: "متاح"
  },
  {
    id: "restaurant",
    nameAr: "أدوات المطاعم",
    nameEn: "Restaurant Tools",
    description: "حاسبات هندسة قوائم الطعام، تسعير الأطباق، ومراقبة نسب تكلفة المنتجات الغذائية.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    badge: "متاح"
  },
  {
    id: "business",
    nameAr: "أدوات الأعمال",
    nameEn: "Business Tools",
    description: "أدوات مساعدة لرواد الأعمال، العاملين المستقلين، وإدارة الحسابات المبسطة.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    badge: "متاح"
  },
  {
    id: "qr",
    nameAr: "أدوات QR",
    nameEn: "QR Codes",
    description: "مولدات كود QR متطورة ومطابقة للمواصفات والأنظمة المعتمدة مع إمكانية التحميل المباشر.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    badge: "متاح"
  }
];

const TOOLS = [
  {
    id: "zatca-invoice-generator",
    nameAr: "صانع الفاتورة الضريبية المبسطة (زاتكا - Zatca)",
    nameEn: "ZATCA Simplified Tax Invoice Maker",
    category: "saudi",
    description: "إنشاء وطباعة فواتير ضريبية مبسطة معتمدة فورياً بصيغة كاشير حرارية 80mm أو A4 مع رمز QR وتفقيط عربي.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    url: "/ar/tools/zatca-invoice-generator.html",
    status: "active",
    featured: true,
    tags: ["فاتورة", "ضريبة", "زاتكا", "zatca", "كاشير", "طباعة", "qr"]
  },
  {
    id: "end-of-service-calculator",
    nameAr: "حاسبة مكافأة نهاية الخدمة",
    nameEn: "End of Service Reward Calculator",
    category: "saudi",
    description: "حساب مستحقات ومكافأة نهاية الخدمة بدقة وفقاً للمادتين 84 و 85 من نظام العمل والعمال السعودي.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>`,
    url: "/ar/tools/end-of-service-calculator.html",
    status: "active",
    featured: true,
    tags: ["نهاية الخدمة", "نظام العمل", "السعودية", "مكافأة", "حاسبة العمل"]
  },
  {
    id: "zatca-qr-generator",
    nameAr: "مولد باركود الفاتورة الإلكترونية (زاتكا - Zatca)",
    nameEn: "ZATCA e-Invoice QR Code Generator",
    category: "qr",
    description: "توليد كود QR للفواتير الضريبية المبسطة بتشفير TLV Base64 المعتمد لهيئة الزكاة محلياً.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    url: "/ar/tools/zatca-qr-generator.html",
    status: "active",
    featured: true,
    tags: ["zatca", "فاتورة", "qr", "الضريبة", "تشفير"]
  },
  {
    id: "menu-engineering-calculator",
    nameAr: "حاسبة هندسة المنيو والمطاعم",
    nameEn: "Menu Engineering Matrix Calculator",
    category: "restaurant",
    description: "تحليل مصفوفة مبيعات المنيو (نجوم، أحصنة، ألغاز، كلاب) وتحديد ربحية وشعبية كل صنف بدقة.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    url: "/ar/tools/menu-engineering-calculator.html",
    status: "active",
    featured: true,
    tags: ["منيو", "مطاعم", "أرباح", "تسعير", "تكلفة"]
  },
  {
    id: "tafqeet-converter",
    nameAr: "أداة تفقيط المبالغ والأرقام",
    nameEn: "Arabic Number & Currency To Words Converter",
    category: "arabic",
    description: "تحويل الأرقام والمبالغ المالية إلى كلمات ونصوص عربية مضبوطة لغوياً للشيكات والعقود والفواتير.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>`,
    url: "/ar/tools/tafqeet-converter.html",
    status: "active",
    featured: true,
    tags: ["تفقيط", "أرقام", "شيكات", "ريال", "عقود", "تحويل"]
  },
  {
    id: "arabic-prompt-formatter",
    nameAr: "مُنسّق البرومبت والنصوص للذكاء الاصطناعي",
    nameEn: "Arabic Prompt & Text Formatter for AI",
    category: "arabic",
    description: "تنسيق وتنظيف النصوص والبرومبت العربي بدقة للنماذج التوليدية (ChatGPT, Claude, Gemini).",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    url: "/ar/tools/arabic-prompt-formatter.html",
    status: "active",
    featured: true,
    tags: ["برومبت", "ذكاء اصطناعي", "تنظيف", "نصوص", "تشكيل"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, CATEGORIES, TOOLS };
}
