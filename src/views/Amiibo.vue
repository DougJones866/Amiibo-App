<template>
  <div>



    <ul class="amiibo">
      <li v-for="(amiibo , index ) of results" :key="index">
        <figure class="picture">
           <img :src="amiibo.image" :alt="amiibo.picture" />
           <figcaption>{{amiibo.name}}</figcaption>
        </figure>
        <AmiiboButton msg="Hello!" /> 
      </li>
    </ul>




 
  </div>
</template>

<script>
import { API } from "@/common/api";
import AmiiboButton from "@/components/AmiiboButton";

export default {
  name: "Amiibo",
  data() {
    return {
      results: null,
      errors: []
    }
  },
  mounted() {
    API.get().then(response => {
      this.results = response.data.amiibo;
      this.results = this.results.filter(result => {
        return result.type.toLowerCase() !== "card";
      });
    });
  },
  components: {
    AmiiboButton
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
  height: 250px;
  width: auto;
}
</style>
