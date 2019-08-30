<template>
  <div>
    <div class="container">
      <ul class="info">
        <!-- make name headder -->
        <header>
          <h1>{{amiibo.name}}</h1>
        </header>
        <li>
          <h3>Game Series: {{amiibo.gameSeries}}</h3>
        </li>

        <li>
          <h3>Amiibo Series: {{amiibo.amiiboSeries}}</h3>
        </li>
        <li></li>
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


.container {
  
  /* border-style: solid; */
  background-color: #edf2f4;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}
header {
  background-color: #2b2d42;
  position: relative;
  text-align: center;
  display: block; 
  padding: 25px;

  color: white;
}
.picture {
  float: right;
  margin-right: 10px;
  display: block;
  padding: 50px;
}
li {
  list-style-type: none;
}
</style>