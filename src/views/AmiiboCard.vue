<template>
  <div>
    <div class="container">
      <ul class="info">
        <!-- make name headder -->
        <header>
          <h2>{{amiibo.name}}</h2>
        </header>
        <li>
          <h3>Character: {{amiibo.character}}</h3>
        </li>
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
header {
  background-color: #2B2D42;
  display: inline-block;
  max-width: 700px;
  padding-bottom: 10px;
  color: white;
}

.container {
  display: flex;
  max-width: 700px;
  height: auto;
  margin: auto;
  border-style: solid;
  background-color: #EDF2F4;
}
.picture {
  float: right;
  margin-right: 10px;
  display: block;
  padding: 50px;
}
ul {
}
</style>