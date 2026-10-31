/* Markup for the Contact + map section (#contact). Text comes from content/ar.js + content/en.js -> contact, and content/settings.js. */
Leen.sections.contact = function (c) {
  var k = c.contact;
  var map = 'https://maps.google.com/maps?q=' + encodeURIComponent(k.mapQuery) + '&t=&z=15&ie=UTF8&iwloc=&output=embed';
  return '' +
    '<div class="wrap contact-grid">' +
      '<div class="contact-copy">' +
        '<span class="eyebrow">' + k.eyebrow + '</span>' +
        '<h2>' + k.title + '</h2>' +
        '<ul class="contact-list">' +
          '<li><b>' + k.addressLabel + '</b><span>' + k.address + '</span></li>' +
          '<li><b>' + k.whatsappLabel + '</b><a href="' + Leen.waLink() + '" target="_blank" rel="noopener" dir="ltr">' + c.settings.phoneDisplay + '</a></li>' +
          '<li><b>' + k.hoursLabel + '</b><span>' + k.hours + '</span></li>' +
        '</ul>' +
        '<a href="' + Leen.waLink() + '" class="btn" target="_blank" rel="noopener">' + k.cta + '</a>' +
      '</div>' +
      '<div class="map">' +
        '<iframe title="' + k.mapTitle + '" src="' + map + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
      '</div>' +
    '</div>';
};
