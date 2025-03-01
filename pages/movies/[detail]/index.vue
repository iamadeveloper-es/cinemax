<script lang="ts">
export default {
  name: 'movie-detail'
};
</script>

<script lang="ts" setup>
const route = useRoute();
const {$api} = useNuxtApp();

const movie = ref({});

const getMovie = async () => {
  const {data, error} = await $api.media.findOneById(route.params.detail);
  movie.value = data.value;
};

getMovie();

</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="md:container md:mx-auto">
        <UiAppPageTitle
        :title="movie.Title"
        />
        <UiAppMediaDetail :media="movie"/>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>
</style>
