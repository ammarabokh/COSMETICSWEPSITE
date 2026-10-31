/* Markup for the booking form (#booking). Text comes from content/ar.js + content/en.js -> booking.
   The service dropdown is built from content/ar.js + content/en.js -> services.items. */
Leen.sections.booking = function (c) {
  var b = c.booking, f = b.form;
  var points = b.points.map(function (p) { return '<li>' + p + '</li>'; }).join('');
  var services = c.services.items.map(function (s) { return '<option>' + s.name + '</option>'; }).join('');
  var times = f.timeOptions.map(function (t) { return '<option>' + t + '</option>'; }).join('');
  return '' +
    '<div class="wrap booking-grid">' +
      '<div class="booking-copy">' +
        '<span class="eyebrow">' + b.eyebrow + '</span>' +
        '<h2>' + b.title + '</h2>' +
        '<p>' + b.text + '</p>' +
        '<ul class="booking-points">' + points + '</ul>' +
      '</div>' +
      '<form class="form" id="bookingForm" novalidate>' +
        '<label>' + f.nameLabel + '<input type="text" name="name" required autocomplete="name" placeholder="' + f.namePlaceholder + '"></label>' +
        '<label>' + f.serviceLabel +
          '<select name="service" id="serviceSelect" required><option value="">' + f.servicePlaceholder + '</option>' + services + '</select>' +
        '</label>' +
        '<div class="form-row">' +
          '<label>' + f.dateLabel + '<input type="date" name="date" id="dateInput"></label>' +
          '<label>' + f.timeLabel + '<select name="time"><option value="">' + f.timeAny + '</option>' + times + '</select></label>' +
        '</div>' +
        '<label>' + f.noteLabel + '<textarea name="note" rows="3" placeholder="' + f.notePlaceholder + '"></textarea></label>' +
        '<button type="submit" class="btn btn-wa">' + Leen.icons.whatsapp + ' ' + f.submit + '</button>' +
        '<p class="form-msg" id="formMsg" role="status"></p>' +
      '</form>' +
    '</div>';
};
