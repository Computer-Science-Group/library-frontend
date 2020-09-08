<template>
  <MList :headers="headers"
         :items="items"
         :title="title"
         @filter="filter"
         @newItem="newItem"
         @editItem="editItem"
         @deleteItem="deleteItem"
  >
    <template #actions="{item}">
      {{item.id}}
    </template>
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
      items() {
        return this.$store.getters[this.collection + '/filteredItems']
      }
    },
    methods: {
      newItem(){
        this.$router.push(this.collection + '/new')
      },
      editItem(id) {
        this.$router.push(this.collection + '/edit/' + id )

      },
      deleteItem(id) {
        this.$store.dispatch(this.collection + '/removeItem', id)
      },
      filter(v) {
        this.$store.commit(this.collection + '/setFilterKey', v)
      }
    }
  }
</script>

<style scoped>

</style>