<!-- Giving a name for Vue extension -->
<script lang="ts">
export default {
  name: 'page-title'
};
</script>

<script lang="ts" setup>
defineProps({
  title: {
    type: String
  },
  subtitle: {
    type: String
  }
});
</script>

<template>
  <div class="app-title-page">
    <h1 class="uppercase font-heading-one text-heading-one">{{ title }}</h1>
    <p v-if="subtitle" class="font-primary-light">{{ subtitle }}</p>
  </div>
</template>

<style lang="scss">

</style>
