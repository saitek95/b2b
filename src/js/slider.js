import Swiper from 'swiper'
import { Navigation, Thumbs, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

// const glassLink = document.querySelector('.product-images__glass');

// function updateGlassLink(swiper) {
//   if (!glassLink) return;

//   const activeSlide = swiper.slides[swiper.activeIndex]
//   const activeImg = activeSlide?.querySelector('img')
//   const imgSrc = activeImg?.getAttribute('src')

//   if (!imgSrc) return

//   glassLink.href = imgSrc
//   console.log(glassLink.href)
// }
  

const swiperProductSliderThumb = new Swiper('.product-images__thumbs', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideToClickedSlide: true,
});

const swiperProductSlider = new Swiper('.product-images__main', {
  modules: [Navigation, Thumbs], 
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.product-images__button-next',
    prevEl: '.product-images__button-prev',
  },
  thumbs: {
    swiper: swiperProductSliderThumb,
  },
  on: {
    init(swiper) {
      updateGlassLink(swiper)
    },
    slideChange(swiper) {
      updateGlassLink(swiper)
    },
  },
})
