<template>
  <div>
    <!-- <div class="logo">
      <img class="logo" src="./../assets/logo.png" alt="logo" />
    </div> -->
    <!-- <select v-model="dexchoose" v-on:change="getAmiiboSeries" class="mainselect">
      <option disabled value=" ">Please select a series</option>
      <option
        v-for="option in dexoptions"
        v-bind:value="option.value"
        v-bind:key="option.value"
      >{{ option.text }}</option>
    </select>-->
    <div class="main">
      <ul class="amiibo">
        <li v-for="(amiibo , index ) of results" :key="index">
          <div class="amiiboPic">
            <figure class="picture">
              <img class="amiiboImg" :src="amiibo.image" :alt="amiibo.picture" />
              <!-- <figcaption>{{amiibo.name}}</figcaption> -->
            </figure>
          </div>
          <button v-on:click="goToInfo(amiibo)">{{amiibo.name}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { API } from "@/common/api";
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
  columns: 10px 5;
  padding: 0; 
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-around; 
}

li {
  text-align: center;
  
  height: 300px;
  width: auto;
  list-style-type: none;

}

.amiiboImg {
  max-height: 150px;
  width: auto;
}
.amiiboPic {
  background-color: #EDF2F4; 
  width: 200px; 
  height: auto;
  padding: 40px;
  
}
button {
  padding: 0.75em 1em;
  margin-bottom: 15px;
  width: 200px;
  border: none;
  background-color: #2B2D42; 
  color: white;
  font-size: 16px;
}
</style>
