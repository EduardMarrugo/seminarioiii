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

          <v-card-text v-if="isGuest == false">
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

              <v-btn class="mt-4" color="primary" value="log in" @click="isGuest = true" v-if="isRegister == false">{{
                stateObj.guestAccess.name
              }}</v-btn>

              <div
                class="grey--text mt-4"
                v-on:click="isRegister = !isRegister"
              >
                {{ toggleMessage }}
              </div>
            </form>
          </v-card-text>
          <v-card-text v-else>
            <form ref="form" @submit.prevent="guestLogin()">
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

              <div class="red--text">{{ errorMessage }}</div>
              <v-btn
                type="submit"
                class="mt-4"
                color="primary"
                value="log in"
                >{{ stateObj.guestAccess.name }}</v-btn
              >
              <div
                class="grey--text mt-4"
                v-on:click="isRegister = !isRegister, isGuest = false;"
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
        username: "ANDREE",
        password: "123",
      },
      confirmPassword: "",
      isGuest: false,
      isRegister: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "Resgistrarse",
          message: "¿Ya tienes un cuenta? Inicia sesión.",
        },
        login: {
          name: "Iniciar sesión",
          message: "Registrarse.",
        },
        guestAccess: {
          name: "Ingresar como invitado",
          message: "Iniciar sesión.",
        },
      },
    };
  },
  methods: {
    ...mapActions("session", ["LOG_IN"]),
    ...mapActions("db_simulator", ["ADD_USER"]),
    logIn() {
      const Swal = this.$swal;
      if (typeof this.GET_USER(this.session_data) == "undefined") {
        Swal.fire(this.$t("user_does_not_exist"));
      } else {
        this.LOG_IN(this.session_data);
      }
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
    guestLogin: function () {},
  },
  computed: {
    ...mapGetters("session", ["GET_TOKEN_SESSION", "GET_DATA_SESSION"]),
    ...mapGetters("db_simulator", ["GET_USER"]),
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
