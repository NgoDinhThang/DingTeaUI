import Vue from "vue";
import Router from "vue-router"
import home from "./components/view/home.vue"
import intro from "./components/view/intro.vue"
import product from "./components/view/product.vue"
import store from './components/view/searchStore.vue'
import news from './components/view/news.vue'
import event from './components/children/event.vue'
import promotion from './components/children/promotion.vue'
import cart from './components/view/cart.vue'
import userLogin from './components/view/userLogin.vue'
import adminLogin from './components/admin/adminLogin.vue'
import client from './client.vue'
import admin from './admin.vue'
import productManager from './components/admin/adminProduct.vue'
import customerManager from './components/admin/adminCustomer.vue'
import billManager from './components/admin/adminBill.vue'
import accountManager from './components/admin/accountManage.vue'
import userRegis from './components/view/userRegis.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: client,
            children: [{
                    path: '',
                    component: home

                },


                {
                    path: 'intro',
                    component: intro
                },
                {
                    path: 'product',
                    component: product
                },
                {
                    path: 'search-store',
                    component: store
                },
                {
                    path: 'news',
                    component: news,
                    children: [{
                            path: 'event',
                            component: event
                        },
                        {
                            path: 'promotion',
                            component: promotion
                        }
                    ]
                }, {
                    path: 'cart',
                    component: cart
                }
            ]
        },
        {
            path: '/user-login',
            component: userLogin
        },
        {
            path: '/user-regis',
            component: userRegis
        },
        {
            path: '/admin-login',
            component: adminLogin
        },
        {
            path: '/admin',
            component: admin,
            children: [{
                    path: 'products-manager',
                    component: productManager
                },
                {
                    path: 'customer-manager',
                    component: customerManager
                },
                {
                    path: 'bill-manager',
                    component: billManager
                },
                {
                    path: 'account-manager',
                    component: accountManager
                }
            ]
        }
    ],

})