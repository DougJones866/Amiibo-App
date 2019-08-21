<template>
  <div class="dropdown">
    <div class="value" @click="isOpen = !isOpen">{{ value }}&nbsp;</div>
    <div class="items" v-show="isOpen">
      <div class="item"
        v-for="(item, key) in filteredItems"
        :key="key"
        @click="setItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template> 

<script>
import axios from "axios";


export default {
  name: 'Search',
    props: ['items'],
    data() {
        return {
            isOpen: false,
            value: '',
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        setItem(item) {
            this.value = item
            this.isOpen = false
        }
    },
    computed: {
        filteredItems() {
            return this.items
        }
    }
};
</script>