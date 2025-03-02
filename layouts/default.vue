<script lang="ts" setup>

</script>

<template>
<div class="app-wrapper bg-grey-900">
  <UiAppHeader/>
    <main class="app-wrapper-content">
      <slot></slot>
    </main>
    <UiAppFooter/>
</div>
</template>

<style lang="scss">
.app-wrapper{
  background-image: url('/images/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.app-wrapper-content{
  min-height: 100vh;
}
</style>
