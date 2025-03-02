<script lang="ts">
export default {
  name: 'card-media'
};
</script>

<script lang="ts" setup>
const {deleteFromLocalStorage} = useStorage();

const emit = defineEmits(['onClick']);

const props = defineProps({
  media: {
    type: Object,
    required: true
  },
  colSpan: {
    type: Array,
    default: () => ['col-span-6', 'sm:col-span-4', 'md:col-span-3', 'lg:col-span-2']
  },
  canDelete: {
    type: Boolean,
    default: false
  }
});

const imageOnError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = '/images/image-not-found.jpg';
};

const onClick = () => {
  emit('onClick', props.media);
};

const deleteItem = () => {
  deleteFromLocalStorage(props.media.imdbID);
};

</script>

<template>
  <div
    class="media-card cursor-pointer"
    :class="colSpan">
      <div @click="onClick">
        <div class="media-card-poster">
          <img
          class="poster"
          :src="props.media.Poster"
          @error="imageOnError"
          :alt="media.Title">
          <UiAppButton
          v-if="canDelete"
          :class="['media-card-btn']"
          text="Delete"
          @onClick="deleteItem"
          />
        </div>
        <h4 class="media-card-title my-3">{{ media.Title }}</h4>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.media-card{

  .media-card-poster{
    position: relative;
  }
  .media-card-btn{
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
}
</style>
