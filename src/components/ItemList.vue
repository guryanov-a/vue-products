<template>
  <div class="item item--list">
    <div class="row">
      <div class="col col-sm-4">
        <div class="item__image">
          <img :src="image">
        </div>
      </div>
      <div class="col col-sm-4">
        <h2 class="item__title">
          {{ title }}
        </h2>
        <div class="item__description">
          {{ description }}
        </div>
      </div>
      <div class="col col-sm-4">
        <div class="item__tags">
          <ul class="item__tags-group" v-for="tagGroup in tags" v-if="tagGroup.name === 'openings' || tagGroup.name === 'applications'">
            <li class="item__tag" v-for="tag in tagGroup.items">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item-list',
    props: [
      'image',
      'title',
      'description',
      'tags',
    ],
  };
</script>
