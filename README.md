# موقع Leen — دليل التعديل

افتحي `index.html` في المتصفح لتشغيل الموقع (يحتاج إنترنت لتحميل الخطوط والمكتبات).

## الهيكل

```
site/
├── index.html            هيكل الصفحة فقط (لا نصوص فيه)
├── content/
│   └── site.js           كل النصوص والروابط ومسارات الصور  ← عدّلي هنا
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
| أغيّر أي نص أو عنوان | `content/site.js` |
| أغيّر رقم الواتساب | `content/site.js` ← `settings.whatsappNumber` و`phoneDisplay` |
| أضيف خدمة أو أحذفها | `content/site.js` ← `services.items` (ينعكس تلقائيًا على قائمة الحجز) |
| أستبدل صورة خدمة | ضعي صورة بنفس الاسم في `assets/images/services/` |
| أضيف صورة للمعرض | ضعيها في `assets/images/gallery/` وأضيفي سطرها في `gallery.images` |
| أغيّر الألوان | أعلى `css/base.css` |
| أغيّر سرعة دوران المعرض | `content/site.js` ← `settings.ringSpeed` |
| أغيّر شكل قسم | `css/<القسم>.css` وللمكوّنات `js/sections/<القسم>.js` |

داخل العناوين استخدمي `<em>كلمة</em>` لتلوين الكلمة بالوردي.

## تغيير فيديو الهيرو

حوّلي الفيديو الجديد إلى إطارات WebP بنفس التسمية، ضعيها في `assets/frames/hero/`، ثم عدّلي `settings.heroFrames.count` في `content/site.js`.
