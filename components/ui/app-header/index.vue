<template>
  <header class="app-header px-3 md:px-0 py-4 bg-primary-300rgba-80">
    <nav class="flex justify-between items-center md:container md:mx-auto">
      <NuxtLink to="/">
        <img class="w-[30px] h-auto" src="/images/cinemax-logo.png" alt="Cinemax Logo" width="40" height="40">
      </NuxtLink>
      <ul class="flex justify-end gap-4">
        <li v-for="(route, index) in menuRoutes" :key="index">
          <NuxtLink :to="route.route" class="text-grey-200 font-primary-light">{{ route.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const menuRoutes = [
  {
    name: 'Movies',
    route: '/movies'
  },
  {
    name: 'TV Shows',
    route: '/tv-shows'
  }
];
</script>

<style lang="scss">
.app-header{
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
}
</style>
