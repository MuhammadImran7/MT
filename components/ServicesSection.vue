<template>
    <section
      :style="{ backgroundImage: `url(${servicebg})` }"
      class="bg-contain bg-center bg-no-repeat flex justify-center items-center py-12 flex-col"
    >
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div class="col-span-1">
            <p
              class="text-[#01d486] text-[14px] font-extrabold uppercase tracking-[0.5px] text-left "
            >
              OUR SERVICES
            </p>
            <p
              class="text-[32px] font-extrabold leading-[1.5em] text-left mt-4  mb-5"
            >
              Technology services specifically <br />
              built for your business
            </p>
          </div>
          <div class="col-span-1">
            <div
              class="flex justify-between border-t-12 border-[#01d486] pt-[4rem]"
            >
              <p
                class="text-[17px] leading-[26px] font-normal text-[rgba(2,6,38,0.7)] "
              >
                Your business needs powerful solutions and <br />
                guidance to navigate today’s marketplace
              </p>
              <NuxtLink
                to="/about"
                class="text-[13px]  font-extrabold uppercase tracking-[0.93px] text-[#020626] bg-[#0206260D] hover:text-white hover:bg-[#01d486] border-none rounded-none py-[15px] px-[15px] no-underline whitespace-nowrap w-[10rem] h-[3rem] text-center relative"
                >VIEW MORE</NuxtLink
              >
            </div>
          </div>
        </div>
      
      <!-- <div class="container mx-auto overflow-hidden">
        <div
          class="overflow-x-auto flex flex-nowrap py-5 text-center gap-4 horizontal-scrolling-items"
        >
          <div
            v-for="(service, index) in services"
            :key="index"
            class="flex-none bg-white text-center"
          >
            <NuxtLink :to="service.link" class="block w-full">
              <div
                class="serviceMain group text-center bg-white p-8 relative shadow-lg transition-all duration-200 ease-in-out text-black w-[230px] flex flex-col justify-center items-center hover:bg-[#01d486]"
              >
                <p
                  class="text-[17px]  leading-[22px] mb-8 transition-all duration-200 ease-in-out text-[#020626] font-bold serviceName group-hover:text-white"
                >
                  {{ service.title }}
                </p>
                <img
                  :src="service.icon"
                  alt="Services provided Icon"
                  class="h-16 w-16"
                />
                <p
                  class="pt-4  font-semibold text-[#01d486] text-[15px] no-underline serviceBtn group-hover:text-white"
                >
                  Find Out More
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div> -->
      <div class="marquee-container">
    <div class="marquee-content">
      <!-- Original Services -->
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card"
      >
        <NuxtLink :to="service.link" class="block w-full">
          <div
            class="serviceMain group text-center bg-white p-8 relative shadow-lg transition-all duration-200 ease-in-out text-black w-[230px] flex flex-col justify-center items-center hover:bg-[#01d486]"
          >
            <p class="text-[17px] leading-[22px] mb-8 font-bold serviceName group-hover:text-white">
              {{ service.title }}
            </p>
            <img :src="service.icon" alt="Services provided Icon" class="h-16 w-16" />
            <p class="pt-4 font-semibold text-[#01d486] text-[15px] serviceBtn group-hover:text-white">
              Find Out More
            </p>
          </div>
        </NuxtLink>
      </div>

      <!-- Duplicate Services for Infinite Loop Effect -->
      <div
        v-for="(service, index) in services"
        :key="'duplicate-' + index"
        class="service-card"
      >
        <NuxtLink :to="service.link" class="block w-full">
          <div
            class="serviceMain group text-center bg-white p-8 relative shadow-lg transition-all duration-200 ease-in-out text-black w-[230px] flex flex-col justify-center items-center hover:bg-[#01d486]"
          >
            <p class="text-[17px] leading-[22px] mb-8 font-bold serviceName group-hover:text-white">
              {{ service.title }}
            </p>
            <img :src="service.icon" alt="Services provided Icon" class="h-16 w-16" />
            <p class="pt-4 font-semibold text-[#01d486] text-[15px] serviceBtn group-hover:text-white">
              Find Out More
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
    </section>
  </template>
    
    <script>
  const servicebg =  "/images/homeservicebg.webp";
  const frontendIcon = "/images/front-endIcon.webp";
  const backendIcon = "/images/backendicon.webp";
  const designIcon  = "/images/designIconNew.webp";
  const qaIcon =  "/images/qaIcon.webp";
  const dynamicIcon = "/images/microdynaIcon.webp";
  const networkIcon = "/images/networkIcon.webp";
  
  export default {
    data() {
      return {
        servicebg,
        services: [
          { title: "Frontend", icon: frontendIcon, link: "/services/frontend" },
          { title: "Backend", icon: backendIcon, link: "/services/backend" },
          { title: "Design", icon: designIcon, link: "/services/design" },
          { title: "QA", icon: qaIcon, link: "/services/qa" },
          { title: "Cloud", icon: dynamicIcon, link: "/services/cloud" },
          { title: "Dynamics", icon: networkIcon, link: "/services/dynamics" },
        ],
      };
    },
  };
  </script>
    
    <style scoped>
  .border-t-12 {
    border-top-width: 12px;
  }
  /* Marquee Wrapper */
.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  background: #f8f8f8;
  padding: 20px 0;
}

/* Marquee Content with Animation */
.marquee-content {
  display: flex;
  gap: 20px;
  min-width: 200%;
  animation: marquee 20s linear infinite;
  animation-play-state: running; /* Default: Moving */
}

/* Pause animation when hovered */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

/* Keyframes for Infinite Scroll */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

  </style>
    