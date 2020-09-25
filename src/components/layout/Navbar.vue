<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
    src="@/assets/books.jpg"
  >

    <!-- gradient of the navbar background -->
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down">{{ title }}</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>

    <!-- looping the icons in the left of navbar -->
    <div v-for="link in links" :key="link.text" class="d-none d-md-flex">
      <v-btn color="transparent" dark router :to="link.route">
        {{ link.text }}
      </v-btn>
    </div>

  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: ["title"],
  data: () => ({
    drawer: null,
  }),
  computed: {
    links(){
      let menuItems = [
        { text: "Sign Up", route: "/signup" },
        { text: "Sign In", route: "/signin" },
      ]
      if(this.userLoginIn) {
        menuItems = [
          { text: "Home", route: "/" },
          { text: "Book List", route: "/books" },
          { text: "About Us", route: "/about" },
        ]
      }
      return menuItems
    },
    userLoginIn () {
      return this.$store.getters['auth/user']
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      console.log(this.drawer);
      this.$emit("toggleDrawer", this.drawer);
    },
  },
};
</script>

<style scoped></style>
