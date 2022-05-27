<template>
    <div class="navbar">
        <div class="logo">
            <img style="width: 155px" src="https://dingtea.vn/images/logospare.png" alt="Ding Tea" @click="goHome()">
        </div>
        <div class="navbar-support">
            <div class="clearfix">
                <div class="clearfix-search">
                    <div class="store">
                        <i class="fas fa-store-alt"></i>
                        Tìm cửa hàng
                    </div>
                    <div class="search-point">
                        Tra cứu điểm
                    </div>
                    <inputSearch/>
                    <button class="btn-search">
                        <i class="material-icons">&#xe8b6;</i>
                    </button>
                </div>
            </div>
            <div class="clearfix-menu">
                <ul class="">
                    <li  class="menu-item"  @click="selectmenu()"><router-link to="/"  class="router-link" id="logo-home">TRANG CHỦ</router-link></li>
                    <li  class="menu-item" @click="selectmenu()"><router-link to="/intro"  class="router-link">GIỚI THIỆU</router-link></li>
                    <li  class="menu-item" @click="selectmenu()"><router-link to="/product"  class="router-link">SẢN PHẨM</router-link></li>                    <li  class="menu-item" @click="selectmenu()"><router-link to="/news/event"  class="router-link">TIN TỨC</router-link></li>
                    <li  class="menu-item" @click="selectmenu()"><router-link to="/cart"  class="router-link">GIỎ HÀNG</router-link></li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import inputSearch from "../base/BaseSearchInput.vue"
import $ from "jquery"
export default ({
    
    components:{
        inputSearch
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
})
</script>
<style  scoped>
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
