<template>
  <v-toolbar
          flat
  >
    <slot><v-toolbar-title>{{ title }}</v-toolbar-title></slot>
    <v-text-field
            class="px-5"
            hide-details
            append-icon="mdi-magnify"
            placeholder="Search by title"
            single-line
            @keyup="input"
            v-model="filterKey"
    ></v-text-field>

    <v-btn rounded outlined color="primary" @click="add">
      <v-icon class="pr-3">mdi-plus-circle</v-icon>
      add
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "MToolbar",
    props: ['title'],
    data() {
      return {
        filterKey: '',
      }
    },
    methods: {
      input() {
        this.$emit('filter', this.filterKey)
      },
      add() {
        this.$emit('addNew')
      }
    }
  }
</script>

<style scoped>

</style>