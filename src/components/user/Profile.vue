<template>
  <v-container>
    <v-layout row>
      <v-flex class="col-12 col-md-6 offset-md-3">

        <v-card >
          <v-card-title>
              {{ user.email }}
          </v-card-title>
          <div>
            <span class="pl-3"> id : {{ user.id}}</span>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name:'Profile',
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      user () {
        // return this.$store.getters.user
        return this.$store.getters['auth/user']
      }
    }
  }
</script>
