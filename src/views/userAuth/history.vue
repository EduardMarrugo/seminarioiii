<template>
  <v-card
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >
  
      <v-toolbar-title>Historial</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-view-module</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list
      subheader
      two-line
    >
      <v-subheader inset>Historial</v-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-weather-lightning-rainy
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="folder.title"></v-list-item-title>

          <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-subheader inset>Compartidos</v-subheader>

      <v-list-item
        v-for="file in files"
        :key="file.title"
      >
        <v-list-item-avatar>
          <v-icon
            :class="file.color"
            dark
            v-text="file.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="file.title"></v-list-item-title>

          <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      files: [
        {
          color: 'blue',
          icon: 'mdi-weather-pouring',
          subtitle: 'Jan 20, 2014',
          title: 'Magdalena',
        },
        {
          color: 'amber',
          icon: 'mdi-weather-rainy',
          subtitle: 'Jan 10, 2014',
          title: 'Bolivar',
        },
      ],
      folders: [
        {
          subtitle: 'Jan 9, 2014',
          title: 'Magdalena',
        },
        {
          subtitle: 'Jan 17, 2014',
          title: 'Bolivar',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: 'Cordoba',
        },
      ],
    }),
  }
</script>
