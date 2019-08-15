<template>
  <div>
    <!-- <AmiiboSearch></AmiiboSearch> -->

    <ul class="amiibo">
      <li v-for="(amiibo , index ) of results" :key="index">
        <figure class="picture">
          <img :src="amiibo.image" :alt="amiibo.picture" />
          <figcaption>{{amiibo.name}}</figcaption>
        </figure>
        <button v-on:click="goToInfo(amiibo)">{{amiibo.name}}</button>
        <!-- <AmiiboButton :amiibo-name="amiibo.name">  </AmiiboButton> -->
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
li {
  list-style-type: none;
  display: inline-block;
}
img {
  height: 150px;
  width: auto;
}
</style>
