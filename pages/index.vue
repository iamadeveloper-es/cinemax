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
const allMedia = ref();

const getMovies = async () => {
  const params = {
    s: 'batman'
  };
  const {data, error} = await $api.media.movies(params);
  return data.value.Search;
};

const getTvShows = async () => {
  const params = {
    s: 'superman'
  };
  const {data, error} = await $api.media.tvShows(params);
  return data.value.Search;
};

const getAllMedia = async () => {
  movies.value = await getMovies();
  tvShows.value = await getTvShows();
  allMedia.value = [...movies.value, ...tvShows.value];
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
            v-for="(media, index) in allMedia"
            :key="index"
            :media="media"
            @onClick="goToDetail(media)"
            />
          </div>
        </article>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>

</style>
