
<template>
  <NuxtLayout>
  <Transition name="page" mode="out-in">
      <NuxtPage />
    </Transition>
  </NuxtLayout>
</template>

<script setup>
// You can import any global styles or scripts here if necessary
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>