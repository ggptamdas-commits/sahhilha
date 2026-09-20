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
    description: "حاسبات مالية، وظيفية، وتشغيلية تهم الأفراد ورواد الأعمال.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
    badge: "متاح"
  },
  {
    id: "arabic",
    nameAr: "أدوات اللغة العربية",
    nameEn: "Arabic Language Tools",
    description: "معالجة وتنسيق النصوص العربية، عد الحروف والكلمات، وتحويل الأرقام.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="12" y1="7" x2="12" y2="13"/></svg>`,
    badge: "متاح"
  },
  {
    id: "restaurant",
    nameAr: "أدوات المطاعم",
    nameEn: "Restaurant Tools",
    description: "حلول تشغيلية للمطاعم والمقاهي تشمل حساب التكاليف وقوائم الطعام الرقمية.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/></svg>`,
    badge: "متاح"
  },
  {
    id: "business",
    nameAr: "أدوات الأعمال",
    nameEn: "Business Tools",
    description: "أدوات مساعدة لرواد الأعمال والشركات الناشئة والمتاجر الإلكترونية.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    badge: "قريباً"
  },
  {
    id: "qr",
    nameAr: "أدوات QR",
    nameEn: "QR Tools",
    description: "توليد وإدارة رموز الاستجابة السريعة للمواقع، والشبكات، وقوائم الطعام.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M20 14v3"/><path d="M17 20h3"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/></svg>`,
    badge: "متاح"
  }
];

const TOOLS = [
  {
    id: "end-of-service-calculator",
    nameAr: "حاسبة مكافأة نهاية الخدمة",
    nameEn: "Saudi End of Service Gratuity Calculator",
    category: "saudi",
    description: "احسب مستحقات نهاية الخدمة وفقاً لنظام العمل السعودي والمادتين 84 و85 بالاستقالة أو إنهاء العقد بالسنوات والأشهر والأيام.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    url: "/ar/tools/end-of-service-calculator.html",
    status: "active",
    featured: true,
    keywords: ["نهاية الخدمة", "مكافأة", "العمل السعودي", "راتب", "استقالة", "حقوق", "مستحقات"]
  },
  {
    id: "vat-calculator",
    nameAr: "حاسبة ضريبة القيمة المضافة 15%",
    nameEn: "Saudi 15% VAT Calculator",
    category: "calculators",
    description: "حساب وإضافة أو استخراج وفصل ضريبة القيمة المضافة 15% في السعودية والخليج بدقة وسرعة مع تفصيل الحسبة للشيكات والفواتير.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    url: "/ar/tools/vat-calculator.html",
    status: "active",
    featured: true,
    keywords: ["ضريبة", "القيمة المضافة", "vat", "15%", "فاتورة", "حساب الضريبة", "استخراج الضريبة", "السعودية"]
  },
  {
    id: "zatca-qr-generator",
    nameAr: "مولد QR الفاتورة الإلكترونية ZATCA",
    nameEn: "ZATCA e-Invoice QR Code Generator",
    category: "qr",
    description: "توليد كود QR للفواتير الضريبية المبسطة بتشفير TLV Base64 المعتمد لهيئة الزكاة محلياً وتنزيله بصيغة PNG.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M20 14v3"/><path d="M17 20h3"/></svg>`,
    url: "/ar/tools/zatca-qr-generator.html",
    status: "active",
    featured: true,
    keywords: ["zatca", "فاتورة الكترونية", "زكاة", "qr باركود", "ضريبة", "tlv", "باركود الفاتورة"]
  },
  {
    id: "menu-engineering-calculator",
    nameAr: "حاسبة هندسة المنيو والمطاعم",
    nameEn: "Restaurant Menu Engineering Calculator",
    category: "restaurant",
    description: "تحليل ربحية وشعبية أطباق المطاعم وتصنيفها (نجوم، أحصنة عمل، ألغاز، أعباء) لاتخاذ قرارات التسعير وضبط تكلفة الطعام.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/></svg>`,
    url: "/ar/tools/menu-engineering-calculator.html",
    status: "active",
    featured: true,
    keywords: ["منيو", "مطاعم", "هندسة المنيو", "تكلفة الطعام", "أرباح", "تسعير", "food cost"]
  },
  {
    id: "tafqeet-converter",
    nameAr: "أداة تفقيط المبالغ والأرقام",
    nameEn: "Tafqeet - Number to Arabic Words",
    category: "calculators",
    description: "تحويل الأرقام والمبالغ المالية إلى كلمات عربية مكتوبة بدقة نحوية مع العملات للشيكات، العقود، والفواتير.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/></svg>`,
    url: "/ar/tools/tafqeet-converter.html",
    status: "active",
    featured: true,
    keywords: ["تفقيط", "شيكات", "حروف", "ارقام", "كلمات", "ريال", "سند صرف"]
  },
  {
    id: "arabic-prompt-formatter",
    nameAr: "مُنسّق البرومبت والنصوص للذكاء الاصطناعي",
    nameEn: "Arabic Prompt & Text Formatter for AI",
    category: "arabic",
    description: "تنظيف النصوص العربية من الكشيدة والتشكيل وصياغة أوامر برومبت مهيكلة لنماذج الذكاء الاصطناعي ChatGPT وClaude وGemini.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    url: "/ar/tools/arabic-prompt-formatter.html",
    status: "active",
    featured: true,
    keywords: ["برومبت", "ذكاء اصطناعي", "تنظيف", "كشيدة", "نصوص", "chatgpt", "هندسة الأوامر"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, CATEGORIES, TOOLS };
}
