<template>
  <div class="btn">
    <button v-on:click="amiiboData ">Test</button>
  </div>
</template>

<script>

export default {
  name: "AmiiboButton",
  data: function () {
    return{
      results: null,
    }
  },
  methods: {
    amiiboData: function(event) {
      console.log("hello World")
    }
  },
  props: {
    AmiiboName: {
      type: String,
      default: '',
    }
  }
};
</script>