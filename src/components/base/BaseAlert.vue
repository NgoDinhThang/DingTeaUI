<template>
    <div class="m-alert">
        <div class="alert-dialog">
            <div class="title-alert">
                <i class='fas fa-info-circle'></i>
                <div class="title-a">{{titleAlert}}</div>
            </div>
            <button class="close" @click="closeAlert()">Đóng</button>
            
        </div>
    </div>
</template>
<script>
export default {
    props:[
        "titleAlert"
    ],
    methods: {
        closeAlert(){
            this.$emit("closeAlert",null)
        }
    },
}
</script>
<style scoped>
.close:hover{
    cursor: pointer;
}
.close{
    margin-top: 20px;
    padding:10px 20px 10px 20px;
    margin-left: 50%;
    transform: translateX(-50%);
}
.title-alert{
    display: flex;
    margin-top: 50px;
}
.title-a{
    color: black;
    line-height: 50px;
    margin-left: 20px;
}
.fa-info-circle{
    width: 50px;
    height: 50px;
    font-size: 50px;
    color: #3263C6;
    margin-left: 50px;

}
.m-alert{
    background-color: rgba(0, 0, 0, 0.144);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.alert-dialog{
    width: 400px;
    height: 200px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>