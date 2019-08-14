<template>
  <div>
    <form v-on:submit.prevent="AmiiboData">
      <p>Look for Amiibo</p>
      <ul>
        <li>
          <label>
            Name
            <input v-model="amiiboCharacter" type="text" placeholder="Enter" />
          </label>
        </li>
      </ul>
      <button type="submit">Go</button>
    </form>
    
  </div>
</template> 

<script>
import axios from "axios";


export default {
  name: "Search",
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
  components: {
    
  }
};
</script>