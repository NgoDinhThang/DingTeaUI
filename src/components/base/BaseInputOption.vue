<template>
    <div class="m-alert">
        <div class="alert-dialog">
            <div class="title-alert">
                <div class="title-a">{{titleAlert}}</div>
            </div>
            <input type="text" id="input" ref="remainAdd">
            <div class="op">
                <button class="close" @click="closeAlert()" >Huỷ</button>
                <button class="oke" @click="oke()">Đồng ý</button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props:[
        "titleAlert"
    ],
    methods: {
        oke(){
            this.$emit("oke",this.$refs.remainAdd.value)
        },
        closeAlert(){
            this.$emit("closeAlertOption",null)
        }
    },
}
</script>
<style scoped>
#input{
    width: 200px;
    height: 24px;
    font-size: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.oke{
    background-color: #23AE41;
    color: white;
}
.close{
    background-color: red;
    color: white;
}
button{
    padding: 8px 20px 8px 20px;
    border-radius: 2px;
    border: unset;

}
.oke{
    margin-left: 100px;
}
button:hover{
    cursor: pointer;
}
.op{
    margin-top: 30px;
    margin-left: 50%;
    width: 300px;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
}
.title-alert{
    display: flex;
    margin-top: 50px;
}
.title-a{
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
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