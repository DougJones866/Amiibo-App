<template>
  <div>
    <router-link to="/">Home</router-link>
    <div class="container">
      <header>
        <h2>{{amiibo.name}}</h2>
      </header>
      <ul class="info"> 
        <!-- make name headder -->
      
        <li>
          <h3>Game Series: {{amiibo.gameSeries}}</h3>
        </li>

        <li>
          <h3>Amiibo Series: {{amiibo.amiiboSeries}}</h3>
        </li>
      </ul>
      <figure class="picture">
        <img :src="amiibo.image" :alt="amiibo.picture" />
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API } from "@/common/api";

export default {
  data() {
    return {
      results: [],
      errors: [],
      amiibo: null
    };
  },
  created: function() {
    API.get("", {
      params: {}
    });
    this.amiibo = this.$route.params.amiibo;
    console.log(this.amiibo);
  }
};
</script>

<style scoped>
header{
  text-align: center;
  background-color: aquamarine;
  
}

.container {
  display: flex;
  max-width: 700px;
  margin: auto;
  border-style:solid;
}
.picture {
  float: right;
  margin-right: 10px;
  display: block;
}
ul {}
</style>