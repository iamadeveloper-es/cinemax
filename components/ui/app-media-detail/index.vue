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

const imageOnError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = '/images/image-not-found.jpg';
};

</script>

<template>
  <div class="media-detail-container grid grid-cols-12 gap-4 md:gap-10 mt-6">
    <div class="media-detail-poster col-span-12 md:col-span-4">
      <img class="w-full" :src="media?.Poster" @error="imageOnError" :alt="media?.Title">
    </div>
    <div class="media-detail-info col-span-12 md:col-span-7">
      <!-- <h2 class="font-heading-four text-heading-four mb-4">{{ media?.Title }}</h2> -->
      <span class="block mb-1 font-primary-light text-grey-200">Description:</span>
      <p class="font-primary-light">{{ media?.Plot }}</p>
      <div class="mt-4">
        <span class="block mb-1 font-primary-light text-grey-200">Rating:</span>
        <GlobalsAppRating :rate="media.imdbRating"/>
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
