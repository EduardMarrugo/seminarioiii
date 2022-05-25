<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col>
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      time: null,
      var: null,
      
    };
  },
  methods: {
    ...mapActions("session", ["LOG_OUT", "RECOVERY_SESSION"]),
    alert_biodisaster(d) {
      const Swal = this.$swal;
      Swal.fire({
        icon: "alert",
        title: "Oops...",
        text: "Something went wrong!",
      });
    },
    showAlert() {
      // Use sweetalert2
      Swal.fire("Hello Vue world!!!");
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
      const Swal = this.$swal;
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }, 40000);
  },
};
</script>

<style></style>
