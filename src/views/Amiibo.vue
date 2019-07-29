<template>
  <div class="main">
    <p class="item" v-for="(amiibo , index ) of results" :key="index">
      {{amiibo}}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import {API} from '@/common/api';



export default {
  name: "Amiibo",
  data() {
    return {
      results: null,
      errors: []
    };
  },
  mounted() {
    axios
      API.get()
      .then(response => (this.results = response.data.amiibo));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
