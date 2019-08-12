<template>
  <div>
    <div class="btn">
      <button 
      v-on:click="amiibo ">
      Test</button>
    </div>
    <ul class="amiibo" v-if="amiibo && amiibo.length > 0">
      <li class="amiibo" v-for="(amiibo,index) of amiibo" :key="index"></li>
      <p><strong>{{amiibo.character}}</strong></p>
    </ul>
  </div>
</template>

<script>
import AmiiboCard from "@/components/AmiiboCard";

export default {
  name: "AmiiboButton",
  data: function() {
    return {
      results: null
    };
  },
  methods: {
    amiibo: function(event) {
      console.log("hello World");
    }
  },
  props: {
    AmiiboName: {
      type: String,
      default: ""
    }
  },
  components: {
    AmiiboCard
  }
};
</script>

<style scoped>
.btn {
  text-align: center;
}
</style>