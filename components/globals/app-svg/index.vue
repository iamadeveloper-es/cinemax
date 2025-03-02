<script lang="ts" setup>
import { defineAsyncComponent, markRaw, shallowRef, watch } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String
  }
});

const icon = shallowRef(null);

watch(
  () => props.name,
  (newName) => {
    icon.value = markRaw(
      defineAsyncComponent(() =>
        import(`~/assets/icons/${newName}.svg`)
      )
    );
  },
  { immediate: true }
);
</script>

<template>
  <component :is="icon" :style="{ color: iconColor }"></component>
</template>

<style></style>
