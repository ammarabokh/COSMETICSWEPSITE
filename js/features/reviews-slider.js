/* Reviews slider (Swiper). */
Leen.features.reviewsSlider = function () {
  if (!window.Swiper) return;
  new window.Swiper('.review-swiper', {
    slidesPerView: 1, spaceBetween: 24, loop: true,
    autoplay: Leen.reduced ? false : { delay: 5200, disableOnInteraction: false },
    pagination: { el: '.review-swiper .swiper-pagination', clickable: true }
  });
};
