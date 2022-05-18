<template>
  <!-- <Login/> -->
  <div>
    <login-form />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import {  mapActions } from "vuex";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
  methods: {
    ...mapActions("session", ["LOG_OUT", "RECOVERY_SESSION"]),
  },
  mounted: function () {
    this.RECOVERY_SESSION();
  },
};
</script>
