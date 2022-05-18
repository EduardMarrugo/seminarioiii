<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title
              >{{
                isRegister ? stateObj.register.name : stateObj.login.name
              }}
              form</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text>
            <form
              ref="form"
              @submit.prevent="isRegister ? register() : logIn()"
            >
              <v-text-field
                v-model="session_data.username"
                name="username"
                label="Username"
                type="text"
                placeholder="username"
                required
              ></v-text-field>

              <v-text-field
                v-model="session_data.password"
                name="password"
                label="Password"
                type="password"
                placeholder="password"
                required
              ></v-text-field>

              <v-text-field
                v-if="isRegister"
                v-model="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="cocnfirm password"
                required
              ></v-text-field>
              <div class="red--text">{{ errorMessage }}</div>
              <v-btn
                type="submit"
                class="mt-4"
                color="primary"
                value="log in"
                >{{
                  isRegister ? stateObj.register.name : stateObj.login.name
                }}</v-btn
              >
              <div
                class="grey--text mt-4"
                v-on:click="isRegister = !isRegister"
              >
                {{ toggleMessage }}
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      session_data: {
        username: "",
        password: "",
      },
      confirmPassword: "",
      isRegister: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "Register",
          message: "Aleady have an Acoount? login.",
        },
        login: {
          name: "Login",
          message: "Register",
        },
      },
    };
  },
  methods: {
    ...mapActions("session", ["LOG_IN"]),
    logIn() {
      // const { DASHBOARD } = this.VIEWS,
      //   { username } = this.session_data;

      this.LOG_IN(this.session_data);

      //this.replaceRouteWithParams(DASHBOARD, { username: username });
    },
    register() {
      if (this.password == this.confirmPassword) {
        this.isRegister = false;
        this.errorMessage = "";
        this.$refs.form.reset();
      } else {
        this.errorMessage = "password did not match";
      }
    },
  },
  computed: {
    ...mapGetters("session", ["GET_TOKEN_SESSION", "GET_DATA_SESSION"]),
    toggleMessage: function () {
      return this.isRegister
        ? this.stateObj.register.message
        : this.stateObj.login.message;
    },
  },
  created: function () {
    if (
      this.GET_TOKEN_SESSION.username == "" &&
      this.GET_DATA_SESSION.password == ""
    ) {
      
    }
  },
};
</script>
