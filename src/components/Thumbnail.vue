<template>
  <div>
    <v-img v-if="src"
           :src="uri"
           class="my-3"
           contain
           height="60"
           width="60"
    />
    <v-img v-else
           src="https://loremflickr.com/40/60"
           class="my-3"
           contain
           height="60"
           width="60"
    />
  </div>
</template>

<script>
  export default {
    name: "Thumbnail",
    props:['src'],
    data() {
      return {

      }
    },
    computed: {
      uri (){
        return this.src ? require(`@/assets/${this.src}`) : null
    }
    },
    created(){
      console.log(this.src)
    }

  }
</script>

<style scoped>

</style>