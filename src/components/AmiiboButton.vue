<template>
  <div>
    <div class="btn">
      <button v-on:click="amiibo ">{{amiibo.name}}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "AmiiboButton",
  data: function() {
    return {
      results: [],
      name: this.amiiboName
    };
  },
  created: function() {
    console.log("this.amiiboName");
  },
  methods: {
    amiibo: function(event) {
      axios.get(`https://www.amiiboapi.com/api/amiibo/`, {}).then(response => {
        this.results = response.data;
        console.log(response);
      });
    }
  },
  props: ["amiiboName"],

  components: {
   
  }
};
</script>

<style scoped>
.btn {
  text-align: center;
}
</style>