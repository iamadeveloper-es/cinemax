<!-- Giving a name for Vue extension -->
<script lang="ts">
export default {
  name: 'my-list-page'
};
</script>

<script lang="ts" setup>
import { navigateTo } from '#app';
import { useUserList } from '~/store/userList';
const userListStore = useUserList();
const {userList} = storeToRefs(userListStore);

const goToDetail = (mediaItem: Object) => {
  navigateTo(`/movies/${mediaItem.imdbID}`);
};

const checkStorageItem = () => {
  const data = localStorage.getItem('viewed');
  data ? userListStore.addToList(JSON.parse(data)) : [];
};

onMounted(() => {
  checkStorageItem();
});

</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="md:container md:mx-auto">
        <UiAppPageTitle
        title="My List"
        />
        <article class="mt-6" v-if="userList && userList.length">
          <div class="grid grid-cols-12 gap-4">
            <UiAppCardMedia
            v-for="(media, index) in userList"
            :key="index"
            :media="media"
            :canDelete="true"
            @onClick="goToDetail(media)"
            />
          </div>
        </article>
        <div v-else>
          <p>Nothing has been saved, yet...</p>
          <UiAppButton
          :class="['my-6']"
          text="Take me Home"
          @onClick="navigateTo('/')"
          />
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style>

</style>
