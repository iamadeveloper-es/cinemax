<script lang="ts">
export default {
  name: 'media-detail'
};
</script>

<script lang="ts" setup>
const {setToLocalStorage} = useStorage();

const props = defineProps({
  media: {
    type: Object,
    required: true
  }
});

const storedValue = ref([]);

const hasBeenWhatched = computed(() => {
  return storedValue.value.some(item => item.imdbID === props.media.imdbID);
});

const imageOnError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = '/images/image-not-found.jpg';
};

const playMedia = () => {
  setToLocalStorage(props.media);
  checkStorageItem();
};

const checkStorageItem = () => {
  const data = localStorage.getItem('viewed');
  storedValue.value = data ? JSON.parse(data) : [];
};

onMounted(() => {
  checkStorageItem();
});

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
        <GlobalsAppRating :rate="media?.imdbRating ? media?.imdbRating : 'N/A'"/>
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
      <UiAppButton
      :class="['my-6']"
      :text="!hasBeenWhatched ? 'Start watching' : 'Allready watched'"
      :disabled="hasBeenWhatched"
      @onClick="playMedia"
      />
    </div>
  </div>
</template>

<style lang="scss">
.media-detail-poster{
  border-radius: 15px;
  overflow: hidden;
}
</style>
