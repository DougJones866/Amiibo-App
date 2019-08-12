<template>
  <div>
    <div class="btn">
      <button 
      v-on:click="amiibo ">
      {{amiibo.name}}</button>
    </div>

  </div>
</template>

<script>
import AmiiboCard from "@/components/AmiiboCard";

export default {
  name: "AmiiboButton",
  data: function() {
    return {
      results: []
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