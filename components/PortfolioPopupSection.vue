<template>
    <div class="container mx-auto pb-10 px-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- First large image -->
        <div>
          <a href="#" @click.prevent="openModal(0)">
            <img src="/images/miTop.webp" alt="Project Image" class="w-full h-auto" />
          </a>
        </div>
  
        <!-- Four images (2 columns on medium, 4 on large) -->
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(image, index) in modalImages.slice(1, 5)" :key="index">
            <a href="#" @click.prevent="openModal(index + 1)">
              <img :src="image.src" :alt="image.alt" class="w-full h-auto" />
            </a>
          </div>
        </div>
      </div>
  
      <!-- Second row with four images -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div v-for="(image, index) in modalImages.slice(5)" :key="index + 5">
          <a href="#" @click.prevent="openModal(index + 5)">
            <img :src="image.src" :alt="image.alt" class="w-full h-auto" />
          </a>
        </div>
      </div>
  
      <!-- Modal -->
      <transition name="fade">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-6 rounded-lg w-full max-w-3xl mx-auto relative">
            <button @click="closeModal" class="absolute top-2 right-2 text-black text-2xl">
              &times;
            </button>
            <div class="text-center">
              <img :src="modalImage.src" :alt="modalImage.alt" class="w-full h-auto mb-4" />
              <p class="text-gray-700">{{ modalImage.description }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const modalImages = ref([
    { src: '/images/mi1.webp', alt: 'Our Project Image', description: 'Empowering Wellness: Introducing the Measure Well hub' },
    { src: '/images/mi2.webp', alt: 'Our Project Image', description: 'Crafting Legal Excellence: The Step Legal Website' },
    { src: '/images/mi3.webp', alt: 'Our Project Image', description: 'Crafted by Us, Inspired for You: Welcome to Heavenly Sleep' },
    { src: '/images/mi4.webp', alt: 'Our Project Image', description: 'Premier health and fitness clubs' },
    { src: '/images/mi5.webp', alt: 'Our Project Image', description: 'Crafting Digital Elegance: The Femi Health & Beauty Website' },
    { src: '/images/mi6.webp', alt: 'Our Project Image', description: 'Portfolio Highlight: WS Temporary Buildings Website' },
    { src: '/images/mi7.webp', alt: 'Our Project Image', description: 'Introducing our latest project: the Bed Factory Direct website.' },
    { src: '/images/mi8.webp', alt: 'Our Project Image', description: 'SNUGBEDS Manufacturers' },
    { src: '/images/mi9.webp', alt: 'Our Project Image', description: 'Joseph Edwards & Sons' },
  ]);
  
  const showModal = ref(false);
  const modalImage = ref({});
  
  const openModal = (index) => {
    modalImage.value = modalImages.value[index];
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  