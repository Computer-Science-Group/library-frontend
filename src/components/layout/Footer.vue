<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      color="#003049"
      class="lighten-1 grey--text text-center col-md-12 col-sm-12 col-xs-12"
    >
      <v-card-text>
        <v-icon>mdi-copyright</v-icon>
        <strong>
          {{ new Date().getFullYear() }} — LIBRARY TEAM. All Rights
          Reserved.</strong
        >
        <v-btn v-for="icon in icons" :key="icon.url" class="mx-3" icon>
          <a :href="icon.url" :target="icon.target"
            ><v-icon size="24px">{{ icon.name }}</v-icon></a
          >
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "mdi-facebook",
        url: "https://web.facebook.com/",
        target: "_blank",
      },
      {
        name: "mdi-linkedin",
        url: "https://www.linkedin.com/",
        target: "_blank",
      },
      {
        name: "mdi-instagram",
        url: "https://www.instagram.com/",
        target: "_blank",
      },
    ],
  }),
};
</script>
