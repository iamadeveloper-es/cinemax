<script lang="ts">
export default {
  name: 'card-media'
};
</script>

<script lang="ts" setup>
const emit = defineEmits(['onClick']);

const props = defineProps({
  media: {
    type: Object,
    required: true
  }
});

const onClick = () => {
  emit('onClick', props.media);
};

</script>

<template>
  <div
    class="media-card col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 cursor-pointer"
    @click="onClick">
      <img :src="media.Poster" :alt="media.Title">
      <h4 class="media-card-title my-3">{{ media.Title }}</h4>
  </div>
</template>

<style>

</style>
