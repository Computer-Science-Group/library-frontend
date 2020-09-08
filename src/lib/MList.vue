<template>

  <v-card>
    <v-card-title>
      <MToolbar :title="title"
                @filter="filter"
                @addNew="newItem"
      ></MToolbar>
    </v-card-title>

    <v-divider></v-divider>
    <v-card-text>
      <v-data-table
              :headers="headers"
              :items="items"
              :items-per-page="5"
      >

        <template #item.image="{ item }">
          <Thumbnail :src="item.image" />
        </template>

        <template #item.lang="{ item }" >
          <span style="padding: 5px 15px;" > {{ item.lang }} </span>
        </template>

        <template #item.actions="{item}" >
          <Actions :item="item"
                   @edit="editItem"
                   @delete="deleteItem"
          />
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
  import MToolbar from '@/components/MToolbar'
  import Thumbnail from "@/components/Thumbnail";
  import Actions from "@/components/Actions";
  export default {
    name: "MList",
    components: {
      MToolbar,
      Thumbnail,
      Actions
    },
    props: ['headers', 'items', 'title'],
    data() {
      return {
        page: 1,


      }
    },
    async created(){
      await this.$store.dispatch('books/getAllItems');
    },

    methods: {
      newItem(){
        this.$emit('newItem')
      },
      editItem(id) {
        this.$emit('editItem', id)
      },
      deleteItem(id) {
        this.$emit('deleteItem', id)
      },
      filter(v) {
        this.$emit('filter', v)
      }
    }
  };
</script>

<style scoped>
  .v-input--is-focused {
    background-color: red;
  }
</style>
