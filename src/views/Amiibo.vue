<template>

  <div>

    <div class="logo">
      <img class="logo" src="./../assets/logo.png" alt="logo">
    </div>

    <ul class="amiibo">
      <li v-for="(amiibo , index ) of results" :key="index">
        <figure class="picture">
          <img class="amiiboImg" :src="amiibo.image" :alt="amiibo.picture" />
          <!-- <figcaption>{{amiibo.name}}</figcaption> -->
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
ul {
  column-count: 5;
  list-style-type: none;
}
li {
  text-align: center;
  display: inline-block;
  width: auto;
}
.amiibo {
  margin: 25px;
}
.amiiboImg {
  height: 150px;
  width: auto;

}
</style>
