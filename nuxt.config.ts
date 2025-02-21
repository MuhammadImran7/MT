// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [


    
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'vue3-carousel-nuxt'
  ],
  carousel: {
    prefix: 'MyPrefix'
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css', // Add FontAwesome CSS
  ],
})
