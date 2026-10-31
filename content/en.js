/*
 * English content for the site: same structure as ar.js.
 * Edit texts here only. Shared settings (WhatsApp number, hero frames, speed) are in settings.js.
 * Use <em>word</em> inside titles to colour a word pink.
 * Service names are also the booking-form values, so keep offers[].service identical to services.items[].name.
 */
window.SITE_LANGS = window.SITE_LANGS || {};
window.SITE_LANGS.en = {

  dir: 'ltr',

  ui: { menu: 'Menu', ofFive: 'out of 5', heroAria: 'Introduction', whatsappAria: 'WhatsApp' },

  meta: {
    title: "Leen | Women's Beauty Salon",
    description: "Leen is a women's beauty salon: hair, skin, makeup, nails and bridal packages in a refined, welcoming atmosphere with personal care."
  },

  brand: { name: 'Leen', tagline: 'Beauty Salon', footerNote: 'All rights reserved' },

  nav: {
    ariaLabel: 'Main navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Offers', href: '#offers' },
      { label: 'Our Work', href: '#gallery' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' }
    ],
    cta: { label: 'Book Now', href: '#booking' },
    langSwitch: { label: 'عربي', title: 'العربية', target: 'ar' }
  },

  hero: {
    scrollHint: 'Scroll down',
    steps: [
      {
        eyebrow: 'Leen Beauty Salon',
        title: 'Your beauty <em>starts</em> here',
        text: 'A women\'s beauty salon with a calm, refined atmosphere, where every visit becomes a moment of care for you.',
        buttons: [
          { label: 'Book your appointment', href: '#booking' },
          { label: 'Discover our services', href: '#services', ghost: true }
        ]
      },
      {
        eyebrow: 'Details made with care',
        title: 'A space designed for <em>your comfort</em>',
        text: 'Soft lighting, elegant mirrors and golden touches surround you from the moment you step in.'
      },
      {
        eyebrow: 'Experience and craft',
        title: 'From hair to <em>nails</em>',
        text: 'Hair, skin, makeup, nails and bridal packages, all under one roof.'
      },
      {
        eyebrow: 'Your appointment awaits',
        title: 'Time for your <em>new look</em>',
        text: 'Message us on WhatsApp and we will arrange the right time for you.',
        buttons: [{ label: 'Book Now', href: '#booking' }]
      }
    ]
  },

  marquee: ['Hair', 'Skin', 'Makeup', 'Nails', 'Brows & Lashes', 'Brides'],

  about: {
    eyebrow: 'About us',
    title: 'One place for your beauty <em>and comfort</em>',
    text: 'At Leen we believe beauty begins with feeling comfortable. We listen first, then choose with you what suits your hair, your skin and your personality, using carefully selected products and hands that care about every detail.',
    badge: 'Beauty Salon',
    mainImage: { src: 'assets/images/about/main.webp', alt: 'Woman with soft, naturally glossy hair' },
    subImage: { src: 'assets/images/about/secondary.webp', alt: 'Nail care' },
    // TODO: replace with the salon's real numbers
    stats: [
      { value: 8, label: 'Years of experience' },
      { value: 2500, plus: true, label: 'Happy clients' },
      { value: 12, label: 'Specialised services' }
    ],
    cta: { label: 'Book your visit', href: '#booking' }
  },

  services: {
    eyebrow: 'Our services',
    title: 'Everything you need <em>to shine</em>',
    intro: 'Choose a service, and message us on WhatsApp for prices and details so we can arrange what suits you best.',
    cardCta: 'Book →',
    items: [
      { name: 'Hair', icon: 'scissors', text: 'Cuts, colour, keratin, protein treatments and styling for every occasion.', image: 'assets/images/services/hair.webp', alt: 'Glossy wavy hair' },
      { name: 'Skin', icon: 'sparkles', text: 'Deep cleansing, HydraFacial and peels for a healthy glow.', image: 'assets/images/services/skin.webp', alt: 'Skin care session' },
      { name: 'Makeup', icon: 'brush', text: 'Daily, evening and bridal makeup that highlights your natural features.', image: 'assets/images/services/makeup.webp', alt: 'Professional makeup' },
      { name: 'Nails', icon: 'hand', text: 'Manicure, pedicure, gel and acrylic in elegant designs.', image: 'assets/images/services/nails.webp', alt: 'Nail care' },
      { name: 'Brows & Lashes', icon: 'eye', text: 'Shaping, microblading and lash extensions for a more defined look.', image: 'assets/images/services/brows-lashes.webp', alt: 'Brows and lashes' },
      { name: 'Hair Removal', icon: 'zap', text: 'Waxing, sugaring and laser for smooth, lasting results.', image: 'assets/images/services/hair-removal.webp', alt: 'Hair removal session' },
      { name: 'Moroccan Bath & Massage', icon: 'droplets', text: 'Complete relaxation that renews your energy and hydrates your skin.', image: 'assets/images/services/spa-massage.webp', alt: 'Bath and massage' },
      { name: 'Bridal Packages', icon: 'crown', text: 'Complete preparation for your big day, from hair to the final touch.', image: 'assets/images/services/bridal.webp', alt: 'Bride with a complete look' }
    ]
  },

  offers: {
    eyebrow: 'Offers',
    title: 'Offers <em>made for you</em>',
    // TODO: edit the offer texts and add real prices/discounts
    items: [
      { variant: 'bride', tag: 'Bridal package', title: 'Your big day<br><em>in perfect detail</em>', text: 'Hair, makeup, nails and skin care in one package.', cta: 'Ask about the package', service: 'Bridal Packages' },
      { variant: 'season', tag: 'Seasonal offer', title: 'A glow<br><em>that lasts</em>', text: 'Skin care with a relaxation session, for a limited time.', cta: 'Ask about the offer', service: 'Skin', light: true },
      { variant: 'new', tag: 'New', title: 'Nails<br><em>with an artistic touch</em>', text: 'Gel and acrylic designs in this season\'s colours.', cta: 'Book your turn', service: 'Nails' }
    ]
  },

  gallery: {
    eyebrow: 'Our work',
    title: 'Moments <em>from the salon</em>',
    ariaLabel: 'Salon work gallery',
    hint: 'Drag the photos to rotate',
    images: [
      { src: 'assets/images/gallery/skincare-session.webp', alt: 'Skin care session' },
      { src: 'assets/images/gallery/makeup-mirror.webp', alt: 'Professional makeup at the mirror' },
      { src: 'assets/images/gallery/bride.webp', alt: 'Bride with a complete look' },
      { src: 'assets/images/gallery/wavy-hair.webp', alt: 'Glossy wavy hair' },
      { src: 'assets/images/gallery/spa-massage.webp', alt: 'Relaxation and massage session' },
      { src: 'assets/images/gallery/face-mask.webp', alt: 'Face mask' },
      { src: 'assets/images/gallery/glowing-skin.webp', alt: 'Glowing skin' },
      { src: 'assets/images/gallery/nail-care.webp', alt: 'Nail care' },
      { src: 'assets/images/gallery/lash-extension.webp', alt: 'Lash extensions' },
      { src: 'assets/images/gallery/silky-hair.webp', alt: 'Soft features and silky hair' },
      { src: 'assets/images/gallery/advanced-care.webp', alt: 'Advanced care session' },
      { src: 'assets/images/gallery/hairstyle-mirror.webp', alt: 'Hairstyle at the mirror' }
    ]
  },

  reviews: {
    eyebrow: 'Client reviews',
    title: 'Their words <em>make us happy</em>',
    // TODO: these are sample reviews for the design; replace with real client reviews before publishing
    items: [
      { stars: 5, text: 'A calm atmosphere and a helpful team. I left with hair even better than I imagined.', author: 'Client · sample text' },
      { stars: 5, text: 'Great attention to detail and very clean. My makeup was perfect for my wedding day.', author: 'Bride · sample text' },
      { stars: 5, text: 'The skin care session was so relaxing, and my skin looks fresher.', author: 'Client · sample text' }
    ]
  },

  booking: {
    eyebrow: 'Booking',
    title: 'Book your appointment <em>in a minute</em>',
    text: 'Fill in the form and WhatsApp will open with a ready message to us. We will confirm your appointment as soon as possible.',
    points: ['No account or deposit needed', 'Quick confirmation on WhatsApp', 'Personal consultation before any service'],
    form: {
      nameLabel: 'Name', namePlaceholder: 'Your name',
      serviceLabel: 'Service', servicePlaceholder: 'Choose a service',
      dateLabel: 'Preferred date',
      timeLabel: 'Preferred time', timeAny: 'Any time', timeOptions: ['Morning', 'Noon', 'Evening'],
      noteLabel: 'Notes (optional)', notePlaceholder: 'Any details you would like us to know',
      submit: 'Send booking via WhatsApp',
      errorMissing: 'Please enter your name and choose a service.'
    },
    message: {
      intro: 'Hello Leen, I would like to book an appointment:',
      name: 'Name', service: 'Service', date: 'Preferred date', time: 'Preferred time', note: 'Notes'
    }
  },

  contact: {
    eyebrow: 'Contact',
    title: 'We would love <em>to welcome you</em>',
    // TODO: verify the address and opening hours (taken from the old Leen Beauty site) and add social links
    addressLabel: 'Address',
    address: 'Leipziger Straße 1, 60487 Frankfurt am Main',
    whatsappLabel: 'WhatsApp',
    hoursLabel: 'Opening hours',
    hours: 'Tuesday – Saturday: 10:00 – 19:00<br>Sunday & Monday: closed',
    cta: 'Message us now',
    mapTitle: 'Map of Leen salon location',
    mapQuery: 'Leipziger Straße 1, 60487 Frankfurt am Main'
  }
};
