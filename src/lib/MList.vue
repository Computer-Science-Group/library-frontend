<template>


<!--    <MListRenderLess slot-scope="{title,headers, collection, filter,newItem, deleteItem, editItem }">-->
    <MListRenderLess :collection="collection">
      <v-card slot-scope="{filter, newItem, deleteItem, editItem }">
       <v-card-title>
        <MToolbar :title="title"
                  @filter="filter"
                  @addNew="newItem"
        >
          <template >
            <slot></slot>
          </template>
        </MToolbar>
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


            <template #item.actions="{item}"  >
              <slot name="actions" :item="item">
              <Actions :item="item"
                       @edit="editItem"
                       @delete="deleteItem"
              />
              </slot>
            </template>

        </v-data-table>
      </v-card-text>
      </v-card>
    </MListRenderLess>

</template>

<script>
  import MListRenderLess from './MListRenderLess'
  import MToolbar from '@/components/MToolbar'
  import Thumbnail from "@/components/Thumbnail";
  import Actions from "@/components/Actions";
  export default {
    name: "MList",
    components: {
      MListRenderLess,
      MToolbar,
      Thumbnail,
      Actions
    },
   props: ['headers', 'items', 'title', 'collection'],
    data() {
      return {
        page: 1,
      }
    },

  };
</script>

<style scoped>
  .v-input--is-focused {
    background-color: red;
  }
</style>
