<template>
    <div class="news">
        <baseTitleTag :titleParent= "titleParent" :titleChild = "titleChild"/>
        <h1>Tin tức mới nhất</h1>
        <div class="event-promotion">
            <div class="menu">
                <div class="menu-title">
                    <router-link to="/news/event"><button class="event">Sự kiện</button></router-link>
                    <router-link to="/news/promotion"><button class="event">Khuyến mãi</button></router-link>
                </div>
            </div>
        </div>
        <h2>Xem các tin tức mới nhất về Ding Tea</h2>
        <router-view></router-view>
        
    </div>
</template>
<script>
import baseTitleTag from "../base/BaseTitleTag.vue"
export default ({
    components:{
        baseTitleTag
    },
    data(){
        return {
            titleParent:"Tin tức",
            titleChild:"Tin tức mới nhất"
        }
    },

})
</script>
<style scoped>
h2{
    font-size: 20px;
}
.menu-title{
    border-bottom: 1px solid rgb(206, 190, 165);
}
h1{
    font-size: 24px;
    margin-bottom: 50px;

}
.news{
    padding-left: 10%;
    padding-right: 40%;
}
.event-promotion{
    width: 100%;
}
button{
padding: 8px 20px 8px 20px;
border:unset;
font-size: 16px;
margin-right: 5px;
background-color: rgb(232, 221, 203);
}
button:hover{
    cursor: pointer;
    background-color: rgb(36, 34, 33);
    color: rgb(232, 221, 203);
}

</style>
