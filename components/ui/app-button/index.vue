<script lang="ts">
export default {
  name: 'app-button'
};
</script>

<script lang="ts" setup>
const emit = defineEmits(['onClick']);
defineProps({
  text: {
    type: String,
    default: 'Action'
  },
  variant: {
    type: Object,
    default: () => ({
      active: 'bg-primary-500',
      disabled: 'bg-primary-400'
    })
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emitValue = (ev: Event) => {
  emit('onClick', ev);
};
</script>

<template>
  <button class="app-button inline-flex gap-3 justify-center text-white"
  :class="[!disabled ? variant.active : variant.disabled]"
  :disabled="disabled"
  @click="emitValue">
    <span>{{ text }}</span>
  </button>
</template>

<style lang="scss">
.app-button{
  padding: 8px 12px;
  border: none;
  font-size: 12px;
  border-radius: 5px;
  transition: opacity .3s ease-out;

  &:hover:not(:disabled){
    opacity: .8;
  }
}
</style>
