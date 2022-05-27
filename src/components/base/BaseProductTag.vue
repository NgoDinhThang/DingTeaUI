<template>
    <div class="product-item">
        <div class="product-name">{{oneProduct.productName}}</div>
        <div class="product-image">
            <img :src="toUrlImage(oneProduct.imageName,oneProduct.imageToken)" class="item-img" alt="" @click="showStateDetail(oneProduct)" >
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default ({
    props:
    [
        "oneProduct"
    ],
    computed: {
        ...mapGetters(['DetailMilkTeaShow'])
    },
    methods: {
        ...mapMutations(['setDetailShow']),
        ...mapActions(['showStateDetail']),
        toUrlImage(imgName,imgToken){
            return `https://firebasestorage.googleapis.com/v0/b/milktea-5f9ee.appspot.com/o/${imgName}?alt=media&token=${imgToken}`
        },

    },
    
})
</script>

<style  scoped>
.product-item{
    
    width: 25%;
    height: 520px;
    outline: 1px solid #212121;
    background-color: #181818;
    
}
.product-item:hover{
    background-color: #0d0d0d;
}
.product-name{
    padding-top: 70px;
    padding-bottom: 10px;
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 18px;
    font-weight: bold;
    color: #e1d9cb;
}
.product-name:before {
  content : "";
  position: absolute;
  left    : 50%;
  transform: translateX(-50%);
  bottom  : 0;
  height  : 1px;
  width   : 20%;  /* or 100px */
  border-bottom:1px solid #e1d9cb;
   
}
.product-image{
    width: 100%;
    margin-top: 90px;
    display: flex;
    justify-content: center;
}
.item-img:hover{
    transform: scale(1.1);
    
}
.item-img{
    transition: ease-in-out 0.3s;
}
</style>