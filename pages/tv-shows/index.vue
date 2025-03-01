<!-- Giving a name for Vue extension -->
<script lang="ts">
export default {
  name: 'movies-page'
};
</script>

<script lang="ts" setup>
import { navigateTo } from '#app';
const {$api} = useNuxtApp();
const tvShows = ref();

const getTvShows = async () => {
  const params = {
    s: 'dark'
  };
  const {data, error} = await $api.media.tvShows(params);
  tvShows.value = data.value.Search;
};

const goToDetail = (mediaItem: Object) => {
  navigateTo(`/tv-shows/${mediaItem.imdbID}`);
};

getTvShows();

</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="md:container md:mx-auto">
        <UiAppPageTitle
        title="TV Shows"
        />
        <article class="mt-6">
          <div class="grid grid-cols-12 gap-4">
            <UiAppCardMedia
            v-for="(media, index) in tvShows"
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
