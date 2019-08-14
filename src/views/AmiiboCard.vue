<template>
  <div>
    <span class="label">Amiibo Info</span>

    <div class="container">
      <ul class="amiibo" v-if="amiibo && amiibo.length > 0">
        <li class="amiibo" v-for="(amiibo,index) of amiibo" :key="index"></li>
        <p>
          <strong>{{amiibo.character}}</strong>
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      results: [],
      errors: [],
      amiibo: null
    };
  },
  created: function() {
    this.amiibo = this.$route.params.amiibo;
    console.log(this.amiibo);
    axios.get("/", {
      params: name
    });
  }
};
</script>