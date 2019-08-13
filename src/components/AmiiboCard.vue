<template>
  <div>
    <span class="label">Amiibo Info</span>

    <div class="container">
    <ul class="amiibo" v-if="amiibo && amiibo.length > 0">
      <li class="amiibo" v-for="(amiibo,index) of amiibo" :key="index"></li>
      <p><strong>{{amiibo.character}}</strong></p>
    </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      errors: [],
      name: []
    }
  },
  props: {
    amiiboData: {}
  },
};
</script>