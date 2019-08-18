<template>

  <div>

    <div class="logo">
      <img class="logo" src="./../assets/logo.png" alt="logo">
    </div>

    <ul class="amiibo">
      <li v-for="(amiibo , index ) of results" :key="index">
        <figure class="picture">
          <img class="amiiboImg" :src="amiibo.image" :alt="amiibo.picture" />
          <figcaption>{{amiibo.name}}</figcaption>
        </figure>
        <button v-on:click="goToInfo(amiibo)">{{amiibo.name}}</button>
      </li>
    </ul>
  </div>


</template>

<script>
import {API} from '@/common/api';
import axios from "axios";
import AmiiboSearch from "@/components/AmiiboSearch";
import AmiiboButton from "@/components/AmiiboButton";

export default {
  name: "amiibo",
  components: {
    AmiiboButton,
    AmiiboSearch
  },
  data() {
    return {
      results: [],
      errors: [],
      name: []
    };
  },
  methods: {
    goToInfo(amiibo) {
      this.$router.push({ name: "AmiiboCard", params: { amiibo } });
      console.log(amiibo.name);
    }
  },
  created() {
    API.get(``, {}).then(response => {
      this.results = response.data.amiibo;
      this.results = this.results.filter(result => {
        return result.type.toLowerCase() !== "card";
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
    height: 100px;
    width: auto;
    padding-bottom: 10px;
    text-align: center;
}
li {
  list-style-type: none;
  display: inline-block;
}
.amiibo {
  background-color: rgb(61, 127, 136);
  margin: 25px;
}
.amiiboImg {
  height: 150px;
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>
