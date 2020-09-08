import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import * as firebase from 'firebase'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import AlertCmp from './components/shared/Alert'


Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

let app;

const config = {
  apiKey: "AIzaSyBYx5cup538kY0PRGDDs49JNoDDQNhMs9E",
  authDomain: "vue-library-frontend.firebaseapp.com",
  databaseURL: "https://vue-library-frontend.firebaseio.com",
  projectId: "vue-library-frontend",
  storageBucket: "vue-library-frontend.appspot.com",
  messagingSenderId: "124698290139",
  //appId: "1:124698290139:web:c870a525e44282a937a9fe"
};
// Initialize Firebase
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('auth/setUser', user)
  if(!app) {
    new Vue({
      store,
      router,
      vuetify,
      render: h => h(App),
      created(){

      }
    }).$mount('#app')

  }
})
