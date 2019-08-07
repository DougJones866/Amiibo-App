<template>
  <div class="btn">
    <button v-on:click="showInfo">{{ msg }}</button>
  </div>
</template>

<script>
import { API } from "@/common/api";
import AmiiboCard from '@/components/AmiiboCard'

export default {
  name: "AmiiboButton",
  data () {
    return{
      results: null,
    }
  },
  methods: {
    showInfo: function() {
      console.log(this.msg);
    }
  },
  props: {
    msg: String
  }
};
</script>