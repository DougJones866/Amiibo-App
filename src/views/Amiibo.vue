<template>
  <div>
    <div class="logo">
      <img class="logo" src="./../assets/logo.png" alt="logo" />
    </div>
    <div class="container">
      <!-- <select v-model="dexchoose" v-on:change="getAmiiboSeries" class="mainselect">
        <option disabled value=" ">Please select a series</option>
        <option
          v-for="option in dexoptions"
          v-bind:value="option.value"
          v-bind:key="option.value"
        >{{ option.text }}</option>
      </select>-->
      <h1>Select an Amiibo to View</h1>
      <div class="main">
        <ul class="amiibo">
          <li v-for="(amiibo, index) of results" :key="index">
            <div class="amiiboPic">
              <figure class="picture">
                <img
                  @click="goToInfo(amiibo)"
                  class="amiiboImg"
                  :src="amiibo.image"
                  :alt="amiibo.picture"
                />
                <!-- <figcaption>{{amiibo.name}}</figcaption> -->
              </figure>
            </div>
            <!-- <button @click="goToInfo(amiibo)">{{ amiibo.name }}</button> -->
          </li>
        </ul>
      </div>
      <ul class="errors" v-if="errors && errors.length > 0">
        <li v-for="(error, index) of errors" :key="index">{{ error.message }}</li>
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
    AmiiboSearch,
  },
  data() {
    return {
      results: [],
      errors: [],
      name: [],
    };
  },
  methods: {
    goToInfo(amiibo) {
      this.$router.push({ name: "AmiiboCard", params: { amiibo } });
      console.log(amiibo.name);
    },
  },
  created() {
    API.get(``, {})
      .then((response) => {
        this.results = response.data.amiibo;
        this.results = this.results.filter((result) => {
          return result.type.toLowerCase() !== "card";
        });
      })
      .catch((error) => {
        this.erros.push(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  height: 100px;
  width: auto;
  margin-bottom: 25px;
  text-align: center;
}

.container {
  
  }
h1 {
  text-align: center;
  margin: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}

li {
  text-align: center;
  height: 300px;
  width: auto;
  list-style-type: none;
}

.amiiboImg {
  height: 150px;
  width: auto;
}
.amiiboImg:hover {
  border-style: solid;
  height:175px;
  width:auto;
}
/* .amiiboPic {
  background-color: #edf2f4;
  width: 200px;
  height: auto;
  padding: 40px;
} */
.amiiboPic:hover {
  /* background-color: red; */
}
button {
  padding: 0.75em 1em;
  margin-bottom: 15px;
  width: 200px;
  border: none;
  background-color: #2b2d42;
  color: white;
  font-size: 16px;
}

button:hover {
  background-color: #ef233c;
  color: white;
  font-weight: bold;
}
</style>
