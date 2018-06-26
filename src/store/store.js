import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Small red sphere product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.',
        link: 'http://google.com',
        image: 'http://via.placeholder.com/240x255',
        popularity: 201,
        releaseDate: '2015-10-01',
        tags: [
          {
            name: 'size',
            items: [
              'small',
            ],
          },
          {
            name: 'color',
            items: [
              'red',
            ],
          },
          {
            name: 'shape',
            items: [
              'sphere',
            ],
          },
        ],
        isFiltered: true,
      },
      {
        id: 2,
        title: 'Medium green cube product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.',
        link: 'http://google.com',
        image: 'http://via.placeholder.com/240x255',
        popularity: 50,
        releaseDate: '2016-10-05',
        tags: [
          {
            name: 'size',
            items: [
              'medium',
            ],
          },
          {
            name: 'color',
            items: [
              'green',
            ],
          },
          {
            name: 'shape',
            items: [
              'cube',
            ],
          },
        ],
        isFiltered: true,
      },
      {
        id: 3,
        title: 'Large blue pyramid product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.',
        link: 'http://google.com',
        image: 'http://via.placeholder.com/240x255',
        popularity: 300,
        releaseDate: '2016-10-07',
        tags: [
          {
            name: 'size',
            items: [
              'large',
            ],
          },
          {
            name: 'color',
            items: [
              'blue',
            ],
          },
          {
            name: 'shape',
            items: [
              'pyramid',
            ],
          },
        ],
        isFiltered: true,
      },
      {
        id: 4,
        title: 'Small green pyramid product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.',
        link: 'http://google.com',
        image: 'http://via.placeholder.com/240x255',
        popularity: 1,
        releaseDate: '2016-10-06',
        tags: [
          {
            name: 'size',
            items: [
              'small',
            ],
          },
          {
            name: 'color',
            items: [
              'green',
            ],
          },
          {
            name: 'shape',
            items: [
              'pyramid',
            ],
          },
        ],
        isFiltered: true,
      },
      {
        id: 5,
        title: 'large red cube product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis eum expedita labore laudantium minus mollitia quibusdam quidem tempore vitae? A earum est fuga harum id quam ratione temporibus ullam.',
        link: 'http://google.com',
        image: 'http://via.placeholder.com/240x255',
        popularity: 0,
        releaseDate: '2016-10-08',
        tags: [
          {
            name: 'size',
            items: [
              'large',
            ],
          },
          {
            name: 'color',
            items: [
              'red',
            ],
          },
          {
            name: 'shape',
            items: [
              'cube',
            ],
          },
        ],
        isFiltered: true,
      },
    ],
    filteredProducts: [],
    filters: [
      {
        name: 'size',
        items: [
          {
            name: 'small',
            isActive: false,
          },
          {
            name: 'medium',
            isActive: false,
          },
          {
            name: 'large',
            isActive: false,
          },
        ],
      },
      {
        name: 'color',
        items: [
          {
            name: 'red',
            isActive: false,
          },
          {
            name: 'green',
            isActive: false,
          },
          {
            name: 'blue',
            isActive: false,
          },
        ],
      },
      {
        name: 'shape',
        items: [
          {
            name: 'cube',
            isActive: false,
          },
          {
            name: 'pyramid',
            isActive: false,
          },
          {
            name: 'sphere',
            isActive: false,
          },
        ],
      },
    ],
    sortKinds: [
      'Newest',
      'A-Z',
      'Popular',
    ],
    viewToggles: [
      'Grid',
      'List',
    ],
    view: 'grid',
  },
  mutations: {
    changeView(state, newView) {
      state.view = newView;
    },

    filterProduct(state, filteredProducts) {
      state.filteredProducts = filteredProducts;
    },

    updateProducts(state, newProducts) {
      state.products = newProducts;
    },
  },
});

export default store;
