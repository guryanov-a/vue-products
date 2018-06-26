<template>
  <div id="app">
    <products></products>
  </div>
</template>

<script>
import Products from './components/Products';

export default {
  name: 'app',
  components: {
    Products,
  },
};
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  .container {
    max-width: 1225px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }

  .col {
    padding-left: 15px;
    padding-right: 15px;
  }

  .col-sm-4 {
    width: 33.3333%;
  }

  .col-sm-9 {
    width: 75%;
  }

  .col-sm-3 {
    width: 25%;
  }
</style>
