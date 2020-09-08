<template>
  <v-card class="mt-5 mx-10 ">
    <v-card-title>
      <h2>{{ title }}</h2>
    </v-card-title>
    <v-card-text>
      <v-text-field label="Title" v-model="item.title"></v-text-field>
      <v-text-field label="Author"  v-model="item.author"></v-text-field>
      <v-text-field label="ISBN"  v-model="item.isbn"></v-text-field>
      <v-text-field label="Language"  v-model="item.lang"></v-text-field>
      <v-select
              :items="selectOptions"
              label="Category"
							v-model="item.category"
      ></v-select>

      <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-image"
              label="Avatar"

      ></v-file-input>

    </v-card-text>
    <v-card-actions class="flex justify-end ">
      <v-btn color="error" @click="cancel">Cancel</v-btn>
      <v-btn color="primary" @click="submit">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "BookForm",
    data: () => ({
      selectOptions: ['Web Development', 'Networking', 'Security', 'Operating Systems', 'Crypto'],
      rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    }),
    computed: {
      id(){ return this.$route.params.id},

      title() { return this.id ? 'Edit Item' : 'Create Item'},
      // TODO : issue when refresh an error happens
      // TODO : cause should be fetch books before execute findByID
      item(){ return this.id ? this.$store.getters['books/findById'](this.id) : {} }
    },
    methods: {
      submit(){
        this.id ? this.update() : this.save();
				this.toPreviousPage();
      },
      update(){
        this.$store.dispatch("books/updateItem", this.item);
      },
      save(){
        this.$store.dispatch("books/addItem", this.item)
      },
      cancel(){
        this.toPreviousPage()
      },
      toPreviousPage(){
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>

</style>