<template>
  <div>
    <AmiiboSearch></AmiiboSearch>

    <ul class="amiibo">
      <li v-for="(amiibo , index ) of results" :key="index">
        <figure class="picture">
          <img :src="amiibo.image" :alt="amiibo.picture" />
          <figcaption>{{amiibo.name}}</figcaption>
        </figure>
        <AmiiboButton v-on:click="AmiiboData"></AmiiboButton>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import AmiiboSearch from "@/components/AmiiboSearch";
import AmiiboButton from "@/components/AmiiboButton";
import AmiiboCard from "@/components/AmiiboCard";

export default {
  name: "amiibo",
  components: {
    AmiiboButton,
    AmiiboSearch,
    AmiiboCard
  },
  data() {
    return {
      results: [],
      errors: [],
      amiiboCharacter: "",
      amiiboGameSeries: "",
      amiiboName: []
    };
  },
  methods: {
    AmiiboData: function(event) {
      axios.get(`https://www.amiiboapi.com/api/amiibo/`, {}).then(response => {
        this.results = response.data;
        console.log(response);
      });
    }
  },
  mounted() {
    axios.get(`https://www.amiiboapi.com/api/amiibo/`, {}).then(response => {
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
