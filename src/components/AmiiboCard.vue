<template>
<div class="card">
  <h1>Test</h1>
</div>
</template>



<script>
import { API } from "@/common/api";

export default {
  name: "AmiiboCard",
  data() {
    return {

    }
  },
  props: {
      amiiboSeries:{},
      character:{},
  }
};
</script>