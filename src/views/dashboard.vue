<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-btn @click="showAlert">Hola</v-btn>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
export default {
  data() {
    return {
      time: null,
      var: null,
    };
  },
  methods: {
    ...mapActions("session", ["LOG_OUT", "RECOVERY_SESSION"]),
    current_time(d) {
      alert("Hola mama bivho");
    },
    showAlert() {
      // Use sweetalert2
      Swal.fire('Hello Vue world!!!');
    },
  },
  computed: {
    ...mapGetters("session", ["GET_DATA_SESSION"]),
  },
  watch: {
    // GET_DATA_SESSION: {
    //   deep: true,
    //   handler: (newVal, oldVal) => {
    //     if (
    //       this.GET_TOKEN_SESSION.username == "" &&
    //       this.GET_DATA_SESSION.password == ""
    //     ) {
    //       this.LOG_OUT();
    //       this.replaceRoute(LOGIN);
    //     }
    //   },
    // },
  },
  mounted: function () {
    this.RECOVERY_SESSION();
  },
  created: function () {
    this.var = setInterval(() => {
      this.current_time();
    }, 100000000);
  },
};
</script>

<style>

</style>
