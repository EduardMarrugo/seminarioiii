import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary:"#001B48", 
          secondary: "#0E538E", 
          tertiary: "#1397C8",
          quaternary: "#AFDDEC",
          fifth: "#DDE8F0",
        },
      },
      dark: false,
    },
  })