<template>
    <div class="product">
        <img src="https://www.dingtea.com/upload/banner_ins_list/enL_banner_ins_19K21_pue44um56z.jpg" class="logoP" alt="">
        <div class="product-header">
            <div class="product-header-search">
                <input type="text" class="input-text" placeholder="Tìm kiếm theo tên..." v-on:keyup.enter="searchByName()" ref="searchName">
                <i class="material-icons">search</i>
            </div>
        </div>
        <div class="list-item">
            <productItem :oneProduct="product" v-for="product in products" :key="product.productId" />
        </div>
        <detailProduct v-show="DetailMilkTeaShow" @showToast="showToast()"/>
        <baseToastMessage  :titleToast="titleToast" v-show="isToastShow" />
        

    </div>
</template>
<script>
import productItem from '../base/BaseProductTag.vue'
import detailProduct from '../base/BaseDialog.vue'
import { mapActions, mapGetters } from 'vuex'
import baseToastMessage from '../base/BaseToastMessage.vue'
import axios from 'axios'
export default ({
    created(){
        this.fetchProducts()
    },
    components:
    {
        productItem,detailProduct,baseToastMessage
    },
    computed: {
        ...mapGetters(['DetailMilkTeaShow','products'])
    },
    methods: {
        ...mapActions(['UpdateStateDetail','fetchProducts','updateListProduct']),
        searchByName(){
            var searchString = this.$refs.searchName.value
            if(searchString)
            {
            axios.get(`https://localhost:25022/api/v1/Products/search/${searchString}`)
            .then((res)=>{
                this.updateListProduct(res.data)
            })
            }else{
                this.fetchProducts()
            }
        },
        showToast(){
            console.log(100);
            this.titleToast = "Thêm vào giỏ hàng thành công"
            this.isToastShow = true
            setTimeout(() => {
                this.isToastShow = false
            }, 3000);
        }
    },
    data() {
        return {
            titleToast:null,
            isToastShow:false
        }
    },
})
</script>
<style  scoped>
.material-icons{
    margin-top: 25px;
    transform: translateY(-50%);
    position: absolute;
    margin-right: 5px;
}
.input-text{
    height: 30px;
    margin-top: 25px;
    transform: translateY(-50%);
    width: 200px;
    border-radius: 30px;
    outline: unset;
    padding-left: 10px;
    border:1px solid #ccc;
    padding-right: 30px;
    
}
.product-header-search{
    height: 50px;
    position: relative;
    justify-content: right;
    padding-right: 2.5%;
    display: flex;
    justify-content: right;
}
.product-header{

}
.logoP{
    width: 100%;
}
.product{
    background-color: #212121;
}
.list-item{
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    
}
</style>
