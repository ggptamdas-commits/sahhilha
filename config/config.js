/**
 * SAHHILHA (سهّلها) - Platform Configuration
 * Central configuration for site settings, categories, and registered tools.
 */

const CONFIG = {
  // Production domain placeholder - configure upon custom domain assignment
  siteUrl: "",
  siteNameAr: "سهّلها",
  siteNameEn: "Sahhilha",
  taglineAr: "أدوات مجانية تجعل حياتك أسهل",
  taglineEn: "Free tools that make your life easier",
  description: "منصة عربية مجانية تجمع أدوات عملية ومفيدة: حاسبات السعودية، أدوات المطاعم، مولدات رموز QR، وأدوات النصوص العربية دون الحاجة إلى تسجيل.",
  currentYear: 2026,
  
  // Analytics & Webmaster verification placeholders (remain disabled until configured)
  googleAnalyticsId: "",
  searchConsoleVerification: "",

  // Feature Flags
  enableFavorites: true,
  enableRecentTools: true,
  enableDarkMode: true,
  enableShareAPI: true
};

/**
 * Category Definitions
 */
const CATEGORIES = {
  all: {
    id: "all",
    nameAr: "جميع الأدوات",
    nameEn: "All Tools",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
  },
  qr: {
    id: "qr",
    nameAr: "أدوات QR",
    nameEn: "QR Tools",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><path d="M14 14h3v3h-3z"></path><path d="M20 14v3"></path><path d="M17 20h3"></path><path d="M7 7h.01"></path><path d="M17 7h.01"></path><path d="M7 17h.01"></path></svg>`
  },
  saudi: {
    id: "saudi",
    nameAr: "أدوات السعودية",
    nameEn: "Saudi Tools",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`
  },
  restaurant: {
    id: "restaurant",
    nameAr: "أدوات المطاعم",
    nameEn: "Restaurant Tools",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`
  },
  arabic: {
    id: "arabic",
    nameAr: "أدوات اللغة العربية",
    nameEn: "Arabic Text Tools",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="9" y1="7" x2="15" y2="7"></line><line x1="12" y1="7" x2="12" y2="13"></line></svg>`
  },
  calculators: {
    id: "calculators",
    nameAr: "الحاسبات",
    nameEn: "Calculators",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>`
  }
};

/**
 * Platform Tools Registry (All 10 Core Tools)
 */
const TOOLS = [
  {
    id: "qr-code-generator",
    nameAr: "مولد رمز QR",
    nameEn: "QR Code Generator",
    category: "qr",
    url: "/ar/tools/qr-code-generator.html",
    badge: "شائع",
    description: "أنشئ رموز QR مخصصة للروابط والنصوص والبطاقات الشخصية مع خيارات تغيير الألوان والحجم والتحميل بصيغة PNG أو SVG.",
    keywords: ["qr", "باركود", "رمز استجابة سريعة", "توليد qr", "كود qr", "generator"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><path d="M14 14h3v3h-3z"></path><path d="M20 14v3"></path><path d="M17 20h3"></path></svg>`
  },
  {
    id: "qr-code-whatsapp",
    nameAr: "مولد QR للواتساب",
    nameEn: "WhatsApp QR Generator",
    category: "qr",
    url: "/ar/tools/qr-code-whatsapp.html",
    badge: "مميز",
    description: "أنشئ رابط ورمز QR مباشر لمحادثة واتساب مع رسالة جاهزة مسبقاً لمشاركة رقمك بسهولة مع عملائك.",
    keywords: ["واتساب", "whatsapp", "باركود واتساب", "رابط واتس", "محادثة مباشرة", "شات"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`
  },
  {
    id: "qr-code-wifi",
    nameAr: "مولد QR لشبكة Wi-Fi",
    nameEn: "Wi-Fi QR Generator",
    category: "qr",
    url: "/ar/tools/qr-code-wifi.html",
    badge: "",
    description: "شارك اتصال شبكة الواي فاي للضيوف والعملاء عبر مسح رمز الباركود دون الحاجة لكتابة كلمة المرور يدوياً.",
    keywords: ["واي فاي", "wifi", "انترنت", "شبكة", "باسورد", "باركود واي فاي"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`
  },
  {
    id: "qr-code-maps",
    nameAr: "مولد QR لموقعك على الخريطة",
    nameEn: "Google Maps QR Generator",
    category: "qr",
    url: "/ar/tools/qr-code-maps.html",
    badge: "",
    description: "حوّل رابط موقع متجرك أو شركتك على خرائط جوجل إلى رمز QR يسهل على الزوار الوصول إلى موقعك الجغرافي بنقرة واحدة.",
    keywords: ["خرائط", "موقع", "maps", "لوكيشن", "جوجل ماب", "باركود خريطة", "اتجاهات"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
  },
  {
    id: "qr-code-menu",
    nameAr: "مولد QR لقائمة المطعم",
    nameEn: "Restaurant Menu QR",
    category: "restaurant",
    url: "/ar/tools/qr-code-menu.html",
    badge: "للمطاعم",
    description: "أنشئ رمز QR مخصصاً لقائمة طعام مطعمك أو مقهاك مناسباً للطباعة على الطاولات وبطاقات الاستلام.",
    keywords: ["منيو", "menu", "مطعم", "كافيه", "باركود منيو", "طاولة", "قائمة طعام"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><path d="M12 6v6"></path><path d="M9 9h6"></path></svg>`
  },
  {
    id: "arabic-text-cleaner",
    nameAr: "منظف النص العربي",
    nameEn: "Arabic Text Cleaner",
    category: "arabic",
    url: "/ar/tools/arabic-text-cleaner.html",
    badge: "سريع",
    description: "أداة ذكية لتنظيف وتنسيق النصوص العربية: إزالة التطويل والكشيدة، تنظيف المسافات الزائدة، وتوحيد الترقيم محلياً في متصفحك.",
    keywords: ["تنظيف النص", "حذف التشكيل", "ازالة الكشيدة", "تنسيق النص", "مسافات", "عربي"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
  },
  {
    id: "arabic-counter",
    nameAr: "عداد الكلمات والحروف العربية",
    nameEn: "Arabic Word & Character Counter",
    category: "arabic",
    url: "/ar/tools/arabic-counter.html",
    badge: "",
    description: "احسب عدد الكلمات، الحروف، الفقرات، والأسطر في نصوصك العربية فورياً مع حساب الحروف بدون مسافات وزمن القراءة التقريبي.",
    keywords: ["عداد كلمات", "حساب الحروف", "احصائيات النص", "عدد الاسطر", "word count"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>`
  },
  {
    id: "arabic-numerals",
    nameAr: "تحويل الأرقام العربية والإنجليزية",
    nameEn: "Arabic/English Numeral Converter",
    category: "arabic",
    url: "/ar/tools/arabic-numerals.html",
    badge: "",
    description: "حوّل الأرقام بسهولة بين الأرقام العربية المشرقية (٠-٩) والأرقام الإنجليزية/العربية المغربية (0-9) مع دعم تحويل النصوص الطويلة.",
    keywords: ["تحويل ارقام", "ارقام هندية", "ارقام عربية", "ارقام انجليزية", "numerals"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`
  },
  {
    id: "food-cost-calculator",
    nameAr: "حاسبة تكلفة الطعام للمطاعم",
    nameEn: "Restaurant Food Cost Calculator",
    category: "restaurant",
    url: "/ar/tools/food-cost-calculator.html",
    badge: "للمطاعم",
    description: "احسب تكلفة مكونات الوجبات بدقة، تكلفة الحصة الواحدة، نسبة تكلفة الطعام (Food Cost %)، والسعر المقترح للبيع لتحقيق أرباح مستدامة.",
    keywords: ["تكلفة الطعام", "food cost", "حساب وجبات", "مطاعم", "تسعير الوجبات", "هامش ربح"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
  },
  {
    id: "overtime-calculator",
    nameAr: "حاسبة العمل الإضافي",
    nameEn: "Saudi Overtime Calculator",
    category: "saudi",
    url: "/ar/tools/overtime-calculator.html",
    badge: "السعودية",
    description: "حاسبة تقديرية لحساب أجر ساعات العمل الإضافي بناءً على الأجر الأساسي وساعات العمل اليومية لتقدير مستحقاتك بدقة.",
    keywords: ["عمل اضافي", "اوفر تايم", "overtime", "نظام العمل", "ساعات اضافية", "حساب الراتب"],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, CATEGORIES, TOOLS };
}
