
<script>
  export default {
    name: "MListRenderLess",
    props: ['collection'],
    async created(){
      await this.$store.dispatch(this.collection + '/getAllItems');
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
    },
    render() {
      return this.$scopedSlots.default({
        filter: this.filter,
        newItem: this.newItem,
        editItem: this.editItem,
        deleteItem: this.deleteItem
      })
    }
  }
</script>

<style scoped>

</style>