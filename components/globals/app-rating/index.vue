<script lang="ts">
export default {
  name: 'rating'
};
</script>

<script lang="ts" setup>
defineProps({
  rate: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="rating inline-flex items-center gap-1 bg-black p-2 rounded-md">
    <GlobalsAppSvg
    name="star"
    :icon-color="'var(--warning-500)'"/>
    <span class="block text-warning-500">{{ rate }}</span>
  </div>
</template>

<style>

</style>
