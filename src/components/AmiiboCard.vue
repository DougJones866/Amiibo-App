<template>
  <div>
    <span class="label">Amiibo Info</span>

    <div class="container">
      <div v-for="(amiibo , index ) of results" :key="index" >
       <p>{{amiibo.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    amiiboData: {}
  },
};
</script>