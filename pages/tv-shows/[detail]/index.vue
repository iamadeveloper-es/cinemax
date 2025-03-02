<script lang="ts">
export default {
  name: 'tv-show-detail'
};
</script>

<script lang="ts" setup>
const route = useRoute();
const {$api} = useNuxtApp();

const tvShow = ref({});
const hasError = ref(false);
const feedbackModel = reactive({
  title: 'Sorry, No results found',
  text: 'There are no movies or TV shows matching your search terms.'
});

const getTvShow = async () => {
  try {
    const {data, error} = await $api.media.findOneById(route.params.detail);
    if(data.value.Response === 'False'){
      throw Error(data.value.Error);
    }
    tvShow.value = data.value;
    hasError.value = false;
  } catch (error) {
    hasError.value = true;
    feedbackModel.text = error.message;
  }
};

getTvShow();

</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="md:container md:mx-auto">
        <UiAppPageTitle
        :title="tvShow.Title"
        :class="['col-span-12', 'md:col-span-7']"
        />
        <UiAppMediaDetail v-if="!hasError" :media="tvShow"/>
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
