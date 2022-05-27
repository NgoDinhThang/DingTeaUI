<template>
  <div>
    <contactHeader/>
    <navbar/>
    <router-view></router-view>
    <Thefooter/>
    <orderHistory v-show="isHistoryOrderShow"/>
    
  </div>
</template>

<script>
  import contactHeader from "./components/layout/contact.vue"
  import navbar from "./components/layout/navbar.vue"
  import Thefooter from "./components/layout/footer.vue"
  import orderHistory from './components/view/orderHistory.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'client',
  components: {
    contactHeader,navbar,Thefooter,orderHistory
  },
  computed:{
    ...mapGetters(["isHistoryOrderShow"])
  }
}
</script>

<style>
@import url(./css/main.css);
/* @import url(./assets/resources/font/fontawesome-5.15.1/css/all.css); */
</style>