<template>
  <div class="container mx-auto mb-20">
    <!-- Swiper Carousel -->
    <swiper
    :loop="true"
   :navigation="true"
    :modules="[Navigation]"     
   :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in images" :key="index">
        <img :src="item.src" :alt="item.alt" class="carousel-image mx-auto" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import  { Navigation, Pagination } from 'swiper/modules';


const images = [
  { src: '/images/p1.webp', alt: 'Image 1' },
  { src: '/images/p2.webp', alt: 'Image 2' },
  { src: '/images/p3.webp', alt: 'Image 3' },
  { src: '/images/p4.webp', alt: 'Image 4' }
];
</script>

<style>
  .mySwiper {
    width: 100%;
  }
  .swiper-button-prev {
  background: url('/images/arrowleft.webp') no-repeat center center;
  background-size: contain;
  width: 50px;
  height: 50px;
}

/* Hide default text icon */
.swiper-button-prev::after {
  content: '';
}

/* Custom Next Button */
.swiper-button-next {
  background: url('/images/rightarrow.webp') no-repeat center center;
  background-size: contain;
  width: 50px;
  height: 50px;
}
.swiper-button-next::after {
  content: '';
}
</style>
