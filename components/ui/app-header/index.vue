<template>
  <header class="app-header">
    <nav>
      <ul>
        <li v-for="(route, index) in menuRoutes" :key="index">
          <nuxt-link :to="route.route">{{ route.name }}</nuxt-link>
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
    name: 'Series',
    route: '/series'
  }
];
</script>

<style>

</style>
