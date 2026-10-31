/* Shared helpers. Everything lives under window.Leen. */
window.Leen = {
  sections: {},   // js/sections/*.js  -> functions that return each section's HTML
  features: {},   // js/features/*.js  -> behaviours (scroll, sliders, form...)

  $: function (s, c) { return (c || document).querySelector(s); },
  $$: function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); },

  reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  hasGsap: !!(window.gsap && window.ScrollTrigger),

  icons: {
    whatsapp: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.1 6.4 6.6 2 12 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.9-9.8 9.9z"/></svg>'
  },

  // رابط واتساب مع رسالة اختيارية
  waLink: function (text) {
    var base = 'https://wa.me/' + window.SITE.settings.whatsappNumber;
    return text ? base + '?text=' + encodeURIComponent(text) : base;
  }
};

if (Leen.reduced) document.documentElement.classList.add('reduced');
