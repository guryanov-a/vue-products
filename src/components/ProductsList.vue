<template>
  <div class="items-list">
    <div class="row">
      <div class="col" v-for="product in products">
        <item-list
          class="products__item"
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
          :tags="product.tags"
        ></item-list>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemList from './ItemList';

  export default {
    name: 'products-list',

    components: {
      ItemList,
    },

    computed: {
      products() {
        return this.$store.state.filteredProducts;
      },
    },
  };
</script>
