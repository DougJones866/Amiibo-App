<template>
  <div>
    <v-button>Button
    </v-button>
    <p>Test</p>
  </div>
</template>

<script>
export default {
  name: "amiiboButton",
  props: {
    OnClick: {
      type: Function,
      required: true
    }
  }
};
</script>