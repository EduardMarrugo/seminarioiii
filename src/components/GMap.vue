<template>
  <v-card elevation="0" width="100%">
    <v-card-title>Coordenadas</v-card-title>
    <v-card-text>
      Este es el mapa
      {{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude
      <GmapMap
        :center="coordinates"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 350px"
      >
      </GmapMap>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Gmap",
  data() {
    return {
      coordinates: { lat: 0, lng: 0 },
    };
  },
  created: function () {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((err) => alert(err));
  },
};
</script>
