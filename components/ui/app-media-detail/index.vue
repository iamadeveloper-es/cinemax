<script lang="ts">
export default {
  name: 'media-detail'
};
</script>

<script lang="ts" setup>
defineProps({
  media: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="media-detail-container grid grid-cols-12 gap-10 mt-6">
    <div class="media-detail-poster col-span-12 md:col-span-5">
      <img class="w-full" :src="media?.Poster" :alt="media?.Title">
    </div>
    <div class="media-detail-info col-span-12 md:col-span-7">
      <h2 class="font-heading-four text-heading-four mb-4">{{ media?.Title }}</h2>
      <p class="font-primary-light text-grey-200">{{ media?.Plot }}</p>
      <div class="rating mt-4">
        <span class="block mb-1 font-primary-light text-grey-200">Rating:</span>
        <span class="block">{{ media?.imdbRating }}</span>
      </div>
      <div class="mt-4">
        <span class="block mb-1 font-primary-light text-grey-200">Type:</span>
        <span class="block">{{ media?.Type }}</span>
      </div>
      <div class="mt-4">
        <span class="block mb-1 font-primary-light text-grey-200">Release Date:</span>
        <span class="block">{{ media?.Released }}</span>
      </div>
      <div class="mt-4">
        <span class="block mb-1 font-primary-light text-grey-200">Runtime</span>
        <span class="block">{{ media?.Runtime }}</span>
      </div>
      <div class="mt-4">
        <span class="block mb-1 font-primary-light text-grey-200">Genres</span>
        <span class="block">{{ media?.Genre }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.media-detail-poster{
  border-radius: 25px;
  overflow: hidden;
}
</style>
