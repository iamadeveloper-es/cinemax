<!-- Giving a name for Vue extension -->
<script lang="ts">
export default {
  name: 'home-page'
};
</script>

<script lang="ts" setup>
import { navigateTo } from '#app';
import { UiAppPageTitle } from '#components';
const {$api} = useNuxtApp();
const movies = ref();
const tvShows = ref();
const allMedia = ref([]);
const isLoading = ref(false);

const getMovies = async () => {
  const params = {
    s: 'batman'
  };
  const {data, error} = await $api.media.movies(params);
  return data.value.Search;
};

const getTvShows = async () => {
  const params = {
    s: 'terror'
  };
  const {data, error} = await $api.media.tvShows(params);
  return data.value.Search;
};

const getAllMedia = async () => {
  isLoading.value = true;
  try {
    const moviesData = await getMovies();
    const tvShowsData = await getTvShows();
    isLoading.value = false;

    movies.value = moviesData || [];
    tvShows.value = tvShowsData || [];
    allMedia.value = [...movies.value, ...tvShows.value];

  } catch (error) {
    console.error('Error fetching data:', error);
    allMedia.value = [];
  }
};

getAllMedia();

const goToDetail = (mediaItem: Object) => {
  const mediaType = {
    'movie': 'movies',
    'series': 'tv-shows'
  };
  navigateTo(`/${mediaType[mediaItem.Type]}/${mediaItem.imdbID}`);
};
</script>

<template>
  <NuxtLayout name="default">
    <section class="section">
      <div class="md:container md:mx-auto">
        <UiAppPageTitle
        title="Cinemax"
        subtitle="Watch everything anytime anywhere"
        />
        <article>
          <header class="my-6">
            <h2 class="text-grey-400 font-heading-three text-heading-three">All</h2>
          </header>
          <div class="grid grid-cols-12 gap-4">
              <UiAppCardMedia
              v-show="!isLoading"
              v-for="(media, index) in allMedia"
              :key="index"
              :media="media"
              @onClick="goToDetail(media)"
              />
              <div v-show="isLoading && movies?.length <= 0" class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" v-for="(item, index) in 18"
              :key="index">
                <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
          </div>
        </article>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>

</style>
