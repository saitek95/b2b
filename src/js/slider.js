import Swiper from 'swiper'
import { Navigation, Thumbs, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const glassLink = document.querySelector('.product-images__glass');

function getActiveSlideImgSrc(swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex]
  const activeImg = activeSlide?.querySelector('img')

  return activeImg?.getAttribute('src') || ''
}

function updateGlassLink(swiper) {
  if (!glassLink) return

  const imgSrc = getActiveSlideImgSrc(swiper)

  if (!imgSrc) return

  glassLink.href = imgSrc
}
  

const swiperProductSliderThumb = new Swiper('.product-images__thumbs', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideToClickedSlide: true,
});

const swiperProductSlider = new Swiper('.product-images__main--swiper', {
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
      updateGlassLink(swiper);
    },
    slideChange(swiper) {
      updateGlassLink(swiper);
    },
  },
})

glassLink?.addEventListener('click', function (e) {
  e.preventDefault()

  const slides = [...swiperProductSlider.slides]

  const items = slides.map((slide) => {
    const img = slide.querySelector('img')
    const src = img?.getAttribute('src')

    return {
      src,
      type: 'image',
    }
  }).filter(item => item.src)

  Fancybox.show(items, {
    startIndex: swiperProductSlider.activeIndex,
  })
})

const swiperOtherProduct = new Swiper('.other-product__swiper', {
  modules: [Navigation], 
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.other-product__next',
    prevEl: '.other-product__prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    640: {
      slidesPerView: 2.3,
    },
    991: {
      slidesPerView: 3.3,
    },
    1440: {
      slidesPerView: 4,
    }
  }
})

document.addEventListener('DOMContentLoaded', function() {
    Fancybox.bind('[data-fancybox]', {});
})