# موقع Leen — دليل التعديل

افتحي `index.html` في المتصفح لتشغيل الموقع (يحتاج إنترنت لتحميل الخطوط والمكتبات).

## الهيكل

```
site/
├── index.html            هيكل الصفحة فقط (لا نصوص فيه)
├── content/
│   ├── ar.js             كل النصوص العربية والروابط ومسارات الصور  ← عدّلي هنا
│   ├── en.js             النسخة الإنجليزية بنفس البنية
│   ├── settings.js       إعدادات مشتركة (رقم الواتساب، اللغة الافتراضية، سرعة المعرض)
│   └── select.js         يختار اللغة (لا حاجة لتعديله)
├── assets/
│   ├── images/
│   │   ├── about/        صور قسم "من نحن"
│   │   ├── services/     صور بطاقات الخدمات (واحدة لكل خدمة)
│   │   └── gallery/      صور معرض "أعمالنا" الدوّار
│   └── frames/hero/      إطارات فيديو الهيرو f001.webp ... f081.webp
├── css/                  ملف تنسيق لكل قسم
│   ├── base.css          الألوان والخطوط (المتغيرات في أعلاه) والتنسيقات العامة
│   ├── nav.css  hero.css  marquee.css  about.css  services.css  offers.css
│   ├── gallery.css  reviews.css  booking.css  contact.css  footer.css
│   ├── buttons.css  loader.css
│   └── responsive.css    تعديلات الجوال والتابلت
└── js/
    ├── utils.js          أدوات مشتركة
    ├── main.js           نقطة التشغيل
    ├── sections/         بناء HTML كل قسم من المحتوى (nav, hero, about, services ...)
    └── features/         السلوكيات: hero-video, ring-gallery, booking-form, reveal ...
```

## تعديلات شائعة

| أريد أن... | أين؟ |
|---|---|
| أغيّر أي نص أو عنوان | `content/ar.js` للعربية و`content/en.js` للإنجليزية |
| أغيّر رقم الواتساب | `content/settings.js` ← `whatsappNumber` و`phoneDisplay` |
| أغيّر اللغة الافتراضية | `content/settings.js` ← `defaultLang` (`'ar'` أو `'en'`) |
| أفتح الموقع مباشرة بالإنجليزية | أضيفي `?lang=en` للرابط |
| أضيف خدمة أو أحذفها | `services.items` في **الملفين** ar.js وen.js (ينعكس تلقائيًا على قائمة الحجز) |
| أستبدل صورة خدمة | ضعي صورة بنفس الاسم في `assets/images/services/` |
| أضيف صورة للمعرض | ضعيها في `assets/images/gallery/` وأضيفي سطرها في `gallery.images` في الملفين |
| أغيّر الألوان | أعلى `css/base.css` |
| أغيّر خطوط وأحجام النسخة الإنجليزية | `css/lang-en.css` |
| أغيّر سرعة دوران المعرض | `content/settings.js` ← `ringSpeed` |
| أغيّر شكل قسم | `css/<القسم>.css` وللمكوّنات `js/sections/<القسم>.js` |

زر تبديل اللغة (EN / عربي) في شريط التنقل، ويحفظ اختيار الزائرة في المتصفح. عند إضافة لغة ثالثة انسخي `en.js` باسم جديد وأضيفيه في `index.html` قبل `select.js`.

داخل العناوين استخدمي `<em>كلمة</em>` لتلوين الكلمة بالوردي.

## تغيير فيديو الهيرو

حوّلي الفيديو الجديد إلى إطارات WebP بنفس التسمية، ضعيها في `assets/frames/hero/`، ثم عدّلي `heroFrames.count` في `content/settings.js`.
