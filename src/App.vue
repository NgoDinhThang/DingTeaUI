<template>
  <div id="app">
    <router-view></router-view>
    <changePassword v-show="isChangePasswordShow"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import changePassword from './components/view/changePassword.vue'

// import { initializeApp } from 'firebase/app';
// const firebaseConfig = {
//     apiKey: "AIzaSyDLhFPJfaw_vTjyl-MjMJb-wI_o1_cZ0uY",
//     authDomain: "milktea-5f9ee.firebaseapp.com",
//     projectId: "milktea-5f9ee",
//     storageBucket: "milktea-5f9ee.appspot.com",
//     messagingSenderId: "140613955635",
//     appId: "1:140613955635:web:d0ea97cf9407fda7853346",
//     measurementId: "G-CGJXE0MY5Q"
// };
// initializeApp(firebaseConfig)
export default {
  name: 'App',
  components:{
    changePassword
  },
  computed:{
    ...mapGetters(["isChangePasswordShow"])
  },
  methods: {
    ...mapActions(["updateChangePassword"])
  },
}
</script>

<style>
@import url(./css/main.css);
/* @import url(./assets/resources/font/fontawesome-5.15.1/css/all.css); */
</style>
