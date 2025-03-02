<script lang="ts">
export default {
  name: 'movie-detail'
};
</script>

<script lang="ts" setup>
import { navigateTo } from '#app';
const route = useRoute();
const {$api} = useNuxtApp();
const movie = ref({});
const relateds = ref();
const hasError = ref(false);
const feedbackModel = reactive({
  title: 'Sorry, No results found',
  text: 'There are no movies or TV shows matching your search terms.'
});

const filteredRelateds = computed(() => {
  return relateds.value?.filter(item => item.imdbID !== movie.value.imdbID);
});

const getMovie = async () => {
  try {
    const {data, error} = await $api.media.findOneById(route.params.detail);
    if(data.value.Response === 'False'){
      throw Error(data.value.Error);
    }
    movie.value = data.value;
    hasError.value = false;
  } catch (error) {
    hasError.value = true;
    feedbackModel.text = error.message;
  }
};

const getRelated = async () => {
  const params = {
    s: movie.value.Title
  };
  const {data, error} = await $api.media.movies(params);
  relateds.value = data.value.Search;
};

const goToDetail = (mediaItem: Object) => {
  navigateTo(`/movies/${mediaItem.imdbID}`);
};

const configView = async () => {
  await getMovie();
  await getRelated();
};

configView();

</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="md:container md:mx-auto">
        <div class="grid grid-cols-12">
          <UiAppPageTitle
          :title="movie.Title"
          :class="['col-span-12', 'md:col-span-7']"
          />
        </div>
        <div v-if="!hasError">
          <UiAppMediaDetail :media="movie"/>
          <article v-if="filteredRelateds && filteredRelateds.length">
            <header class="my-6">
              <h2 class="text-grey-400 font-heading-three text-heading-three">Related</h2>
            </header>
            <div class="grid grid-cols-12 gap-4">
              <UiAppCardMedia
              v-for="(media, index) in filteredRelateds"
              :key="index"
              :media="media"
              :col-span="['col-span-4', 'sm:col-span-3', 'lg:col-span-2']"
              @onClick="goToDetail(media)"
              />
            </div>
          </article>
        </div>
        <GlobalsAppFeedback
        :model="feedbackModel"
        v-else
        />
      </div>
    </section>
  </NuxtLayout>
</template>

<style>
</style>
