<template>
  <MList :headers="headers"
         :items="filteredItems"
         :title="title"
         :collection="collection"

  >
    <!--uncomment this for customize actions
    <template #actions="{item}">
      {{item.id}}
    </template>-->
  </MList>
</template>

<script>
  import MList from '@/lib/MList'
  export default {
    name: "BooksView",
    components: {
      MList
    },
    data: () =>({
      collection: 'books',
      title: 'List of Books',
      headers: [
        {
          text: 'Image',
          align: 'start',
          sortable: false,
          value: 'image',
        },
        {text: 'Title', value: 'title'},
        {text: 'Author', value: 'author'},
        {text: 'ISBN', value: 'isbn'},
        {text: 'Language', value: 'lang'},
        {text: 'Category', value: 'category'},
        {text: 'Actions', value: 'actions', sortable: false},
      ]
    }),
    computed: {
      filteredItems() {
        return this.$store.getters[this.collection + '/filteredItems']
      }
    },

  }
</script>

<style scoped>

</style>