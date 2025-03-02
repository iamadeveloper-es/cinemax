<!-- Giving a name for Vue extension -->
<script lang="ts">
export default {
  name: 'movies-page'
};
</script>

<script lang="ts" setup>
import { navigateTo } from '#app';
const {$api} = useNuxtApp();
const movies = ref([]);
const searchValue = ref('');
const hasError = ref(false);

const feedbackModel = {
  title: 'Sorry, No results found',
  text: 'There are no movies or TV shows matching your search terms.'
};

const getMovies = async () => {
  try {
    movies.value = [];
    const params = {
      s: searchValue.value ? searchValue.value : 'star wars',
    };
    const {data, error} = await $api.media.movies(params);

    if(data.value.Response === 'False'){
      throw Error(data.value.Error);
    }
    movies.value = data.value.Search;
    hasError.value = false;
  } catch (error) {
    hasError.value = true;
  }
};

const goToDetail = (mediaItem: Object) => {
  navigateTo(`/movies/${mediaItem.imdbID}`);
};

const startSearch = () => {
  if(searchValue.value.length > 3){
    getMovies();
  }
};

getMovies();

</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="md:container md:mx-auto">
        <UiAppPageTitle
        title="Movies"
        />
        <form @submit.prevent="startSearch">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                  <input type="text" id="first_name" class="bg-grey-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." v-model="searchValue" />
                  <UiAppButton
                  :class="['my-5']"
                  :disabled="searchValue.length < 3"
                  type="submit"
                  text="Search"
                  />
              </div>
          </div>
        </form>
        <article class="mt-6">
          <div class="grid grid-cols-12 gap-4">
            <template v-if="movies && movies.length > 0">
              <UiAppCardMedia
              v-for="(media, index) in movies"
              :key="index"
              :media="media"
              @onClick="goToDetail(media)"
              />
            </template>
            <template v-else-if="!hasError">
              <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" v-for="(item, index) in 18"
              :key="index">
                <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                  </svg>
                </div>
              </div>
            </template>
            <GlobalsAppFeedback
            :model="feedbackModel"
            v-else
            />
          </div>
        </article>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>

</style>
