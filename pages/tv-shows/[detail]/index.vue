<script lang="ts">
export default {
  name: 'tv-show-detail'
};
</script>

<script lang="ts" setup>
const route = useRoute();
const {$api} = useNuxtApp();

const tvShow = ref({});

const getTvShow = async () => {
  const {data, error} = await $api.media.findOneById(route.params.detail);
  tvShow.value = data.value;
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
        <UiAppMediaDetail :media="tvShow"/>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>
</style>
