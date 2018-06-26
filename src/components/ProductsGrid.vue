<template>
  <div class="items-grid">
    <div class="row">
      <div class="col col-sm-4" v-for="product in products">
        <item-grid
          class="products__item"
          :key="product.id"
          :image="product.image"
          :title="product.title"
        ></item-grid>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemGrid from './ItemGrid';

  export default {
    name: 'products-grid',

    components: {
      ItemGrid,
    },

    computed: {
      products() {
        return this.$store.state.filteredProducts;
      },
    },
  };
</script>
