<template>
  <div class="container">
    <div class="products">
      <div class="row">
        <div class="col col-sm-9">
          <div class="products__top">
            <div class="products__quantity">Total number of products: {{ numberOfProducts }}</div>
            <div class="view-toggles">
              <label class="view-toggles__title">Change view</label>
              <ul class="view-toggles__list">
                <li
                  v-for="(viewToggle, index) in viewToggles"
                  class="view-toggles__item"
                  :class="{active: isViewActive(viewToggle)}"
                  :key="`viewToggle-${index}`"
                >
                  <button class="view-toggle" @click="changeView(viewToggle)">{{ viewToggle }}</button>
                </li>
              </ul>
            </div>
          </div>
          <main>
            <products-grid class="products__list" v-if="view === 'grid'"></products-grid>
            <products-list class="products__list" v-if="view === 'list'"></products-list>
          </main>
        </div>
        <div class="col col-sm-3">
          <aside>
            <div class="products__filters filters filters--aside">
              <h2 class="filters__title">Filter by:</h2>
              <div class="filter-group" v-for="(filterGroup, index) in filters" :key="`filterGroup-${index}`">
                <h3 class="filter-group__title">{{ filterGroup.name }}</h3>
                <ul class="filter-list">
                  <li class="filter-list__item filter" v-for="(filter, index) in filterGroup.items" :key="`filter-${index}`">
                    <input
                      type="checkbox"
                      :checked="filter.isActive"
                      @click="toggleFilter(filter)"
                    ><label>{{ filter.name }}</label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { includes } from 'lodash';
  import ProductsGrid from './ProductsGrid';
  import ProductsList from './ProductsList';
  import ProductsFilters from './Filters';
  import ProductsSettings from './Settings';

  export default {
    name: 'products',

    components: {
      ProductsGrid,
      ProductsList,
      ProductsFilters,
      ProductsSettings,
    },

    computed: {
      viewToggles() {
        return this.$store.state.viewToggles;
      },

      filters() {
        return this.$store.state.filters;
      },

      view() {
        return this.$store.state.view;
      },

      numberOfProducts() {
        return this.$store.state.products.length;
      },

      activeFilters() {
        const filteredFilters = [];

        this.$store.state.filters.forEach((filterGroup) => {
          const groupFilteredFilters = {};
          const filteredItems = [];

          filterGroup.items.forEach((filterItem) => {
            if (filterItem.isActive) {
              filteredItems.push(filterItem);
            }
          });

          if (filteredItems.length) {
            groupFilteredFilters.name = filterGroup.name;
            groupFilteredFilters.items = filteredItems;

            filteredFilters.push(groupFilteredFilters);
          }
        });

        return filteredFilters;
      },
    },

    methods: {
      isViewActive(viewToCheck) {
        return viewToCheck.toLowerCase() === this.view;
      },

      changeView(newView) {
        this.$store.commit('changeView', newView.toLowerCase());
      },

      filterProducts() {
        const products = this.$store.state.products;
        const activeFilters = this.activeFilters;
        const filteredProducts = [];

        products.forEach((product) => {
          const tags = product.tags;
          let isFiltered = false;

          if (!activeFilters.length) {
            isFiltered = true;
          }

          isFiltered = activeFilters.every((activeFilterGroup) => {
            for (let i = 0; i < tags.length; i += 1) {
              if (activeFilterGroup.name === tags[i].name) {
                const tagsGroupItems = tags[i].items;
                const activeFilterGroupItems = activeFilterGroup.items;

                return activeFilterGroupItems.every((activeFilterGroupItem) => {
                  return includes(tagsGroupItems, activeFilterGroupItem.name);
                });
              }
            }

            return false;
          });

          if (isFiltered) {
            filteredProducts.push(product);
          }
        });

        this.$store.commit('filterProduct', filteredProducts);
      },

      toggleFilter(filter) {
        filter.isActive = !filter.isActive;

        this.filterProducts();
      },
    },

    created() {
      this.filterProducts();
    },
  };
</script>

<style>
  .products {
    padding: 50px 0;
  }

  .view-toggles__list {
    padding: 0;
    list-style: none;
  }

  .filter-list {
    padding: 0;
    list-style: none;
  }
</style>
