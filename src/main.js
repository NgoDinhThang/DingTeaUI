import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Vuex from 'vuex'
import storeConfigs from './store/index.js'


Vue.use(Vuex)
const store = new Vuex.Store(storeConfigs)
Vue.config.productionTip = false

window.close = function() {
    localStorage.clear()
    return '';
};



new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')