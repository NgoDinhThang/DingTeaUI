<template>
  <div>
    <div class="navbar">
        <div class="logo">
            <img style="width: 155px" src="https://dingtea.vn/images/logospare.png" alt="Ding Tea" @click="goHome()">
        </div>
        <div class="navbar-support">
            <div class="clearfix">
                <div class="clearfix-search">
                    
                </div>
            </div>
            <div class="clearfix-menu">
                <ul class="">
                    <li  class="menu-item"  @click="selectmenu()"><router-link to="/admin/products-manager"  class="router-link" id="logo-home">SẢN PHẨM</router-link></li>
                    <li  class="menu-item" @click="selectmenu()"><router-link to="/admin/customer-manager"  class="router-link">KHÁCH HÀNG</router-link></li>
                    <li  class="menu-item" @click="selectmenu()"><router-link to="/admin/account-manager"  class="router-link">TÀI KHOẢN</router-link></li>
                    <li  class="menu-item" @click="selectmenu()"><router-link to="/admin/bill-manager"  class="router-link">HOÁ ĐƠN</router-link></li>                    
                    
                </ul>
            </div>
        </div>
        
    </div>
    <router-view></router-view>
  </div>
</template>
    

<script>
import $ from 'jquery'
import router from './routes'
export default {
  name: 'App',

  created(){
      if(localStorage.getItem("adminLoginState")){
          router.push('/admin/products-manager')
      }else{
          console.log(this.adminLoginState);
          router.push('admin-login')
      }
  },
  computed:{
  },
  methods: {
        //select item in menu
        selectmenu(){
            console.log(1);
            var menuItems = $(".menu-item a")
            for (const menuItem of menuItems) {
                menuItem.style.color="rgba(36, 34, 33)"
                menuItem.style.opacity="0.6"
                menuItem.style.backgroundColor="unset"
                
            }
            event.target.style.color = "#E3C383"
            event.target.style.backgroundColor = "black"
            event.target.style.opacity = "1"

        },
        goHome(){
            document.getElementById("logo-home").click()
        }
    },
    mounted() {
        var itemFirst = $(".menu-item a")[0]
        console.log('tag', itemFirst)
        itemFirst.style.color = "#E3C383"
        itemFirst.style.backgroundColor = "black"
        itemFirst.style.opacity = "1"
    },
}
</script>

<style>
@import url(./css/main.css);
/* @import url(./assets/resources/font/fontawesome-5.15.1/css/all.css); */
.store:hover{
    text-decoration: underline;
    cursor: pointer;
}
.navbar{
    height: 125px;
    background-color: #E8DDCB;
    width: calc(100% - 30px);
    padding:15px;
    display: flex;
}
.logo{
    margin-left: 120px;
}
.logo:hover{
    cursor: pointer;
}

.clearfix-menu ul{
    list-style: none;
    display: flex;
    margin:0px;

}
.clearfix-menu ul li{
    font-size: 1.25vw;
    font-family: GoogleSansBold; 
}
.clearfix-menu ul li a{
    position: relative;
    pointer-events: unset;
    color: rgba(36, 34, 33);
    opacity: 0.6;
}
.clearfix-menu ul li:hover a{
    opacity: 1 !important;
}
.clearfix-menu ul li:hover{
    cursor: pointer;
}
.clearfix-menu ul li .router-link{
    text-decoration: unset;
    
    width: 100%;
    height: 100%;
    padding: 10px 20px 10px 20px;

    
}
.clearfix-menu{
    place-items: end;
    display: flex;
    height: calc(100% - 51.25px);
    margin-bottom: 10px;
}
.btn-search{
    width: 38px;
    height: 38px;
    background-color: unset;
    border: 1px solid black;
    border-radius: 3px;
    margin-left: 10px;
}
.btn-search:hover{
    background-color: black;
    color: white;
    cursor: pointer;
}
.fa-search{
    font-size: 18px;
}
.clearfix{
    height: 33%;
    display: flex;
    justify-content: right;
}
.navbar-support{
    width: calc(100% - 280px);
    height: 100%;
    margin-right: 120px;
    font-family: GoogleSansThin;
}
.clearfix-search{
    display: flex;
    align-items: center;
}
.fa-store-alt::before{
    font-size: 10px;

}
.store{
    border-right: 1px solid black;
    padding-right: 20px;
}
.search-point{
    padding-left: 20px;
    margin-right: 30px;
}
</style>