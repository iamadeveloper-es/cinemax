<script lang="ts">
export default {
  name: 'app-feedback'
};
</script>


<script lang="ts" setup>
defineProps({
  feedbackType: {
    type: String,
    default: 'error'
  },
  model: {
    type: Object
  }
});
</script>

<template>
  <div class="app-feedback flex flex-col justify-center items-center h-full col-span-12">
    <img v-if="feedbackType === 'error'" src="/images/feedback-error.png" alt="">
    <h3 class="font-heading-three text-heading-three">{{ model?.title }}</h3>
    <p class="font-primary-light text-grey-200">{{ model?.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.app-feedback{
  img{
    max-width: 500px;
  }
}
</style>
