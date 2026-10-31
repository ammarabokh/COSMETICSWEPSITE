/*
 * محتوى الموقع بالعربية (نصوص، روابط، مسارات صور) في ملف واحد.
 * عدّلي النصوص هنا فقط ولا حاجة لفتح ملفات الأكواد. النسخة الإنجليزية في en.js بنفس البنية.
 *
 * - يمكن استخدام <em>كلمة</em> داخل العناوين لتلوينها بالوردي.
 * - مسارات الصور نسبية لمجلد الموقع، وكل مجموعة صور في مجلد باسم مكانها:
 *     assets/images/about     صور قسم "من نحن"
 *     assets/images/services  صور بطاقات الخدمات
 *     assets/images/gallery   صور معرض "أعمالنا" الدوّار
 *     assets/frames/hero      إطارات فيديو الهيرو
 */
window.SITE_LANGS = window.SITE_LANGS || {};
window.SITE_LANGS.ar = {

  dir: 'rtl',

  // نصوص الواجهة الصغيرة (aria وغيرها)
  ui: { menu: 'القائمة', ofFive: 'من 5', heroAria: 'مقدمة', whatsappAria: 'واتساب' },


  /* ---------- معلومات الصفحة ---------- */
  meta: {
    title: 'Leen | صالون تجميل نسائي',
    description: 'Leen صالون تجميل نسائي: عناية بالشعر والبشرة والمكياج والأظافر وباقات العرائس، بأجواء راقية وخدمة شخصية.'
  },

  brand: { name: 'Leen', tagline: 'صالون تجميل', footerNote: 'جميع الحقوق محفوظة' },

  /* ---------- شريط التنقل ---------- */
  nav: {
    ariaLabel: 'التنقل الرئيسي',
    links: [
      { label: 'من نحن', href: '#about' },
      { label: 'الخدمات', href: '#services' },
      { label: 'العروض', href: '#offers' },
      { label: 'أعمالنا', href: '#gallery' },
      { label: 'آراء العميلات', href: '#reviews' },
      { label: 'تواصلي معنا', href: '#contact' }
    ],
    cta: { label: 'احجزي الآن', href: '#booking' },
    // زر تبديل اللغة (يعرض اسم اللغة الأخرى)
    langSwitch: { label: 'EN', title: 'English', target: 'en' }
  },

  /* ---------- الهيرو (فيديو السكرول) ---------- */
  hero: {
    scrollHint: 'مرّري للأسفل',
    steps: [
      {
        eyebrow: 'Leen Beauty Salon',
        title: 'جمالك <em>يبدأ</em> هنا',
        text: 'صالون تجميل نسائي بأجواء هادئة وراقية، حيث تتحول كل زيارة إلى لحظة اهتمام بكِ.',
        buttons: [
          { label: 'احجزي موعدك', href: '#booking' },
          { label: 'اكتشفي خدماتنا', href: '#services', ghost: true }
        ]
      },
      {
        eyebrow: 'تفاصيل تُصنع بعناية',
        title: 'مساحة صُمّمت <em>لراحتكِ</em>',
        text: 'إضاءة ناعمة، مرايا أنيقة، ولمسات ذهبية تحيط بكِ من لحظة دخولكِ.'
      },
      {
        eyebrow: 'خبرة وإتقان',
        title: 'من الشعر إلى <em>الأظافر</em>',
        text: 'شعر وبشرة ومكياج وأظافر وباقات عرائس، كله تحت سقف واحد.'
      },
      {
        eyebrow: 'موعدكِ ينتظركِ',
        title: 'حان وقت <em>إطلالتكِ</em>',
        text: 'راسلينا على واتساب وسنجهّز لكِ الموعد المناسب.',
        buttons: [{ label: 'احجزي الآن', href: '#booking' }]
      }
    ]
  },

  /* ---------- الشريط المتحرك ---------- */
  marquee: ['شعر', 'بشرة', 'مكياج', 'أظافر', 'حواجب ورموش', 'عرائس'],

  /* ---------- من نحن ---------- */
  about: {
    eyebrow: 'من نحن',
    title: 'مكان واحد لجمالكِ <em>وراحتكِ</em>',
    text: 'في Leen نؤمن أن الجمال يبدأ من الإحساس بالراحة. نستمع لكِ أولًا، ثم نختار معكِ ما يناسب شعركِ وبشرتكِ وشخصيتكِ، بمنتجات منتقاة وأيدٍ تهتم بالتفاصيل.',
    badge: 'Beauty Salon',
    mainImage: { src: 'assets/images/about/main.webp', alt: 'امرأة بشعر ناعم ولمعان طبيعي' },
    subImage: { src: 'assets/images/about/secondary.webp', alt: 'عناية بالأظافر' },
    // TODO: استبدلي الأرقام بالأرقام الحقيقية للصالون
    stats: [
      { value: 8, label: 'سنوات خبرة' },
      { value: 2500, plus: true, label: 'عميلة سعيدة' },
      { value: 12, label: 'خدمة متخصصة' }
    ],
    cta: { label: 'احجزي زيارتكِ', href: '#booking' }
  },

  /* ---------- الخدمات ---------- */
  services: {
    eyebrow: 'خدماتنا',
    title: 'كل ما تحتاجينه <em>لتتألقي</em>',
    intro: 'اختاري الخدمة، وللأسعار والتفاصيل راسلينا على واتساب لنرتّب لكِ الأنسب.',
    cardCta: 'احجزي ←',
    // icon: اسم أيقونة من مكتبة Lucide (lucide.dev/icons)
    items: [
      { name: 'الشعر', icon: 'scissors', text: 'قص، صبغة، كيراتين، بروتين وتسريحات لكل مناسبة.', image: 'assets/images/services/hair.webp', alt: 'شعر مموّج ولامع' },
      { name: 'البشرة', icon: 'sparkles', text: 'تنظيف عميق، هيدرافيشل وتقشير لإشراقة صحية.', image: 'assets/images/services/skin.webp', alt: 'جلسة عناية بالبشرة' },
      { name: 'المكياج', icon: 'brush', text: 'مكياج يومي، سهرات وعرائس يُبرز ملامحكِ الطبيعية.', image: 'assets/images/services/makeup.webp', alt: 'مكياج احترافي' },
      { name: 'الأظافر', icon: 'hand', text: 'مانيكير، باديكير، جل وأكريليك بتصاميم أنيقة.', image: 'assets/images/services/nails.webp', alt: 'عناية بالأظافر' },
      { name: 'الحواجب والرموش', icon: 'eye', text: 'رسم، ميكروبليدنغ وتركيب رموش لنظرة أوضح.', image: 'assets/images/services/brows-lashes.webp', alt: 'حواجب ورموش' },
      { name: 'إزالة الشعر', icon: 'zap', text: 'واكس، حلاوة وليزر لبشرة ناعمة تدوم.', image: 'assets/images/services/hair-removal.webp', alt: 'جلسة إزالة الشعر' },
      { name: 'الحمام المغربي والمساج', icon: 'droplets', text: 'استرخاء كامل يجدّد طاقتكِ ويرطّب بشرتكِ.', image: 'assets/images/services/spa-massage.webp', alt: 'حمام ومساج' },
      { name: 'باقات العرائس', icon: 'crown', text: 'تحضير متكامل ليومكِ الكبير، من الشعر حتى آخر لمسة.', image: 'assets/images/services/bridal.webp', alt: 'عروس بإطلالة مكتملة' }
    ]
  },

  /* ---------- العروض (بوسترات) ---------- */
  offers: {
    eyebrow: 'العروض',
    title: 'عروض <em>تليق بكِ</em>',
    // TODO: عدّلي نصوص العروض وأضيفي الأسعار/النسب الحقيقية
    // variant: bride | season | new  (يحدد لون وزخرفة البوستر في css/offers.css)
    // service: الخدمة التي تُختار تلقائيًا في نموذج الحجز عند الضغط على الزر
    items: [
      { variant: 'bride', tag: 'باقة العروس', title: 'يومكِ الكبير<br><em>بتفاصيل مثالية</em>', text: 'شعر ومكياج وأظافر وعناية بالبشرة ضمن باقة واحدة.', cta: 'استفسري عن الباقة', service: 'باقات العرائس' },
      { variant: 'season', tag: 'عرض الموسم', title: 'إشراقة<br><em>تدوم</em>', text: 'عناية بالبشرة مع جلسة استرخاء، عرض لفترة محدودة.', cta: 'اسألي عن العرض', service: 'البشرة', light: true },
      { variant: 'new', tag: 'جديد', title: 'أظافر<br><em>بلمسة فنية</em>', text: 'تصاميم جل وأكريليك بألوان الموسم.', cta: 'احجزي دوركِ', service: 'الأظافر' }
    ]
  },

  /* ---------- معرض أعمالنا (الحلقة ثلاثية الأبعاد) ---------- */
  gallery: {
    eyebrow: 'أعمالنا',
    title: 'لحظات <em>من الصالون</em>',
    ariaLabel: 'معرض أعمال الصالون',
    hint: 'اسحبي الصور لتدويرها',
    images: [
      { src: 'assets/images/gallery/skincare-session.webp', alt: 'جلسة عناية بالبشرة' },
      { src: 'assets/images/gallery/makeup-mirror.webp', alt: 'مكياج احترافي أمام المرآة' },
      { src: 'assets/images/gallery/bride.webp', alt: 'عروس بإطلالة مكتملة' },
      { src: 'assets/images/gallery/wavy-hair.webp', alt: 'شعر مموّج بلمعان' },
      { src: 'assets/images/gallery/spa-massage.webp', alt: 'جلسة استرخاء ومساج' },
      { src: 'assets/images/gallery/face-mask.webp', alt: 'ماسك للوجه' },
      { src: 'assets/images/gallery/glowing-skin.webp', alt: 'بشرة مشرقة' },
      { src: 'assets/images/gallery/nail-care.webp', alt: 'عناية بالأظافر' },
      { src: 'assets/images/gallery/lash-extension.webp', alt: 'تركيب رموش' },
      { src: 'assets/images/gallery/silky-hair.webp', alt: 'ملامح ناعمة وشعر حريري' },
      { src: 'assets/images/gallery/advanced-care.webp', alt: 'جلسة عناية متقدمة' },
      { src: 'assets/images/gallery/hairstyle-mirror.webp', alt: 'تسريحة أمام المرآة' }
    ]
  },

  /* ---------- آراء العميلات ---------- */
  reviews: {
    eyebrow: 'آراء العميلات',
    title: 'كلماتهن <em>تسعدنا</em>',
    // TODO: هذه آراء نموذجية لتجربة التصميم، استبدليها بآراء عميلاتكِ الحقيقيات قبل النشر
    items: [
      { stars: 5, text: 'أجواء هادئة وفريق متعاون. خرجتُ بشعر أجمل مما تخيلت.', author: 'عميلة · نص تجريبي' },
      { stars: 5, text: 'اهتمام بالتفاصيل ونظافة عالية. مكياجي كان مثاليًا ليوم زفافي.', author: 'عروس · نص تجريبي' },
      { stars: 5, text: 'جلسة العناية بالبشرة كانت مريحة جدًا، وبشرتي صارت أنضر.', author: 'عميلة · نص تجريبي' }
    ]
  },

  /* ---------- الحجز (نموذج -> واتساب) ---------- */
  booking: {
    eyebrow: 'الحجز',
    title: 'احجزي موعدكِ <em>خلال دقيقة</em>',
    text: 'املئي النموذج وسيُفتح واتساب برسالة جاهزة لنا. نؤكد معكِ الموعد في أقرب وقت.',
    points: ['بدون حساب أو دفع مسبق', 'تأكيد سريع عبر واتساب', 'استشارة شخصية قبل أي خدمة'],
    form: {
      nameLabel: 'الاسم', namePlaceholder: 'اسمكِ الكريم',
      serviceLabel: 'الخدمة', servicePlaceholder: 'اختاري الخدمة',
      dateLabel: 'التاريخ المفضل',
      timeLabel: 'الوقت المفضل', timeAny: 'أي وقت', timeOptions: ['صباحًا', 'ظهرًا', 'مساءً'],
      noteLabel: 'ملاحظات (اختياري)', notePlaceholder: 'أي تفاصيل تودين إخبارنا بها',
      submit: 'إرسال الحجز عبر واتساب',
      errorMissing: 'فضلًا اكتبي اسمكِ واختاري الخدمة.'
    },
    // سطور رسالة الواتساب الجاهزة
    message: {
      intro: 'مرحبًا Leen، أرغب بحجز موعد:',
      name: 'الاسم', service: 'الخدمة', date: 'التاريخ المفضل', time: 'الوقت المفضل', note: 'ملاحظات'
    }
  },

  /* ---------- التواصل ---------- */
  contact: {
    eyebrow: 'تواصلي معنا',
    title: 'يسعدنا <em>استقبالكِ</em>',
    // TODO: تحقّقي من العنوان وساعات العمل (مأخوذة من موقع Leen Beauty القديم) وأضيفي روابط السوشيال
    addressLabel: 'العنوان',
    address: 'Leipziger Straße 1، 60487 فرانكفورت أم ماين',
    whatsappLabel: 'واتساب',
    hoursLabel: 'ساعات العمل',
    hours: 'الثلاثاء – السبت: 10:00 – 19:00<br>الأحد والاثنين: مغلق',
    cta: 'راسلينا الآن',
    mapTitle: 'خريطة موقع Leen',
    mapQuery: 'Leipziger Straße 1, 60487 Frankfurt am Main'
  }
};
