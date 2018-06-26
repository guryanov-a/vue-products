<template>
  <div class="item item--grid">
    <div class="item__image-wrapper">
      <img class="item__image" :src="image">
    </div>
    <h2 class="item__title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'item-grid',
    props: [
      'image',
      'title',
    ],
  };
</script>

<style scoped>
  .item {
    margin-bottom: 55px;
  }

  .item__title {
    margin-bottom: 15px;
  }

  .item__image {
    width: 100%;
  }
</style>
