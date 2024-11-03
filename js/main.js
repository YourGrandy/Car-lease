const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});

