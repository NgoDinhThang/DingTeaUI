<template>
    <div class="dialog">
        <div class="detail-product">
            <div class="detail-product-image">
                <div class="" style="width:100%;height:100%;">
                    <img :src="toUrlImage(productDetailShow.imageName,productDetailShow.imageToken)" alt="">
                    <div class="product-name">
                        <div class="sub-title">
                            {{productDetailShow.productName}}
                        </div>
                        
                        </div>
                </div>
                
            </div>
            <div class="detail-product-order">
                <div id="btn-close" @click="hideStateDetail()">
                    <i class="material-icons">close</i>
                </div>
                <div class="order">
                    <div class="order-size">
                        <div class="order-size-text">
                            Size:
                        </div>
                        <div class="order-size-select">
                            <div class="select-item first" @click="SelectSize(0)">M</div>
                            <div class="select-item" @click="SelectSize(10000)">X</div>
                            <div class="select-item" @click="SelectSize(20000)">XL</div>
                        </div>
                    </div>
                    <div class="remain">
                         <div class="order-size-text">
                            Số lượng còn lại:
                        </div>
                        <b style="line-height:70px;margin-top:10px" ref="remain">{{productDetailShow.remain}}</b>
                    </div>
                    <div class="order-amount" style="margin-bottom:20px">
                       
                        <div class="" style="display:flex">
                            <div class="order-size-text">
                            Số lượng mua:
                            
                            </div>
                            <div class="plus-minus-amount">
                                <div class="minus icon-amount" style="margin-left: 0px;" @click="minusAmount()" title="Vui lòng chọn nhỏ hơn số lượng còn">
                                    <i class='fas fa-minus'></i>
                                </div>
                                <div class="amount" ref="amount" >1</div>
                                <div class="plus icon-amount" @click="plusAmount()" title="Vui lòng chọn nhỏ hơn số lượng còn">
                                    <i class='fas fa-plus'></i>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="order-price" style="margin-bottom:20px">
                        <div class="order-size-text">
                            Đơn giá :  
                        </div>
                        <b style="margin-top:20px"> {{productDetailShow.price}} đ</b>
                    </div>

                     <button id="add-to-cart" @click="AddToCart">
                    Thêm vào giỏ hàng
                    </button>
                </div>
               
            </div>

        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'


export default ({

    created() {
    },
    computed:{
        ...mapGetters(["productDetailShow","userLoginState"])
    },
    watch:{
        productDetailShow(){
            this.$refs.amount.innerHTML = "1"
        }
    },
    methods: {
        ...mapActions(['hideStateDetail','postToCart']),



        SelectSize(scale){
            console.log('tag',this.productDetailShow.price + scale)
            this.productDetailShow.price=this.productDetailShow.price +scale
            const items = document.getElementsByClassName('select-item')
            for (const item of items) {
                item.style.backgroundColor='white'
                item.style.color='black'
                
            }
            event.currentTarget.style.backgroundColor='rgb(108, 108, 108)'
            event.currentTarget.style.color='white'
            this.itemCart.size = event.currentTarget.innerHTML

        },
        minusAmount(){

            let amount = document.getElementsByClassName('amount')[0].innerHTML
            if(amount>1)
            {
            document.getElementsByClassName('amount')[0].innerHTML = amount - 1
            }
        },
        plusAmount(){
            let amount = document.getElementsByClassName('amount')[0].innerHTML
            if(amount< parseInt(this.$refs.remain.innerHTML)){
            document.getElementsByClassName('amount')[0].innerHTML = parseInt(amount) + 1
            }
            
        },
        toUrlImage(imgName,imgToken){
            return `https://firebasestorage.googleapis.com/v0/b/milktea-5f9ee.appspot.com/o/${imgName}?alt=media&token=${imgToken}`
        },
        AddToCart() {
            if(localStorage.getItem("customerId"))
            {
            this.itemCart.amount = this.$refs.amount.innerHTML
            this.itemCart.customerId = localStorage.getItem("customerId")
            this.itemCart.productId = this.productDetailShow.productId
            this.itemCart.createdDate = new Date()
            this.$emit("showToast", null)
            this.postToCart(this.itemCart)
            
            }
            else{
                this.$router.push("/user-login")
                window.onscroll = function() {};
            }

            
        },
        


    },
    data() {
        return {
            itemCart:{
                amount:null,
                size:"M",
                customerId:null,
                productId:null,
                createdDate:null
            }
        }
    },
})

</script>

<style scoped>
.remain{
    display: flex;
}
img{
    margin-top: 50px;
}
#add-to-cart{
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    width: 200px;
    height: 50px;
    font-size: 16px;
    background-color: rgb(108, 108, 108);
    border:unset;
    
    color: rgba(255, 255, 255, 0.8);
}
#add-to-cart:hover{
    background-color: #2C2C2C;
    color: white;
    cursor: pointer;
}
.order-price b{
    font-weight: 900 !important;
}
.order-price{
    display: flex;
    line-height: 50px;
}
.amount{
    width: 30px;
    text-align: center;
}
.icon-amount{
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-left: 25px;
    margin-right: 25px;
    border:1px solid #ccc;

}

.icon-amount:hover{
    color: white;
    background-color: #2C2C2C;
    cursor: pointer;
}
.plus-minus-amount{
    display: flex;
    align-items: center;
}
.order-amount-buy{
    height: 30px;
}
.order-amount{
    margin-top: 20px;
}
.first{
     background-color: rgb(108, 108, 108);
     color: white;
}
.order-size-text,.select-item{
    line-height: 50px;
}
.order-size-text{
    margin-top: 20px;
    width: 150px;
}
.order-size-select{
    display: flex;
    align-items: center;
    
    
}
.select-item{
    width: 50px;
    height: 50px;
    border:1px solid #ccc;
    margin-right: 50px;
    text-align: center;
}
.select-item:hover{
    cursor: pointer;
    background-color: rgb(108, 108, 108);
    color: white;
}
.order-size{
    
    display: flex;
    
}
.order{
    clear: both;
    padding: 20px 20px 50px 50px;
    height: calc(100% - 120px);
    position: relative;
}
#btn-close:hover{
    cursor: pointer;
    color: white;
}
#btn-close{
    background-color: #2C2C2C;
    display: flex;
    align-items: center;
    float: right;
    width: 50px;
    height: 50px;
    color: rgb(96, 96, 96);
}
.material-icons{
    margin-left: 50%;
    transform: translateX(-50%);
    

}
.detail-product-order{
    width: 50%;
    height: 100%;
}
.sub-title{
    width: max-content;
    margin-left: 50%;
    transform: translateX(-50%);
    padding-left: 20px;
    padding-right: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.774);
    border-right: 1px solid rgba(255, 255, 255, 0.774);
}
.detail-product-image img{
    margin-left: 50%;
    transform: translateX(-50%);
    width: 35%;
    

}
.product-name{
    color: rgba(255, 255, 255, 0.774);
    font-size: 24px;
    
}
.detail-product-image{
    width: 50%;
    background-image: url(https://www.dingtea.com/images/productBg_ins.jpg);
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
}
.dialog{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.452);
    z-index: 10;
}
.detail-product{
    position: inherit;
    width: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    height: 500px;
    top: 50%;
    display: flex;
}
</style>
