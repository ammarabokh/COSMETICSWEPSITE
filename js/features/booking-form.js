/* Booking form: validates and opens WhatsApp with a ready message.
   Message wording is in content/site.js -> booking.message; the number in settings.whatsappNumber. */
Leen.features.bookingForm = function () {
  var $ = Leen.$, $$ = Leen.$$;
  var form = $('#bookingForm'), select = $('#serviceSelect'), msg = $('#formMsg'), dateInput = $('#dateInput');
  var B = window.SITE.booking;

  dateInput.min = new Date().toISOString().split('T')[0];

  // service / offer buttons pre-select the matching service in the form
  $$('[data-pick]').forEach(function (a) {
    a.addEventListener('click', function () { select.value = a.dataset.pick; });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, ok = true;
    [f.name, f.service].forEach(function (el) {
      var bad = !el.value.trim();
      el.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) { msg.textContent = B.form.errorMissing; return; }
    msg.textContent = '';

    var m = B.message;
    var lines = [m.intro, m.name + ': ' + f.name.value.trim(), m.service + ': ' + f.service.value];
    if (f.date.value) lines.push(m.date + ': ' + f.date.value);
    if (f.time.value) lines.push(m.time + ': ' + f.time.value);
    if (f.note.value.trim()) lines.push(m.note + ': ' + f.note.value.trim());
    window.open(Leen.waLink(lines.join('\n')), '_blank', 'noopener');
  });
};
