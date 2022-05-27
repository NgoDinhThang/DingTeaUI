<template>
    <div class="m-history">
        <div class="dialog-history">
            <i class="material-icons" @click="updateHistoryOrderShow(false)">close</i>

            <div class="table">
            <div class="m-table">
                <table>
                    <thead>
                        <th>Mã hoá đơn</th>
                        <th>Tên sản phẩm</th>
                        <th >Số lượng</th>
                        <th>Size</th>
                        <th>Ngày đặt</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr v-for="(bill,index) in bills" :key="index" @click="detail(bill)">
                            <td class="ad">{{bill.billManageId}}</td>
                            <td class="ad">{{toProduct(bill.productId).productName}}</td>
                            <td class="ad">{{bill.amount}}</td>
                            <td class="ad">{{bill.size}}</td>
                            <td class="ad">{{toDate(bill.createdDate)}}</td>
                            <td>
                                <div class="order-state">
                                    {{toState(bill.state)}}
                                </div>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                
            </div>
            </div>
        
        </div>
                <detailOrder :isDetailShow="showDetailOrder" @updateState="updateState" :productDetail="productDetail" :customerDetail="customerDetail" :billDetail="billDetail" @closeDialog="showDetailOrder=false" />

    </div>
</template>
<script>
import axios from 'axios'
import detailOrder from '../base/BaseDetailOrderClient.vue'
import { mapActions } from 'vuex'
export default {
    components:{
        detailOrder
    },
    created(){
        this.fetchBill()
        this.fetchProduct()
    },
    methods: {
        ...mapActions(["updateHistoryOrderShow"]),
        updateState(stateOrder){
            this.billDetail.state = stateOrder
            axios.put(`https://localhost:25022/api/v1/BillManage/${this.billDetail.billManageId}`,this.billDetail)
            .then(()=>{
                if(stateOrder==1)
                {
                    this.productDetail.remain = this.productDetail.remain - parseInt(this.billDetail.amount)
                    axios.put(`https://localhost:25022/api/v1/Products/${this.productDetail.productId}`,this.productDetail)
                }
                
                
                this.fetchBill()
            this.showDetailOrder = false
            })
            .catch(()=>{
                alert(0)
            })
            
            
        },
        fetchBill(){
            axios.get(`https://localhost:25022/api/v1/BillManage/history/${localStorage.customerId}`)
            .then((res)=>{
                this.bills= res.data
            })
            
        },
        fetchProduct(){
            axios.get(`https://localhost:25022/api/v1/Products`)
            .then((res)=>{
                this.listProduct= res.data
            })
        },
        getCustomer(id){
            console.log("id",id);
            axios.get(`https://localhost:25022/api/v1/Customers/${id}`)
            .then((res)=>{
                this.customerDetail = res.data
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        getProduct(id){
            axios.get(`https://localhost:25022/api/v1/Products/${id}`)
            .then((res)=>{
                this.productDetail = res.data
                console.log(res.data);
            })
        },
        toDate(value){
            return value.slice(0,10)
        },
        toProduct(productId){
            for (const product of this.listProduct) {
                if(product.productId == productId){
                    return product
                }
            }
                        
            
        },
        
        toState(value){
            switch (value) {
                case 0:
                    return "Chờ xác nhận"
                case 1:
                    return "Đã xác nhận"
                case 2:
                    return "Đã huỷ"
                case 3:
                    return "Đã nhận được hàng"
                default:
                    break;
            }
            
        },
        detail(bill){
            this.billDetail = bill
            this.getProduct(bill.productId)
            this.getCustomer(bill.customerId)
            this.showDetailOrder = true
        }
    },
    data() {
        return {
            customerDetail:null,
            productDetail:null,
            bills:null,
            listProduct:null,
            billDetail:null,
            showDetailOrder:false
        }
    },
}
</script>
<style>
.material-icons:hover{
    cursor: pointer;
}
.confirm-btn{
    background-color: #23ae41;
    
    
}
.cancel-btn{
    background-color: red;
}
.order-state button{
    margin-left: 10px;
    padding: 5px 10px 5px 10px;
    border:1px solid #ccc;
    border-radius: 3px;
    color: white;
}
tr:hover{
    background-color: rgba(233, 231, 231, 0.507);
    cursor: pointer;
}
.ad{
    height: 75px;
}






.dialog-history .table{
    max-height: 450px;
    overflow: scroll;
}

.dialog-history i{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 28px;
}
.m-history{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
}
.dialog-history{
    position: absolute;
    width: 1000px;
    height: 500px;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 50px 0px 20px 0px;
    border-radius: 5px;
}

</style>