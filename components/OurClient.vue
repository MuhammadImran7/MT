<template>
<div class="container mx-auto text-center px-5">
    <h2
      class="text-center font-bold text-[#01d486] text-[16px] leading-none uppercase "
    >
      Client IT Solution
    </h2>
    <h3
      class="leading-[1.5em] tracking-[0px] font-extrabold text-[55px] text-black z-[1000] relative "
    >
      Our Happy Clients
    </h3>
    <div class="flex flex-col md:flex-row md:gap-8 justify-center items-center py-10 mb-10">
        <div
          class="pb-3 w-auto"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div class="relative w-full testmonial-card overflow-hidden">
            <img
              :src="testimonial.imageSrc"
              alt="Clients Image"
              class="w-full h-auto testimonial-img"
            />
            <div class="absolute bottom-4 left-2 text-white bg-black bg-opacity-50 p-2">
              <p class="ctext-sm leading-[1.43] font-thin text-white text-left ">“ {{ testimonial.text }} ”</p>
              <p class="text-[24px] font-bold text-[#01d486] leading-none capitalize text-left py-3 ">{{ testimonial.name }}</p>
              <p class="text-[16px] font-normal lowercase text-[#01d486] leading-none text-left ">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
</div>
</template>
<script setup>
const testimonials = [
  {
    imageSrc: "/images/mclub-owner.webp",
    text: 'I appreciate the M Club website\'s exceptional work in showcasing facilities and services, facilitating seamless and engaging connections with our members. Thank you!',
    name: 'MO Chaudry',
    company: 'Mclub SPA and Fitness',
  },
  {
    imageSrc: "/images/steplegal-owner.webp",
    text: ' Delighted with MountainTech consistent delivery of high-quality work. Our website functions seamlessly, and the journey continues smoothly with their involvement. ',
    name: 'Abid Hussain',
    company: 'Step Legal Solicitors',
  },
  {
    imageSrc: "/images/measureWellowner.webp",
    text: ' Having successfully launched the Measure Well Hub, we look forward to continuing to work with MountainTech to evolve, enhance, and develop our services for our customers. ',
    name: 'Dr Nicola Brough (PhD)',
    company: 'Measure WELL',
  },
];
</script>
<style scoped>
.testmonial-card:hover .testimonial-img {
    transition: transform 0.3s ease;
    transform: scale(1.1) rotate(3deg);
    filter: grayscale(1) blur(2px);
}
.testmonial-card:not(:hover) .testimonial-img {
    transform: scale(1);
    transition: transform 0.3s ease;
}
</style>