<template>
  <div>
    <v-toolbar color="primary" dark fixed rounded="">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="GET_DATA_SESSION.username != ''"
      ></v-app-bar-nav-icon>
      <v-toolbar-title> {{ $t("title.app") }}</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" bottom temporary absolute>
      <v-list>
        <v-list-item link @click="logOut">
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ GET_DATA_SESSION.username || "USERANME" }}
            </v-list-item-title>
            <v-list-item-subtitle>log out</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="replaceRoute(item.view)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      items: [
        { title: this.$t("dashboard_opc.home"), icon: "mdi-view-dashboard", view: "" },
        { title: this.$t("dashboard_opc.emergency_contacts"), icon: "mdi-contacts", view: "" },
        { title: this.$t("dashboard_opc.profile"), icon: "mdi-account", view: "" },
        { title: this.$t("dashboard_opc.history"), icon: "mdi-clipboard-text-clock", view: "" },
      ],
      username: this.$route.params.username,
    };
  },
  methods: {
    ...mapActions("session", ["LOG_OUT"]),
    logOut: function () {
      //const { LOGIN } = this.VIEWS;
      this.LOG_OUT();
      //this.replaceRoute(LOGIN);
    },
  },
  created: function () {
    const { HOME, CONTACT, PROFILE, HISTORY } = this.VIEWS;
    this.items[0].view = HOME;
    this.items[1].view = CONTACT;
    this.items[2].view = PROFILE;
    this.items[3].view = HISTORY;
  },
  computed: {
    ...mapGetters("session", ["GET_TOKEN_SESSION", "GET_DATA_SESSION"]),
  },
};
</script>
