<template>
    <div class="cart">
        <baseTitleTag :titleParent= "titleParent" :titleChild = "titleChild"/>
        <div class="cart-item">
            <table cellspacing="0">
                <thead>
                    <th>Sản phẩm</th>
                    <th class="currency">Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Ngày đặt</th>
                    <th class="currency">Thành tiền</th>
                </thead>
                <tbody>
                    <tr v-for="(cart,index) in listCart" :key="index">
                        <td >
                            <div class="item">
                                <img :src="toUrlImage(toProduct(cart.productId).imageName,toProduct(cart.productId).imageToken)" alt="">
                                <div class="description">
                                    <div class="name">{{toProduct(cart.productId).productName}}</div>
                                    <div class="size">{{cart.size}}</div>
                                </div>
                            </div>
                        </td>
                        <td class="currency">{{toProduct(cart.productId).price+toPrice(cart.size)}}<span style="color:black">₫</span></td>
                        <td >{{cart.amount}}</td>
                        <td>{{toDate(cart.createdDate)}}</td>
                        <td class="currency curr">{{(toProduct(cart.productId).price+toPrice(cart.size))*cart.amount}}<span style="color:black">₫</span>
                            <div class="handle">
                            <i class='far fa-trash-alt' @click="addToTrash(cart.billId)" ></i>
                        </div>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="subtotal">
            Tổng tiền : <span>{{loadSum()}}</span><span style="margin-left:5px">₫</span>
        </div>
        <button class="payment" @click="isConfirmShow = true">Đặt hàng</button>
        <div class="confirm-dialog" v-show="isConfirmShow">
            <div class="order-confirm">
            <i class="material-icons confirm">info_outline</i>
            <div class="title-confirm" >
                Xác nhận đặt hàng
            </div>
            <div class="button-confirm">
                <button style="background-color:#DE3333" @click="isConfirmShow = false">Huỷ</button>
                <button style="background-color:#3185D6" @click="order()">Đồng ý</button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import baseTitleTag from "../base/BaseTitleTag.vue"
export default ({
    components:{
        baseTitleTag
    },
    created(){
        this.fetchBills()
        this.fetchProduct()  
    },
    watch:{
        listCart(){
        }
    },
    computed:{
    },
    methods: {
        order(){
            for (const cart of this.listCart) {
                this.insertToBillManage(cart)
            }
            this.listCart = []
            this.isConfirmShow = false
            
        },
        insertToBillManage(cart){
                cart.createdDate = new Date()
                axios.post(`https://localhost:25022/api/v1/BillManage`,cart)
                .then(()=>{
                    console.log("postOke");
                })
                .catch((err)=>{
                    console.log("post fail",err);
                })
                axios.delete(`https://localhost:25022/api/v1/Bills/${cart.billId}`)
                    .then(()=>{
                    })
        },
        loadSum(){
            this.sumCurrs = 0
            for (let index = 0; index < this.listCart.length; index++) {
                const cart = this.listCart[index];
                var product = this.toProduct(cart.productId)
                var priceItem = (product.price + this.toPrice(cart.size))*cart.amount
                this.sumCurrs = this.sumCurrs + priceItem
            }
            console.log(this.sumCurrs);
            return this.sumCurrs
        },
        toUrlImage(imgName,imgToken){
            return `https://firebasestorage.googleapis.com/v0/b/milktea-5f9ee.appspot.com/o/${imgName}?alt=media&token=${imgToken}`
        },
        addToTrash(billId){
            axios.delete(`https://localhost:25022/api/v1/Bills/${billId}`)
            .then(()=>{
                this.fetchBills()
                this.fetchProduct()
            })
        },
        fetchBills(){
            var me = this
            axios.get(`https://localhost:25022/api/v1/Bills/fetch/${localStorage.getItem("customerId")}`)
            .then((res) => {
                me.listCart = res.data  
            })
            
        },
        toProduct(productId){
            for (const product of this.listProduct) {
                if(product.productId == productId){
                    return product
                }
            }
                        
            
        },
        fetchProduct(){
            axios.get(`https://localhost:25022/api/v1/Products`)
            .then((res)=>{
                this.listProduct= res.data
            })
        },
        toDate(value){
            return value.slice(0,10)
        },
        toPrice(value)
        {
            switch (value) {
                case "M":
                    return 0
                case "X":
                    return 10000
                case "XL":
                    return 20000
            
            
                default:
                    break;
            }
        }
    },
    data() {
        return {
            titleParent:"Giỏ hàng",
            titleChild:"Giỏ hàng của tôi",
            listCart:null,
            listProduct:null,
            sumCurrs:0,
            isConfirmShow:false
        }
    },
})
</script>

<style  scoped>
.button-confirm button:hover{
    cursor: pointer;
}
.confirm-dialog{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.219);
}
.title-confirm{
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.confirm{
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    color: #FACFAB;
    margin-top: 20px;

}
.button-confirm{
    width:100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
}
.button-confirm button{
    height: 30px;
    padding: 0px 10px 0px 10px;
    border:1px solid #ccc;
    border-radius: 3px;
    color: white;
    margin-left: 10%;
    margin-right: 10%;

}
.order-confirm{
    position: fixed;
    width: 350px;
    height: 180px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color:whitesmoke;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.payment:hover{
    cursor: pointer;
}
.payment{
    float: right;
    padding:8px 12px 8px 12px;
    border: unset;
    background-color: #5A31F4;
    color:white;
    margin-right:10px;
    border-radius: 2px;
    outline-offset: 0px;
}
.subtotal{
    width: calc(100% - 10px);
    min-height: 50px;
    margin-top: 50px;
    text-align: right;
    padding-right: 10px;
    line-height: 50px;
}
.handle{
    position: absolute;
    margin-bottom: 0px;
    right: 10px;
    bottom: 10px;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
}
.handle:hover{
    color: red;
    cursor: pointer;
    border:1px solid red
}
.description div{
    line-height: 28px;
}
.size{
    color: rgb(173, 169, 169);
    font-size: 12px;
}
.item .description{
    width:250px;
}
.cart{
    margin-left: 5%;
    width: 90%;
}
tbody tr td{
    height: 100px;
    
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    position: relative;
    font-weight: 100 ;
    font-size: 14px;
}
.item{
    display: flex;
    
}
.item img{
    width:  50px;
    margin-right: 20px;
}
thead th{
    font-size: 16px;
    color: rgb(139, 137, 137);
    text-align: left;
    padding-left: 10px;
     min-width: 120px;
    max-width: 500px !important;
    padding-bottom: 10px;
}

table thead th{
    border-bottom: 1px solid #ccc;
    
}

table{
    width: 100%;
    
}
.currency{
    text-align: right;
    padding-right: 10px;
}
</style>