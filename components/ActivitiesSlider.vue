<template>
    <div>
        <h1
        class="text-center text-65px font-extrabold leading-[1.5em] tracking-normal text-black relative mb-8"
      >
      Activities
      </h1>
        <ClientOnly>
  <swiper
    :modules="[Navigation]"
    :slides-per-view="1.5"
    :centeredSlides="true"
    :loop="true"
    :navigation="true"
    :effect="'coverflow'"
    class="mySwiper mb-20"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <div class="relative">
        <img :src="image.src" class="w-full object-cover rounded-lg shadow-lg" />
        <p class="absolute bottom-5 left-5 text-white text-4xl font-bold">{{ image.title }}</p>
      </div>
    </swiper-slide>
  </swiper>
</ClientOnly>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const images = [
  { src: "/images/1.webp", title: "Indoor Games" },
  { src: "/images/ajk2.webp", title: "Outdoor Games" },
  { src: "/images/OfficeTour.webp", title: "Adventure" },
  { src: "/images/tttournament-1.webp", title: "Table Tennis Tournament" }
];
</script>
<style scoped>
.text-65px{
  font-size: 65px;
}
.mySwiper {
  width: 100%;
  max-width: 1200px;
}
/* Fix Coverflow Effect */
.swiper-slide {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Centered Slide */
.swiper-slide-active .slide-image {
  filter: brightness(100%) blur(0px) !important;
  transform: scale(1) !important;
}

/* Side Slides (Faded & Blurred) */
.swiper-slide:not(.swiper-slide-active) .slide-image {
  filter: brightness(50%) blur(4px) !important;
  transform: scale(0.9) !important;
}
</style>