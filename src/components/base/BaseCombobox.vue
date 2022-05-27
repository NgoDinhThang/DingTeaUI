<template>
    <div class="m-combobox">
        <div class="default">
            <input type="text" class="value-default" :value="valDefault">
            <i class="material-icons" @click="updateShow()">arrow_drop_down</i>
        </div>
        
        <div class="selection" v-show="isSelectionShow">
            <div class="select-item" v-for="valSelect in valueSelects" :key="valSelect" @click="selectValue()">{{valSelect}}</div>

        </div>
    </div>
</template>
<script>

export default ({
    props:[
        "valDefault","valueSelects","index"
    ],
    computed:{
        
    },
    created(){
        console.log(1);
    },  
    methods: {
        updateShow(){
            this.isSelectionShow=!this.isSelectionShow
        },
        selectValue(){
            var valueSl =event.currentTarget.innerHTML
            this.isSelectionShow = false
            this.$emit("selectItem",valueSl,this.index)
        }
    },
    data() {
        return {
            isSelectionShow:false
        }
    },
})
</script>

<style  scoped>
.select-item:hover{
    background-color: #E8DDCB;
    color: white;
}
.select-item{
    border-bottom: 1px solid black;
    height: 34px;
    line-height: 34px;
    padding-left:12px ;
}
.selection{
    position: absolute;
    width: calc(100% - 2px);
    max-height: 300px;
    overflow: scroll;
    border:1px solid black;
    border-radius: 3px;
    background-color: white;


}
.default i{
    position: absolute;
    right: 1px;
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 35px;
    border-radius:0px 1px 1px 0px;
}
.default i:hover{
    background-color: #E8DDCB;
    cursor: pointer;
}
.default{
    display: flex;
    align-items: center;
    position: relative;
}
.m-combobox{
    width: max-content;
    height: 40px;
    margin-top: 20px;
    margin-left: 50%;
    transform: translateX(-50%);

}
.value-default {
    width: 500px;
    height: 30px;
    font-size: 16px;
    padding-left: 12px;
}
.value-default:focus{
    outline-color: #ccc;
}

</style>
