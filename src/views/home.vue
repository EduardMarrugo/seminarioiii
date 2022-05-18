<template>
  <v-card>
    <v-card-title> Vista Home </v-card-title>
    <v-card-text>
      Texto vista Home
      <g-map></g-map>
    </v-card-text>
  </v-card>
</template>

<script>
import GMap from "../components/GMap.vue";

export default {
  components: { GMap },
  data() {
    return {};
  },
  methods: {},
};
</script>
