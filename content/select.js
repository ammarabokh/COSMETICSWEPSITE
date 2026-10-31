/*
 * اختيار اللغة وبناء window.SITE (يُحمَّل بعد ar.js و en.js وقبل باقي الأكواد).
 * اللغة تُحفظ في المتصفح، ويمكن فرضها برابط مثل ?lang=en
 */
(function () {
  var langs = window.SITE_LANGS, S = window.SITE_SETTINGS;
  var lang = S.defaultLang;
  try {
    var q = new URLSearchParams(location.search).get('lang');
    var saved = localStorage.getItem('leen-lang');
    if (q && langs[q]) { lang = q; localStorage.setItem('leen-lang', q); }
    else if (saved && langs[saved]) lang = saved;
  } catch (e) { /* التخزين غير متاح: نستخدم الافتراضية */ }

  window.SITE = langs[lang];
  window.SITE.settings = S;
  window.SITE.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = window.SITE.dir;
})();
