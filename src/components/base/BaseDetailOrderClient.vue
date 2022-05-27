<template>
    <div class="detail-order" v-show="isDetailShow">
        <div class="dialog">
            <h3>CHI TIẾT HOÁ ĐƠN</h3>
            <div class="">Mã hoá đơn: <span>{{billDetail.billManageId}}</span></div>
            <div class="content-order">
                <div class="customer">
                    <div >
                        Mã khách hàng:<span>{{customerDetail.customerCode}}</span>
                    </div>
                    <div>
                        Tên khách hàng:<span>{{customerDetail.customerName}}</span>
                    </div>
                    <div>
                        Ngày sinh:<span>{{toDate(customerDetail.dateOfBirth)}}</span>
                    </div>
                    <div>
                        Giới tính:<span>{{toGender(customerDetail.gender)}}</span>
                    </div>
                    <div>
                        Địa chỉ:<span>{{customerDetail.address}}</span>
                    </div>
                    <div>
                        Email:<span>{{customerDetail.email}}</span>
                    </div>
                    <div>
                        Số điện thoại:<span>{{customerDetail.phoneNumber}}</span>
                    </div>
                    
                </div>
                <div class="product">
                    <div >
                        Mã sản phẩm:<span>{{productDetail.productCode}}</span>
                    </div>
                    <div>
                        Tên Sản phẩm:<span>{{productDetail.productName}}</span>
                    </div>
                    <div>
                        Số lượng:<span>{{billDetail.amount}}</span>
                    </div>
                    <div>
                        Kích cỡ:<span>{{billDetail.size}}</span>
                    </div>
                    <div>
                        Giá bán:<span>{{productDetail.price}}</span>
                    </div>
                    <div>
                        Thành tiền:<span>{{(productDetail.price+toPrice(billDetail.size))*billDetail.amount}}</span>
                    </div>
                </div>
            </div>
            <div class="option-order">
                <button style="background-color:red" v-show="toShowCancel(billDetail.state)" @click="updateState(2)">Huỷ đơn hàng</button>
                <button style="background-color:#23ae41" v-show="toShowOk(billDetail.state)" @click="updateState(3)">Đã nhận hàng</button>
                <button style="color:black" @click="closeDialog()">Đóng</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props:["billDetail","isDetailShow","productDetail","customerDetail"],

    methods: {
        updateState(stateOrder){
            console.log("ok");
            this.$emit("updateState",stateOrder)
        },
        closeDialog(){
            this.$emit("closeDialog",null)
        },
        
        toDate(value){
            return value.slice(0,10)
        },
        toShowCancel(value){
            switch (value) {
                case 0:
                    return true
                case 1:
                    return true
            
                default:
                    return false
            }
        },
        toShowOk(value){
            switch (value) {
                case 1:
                    return true
            
                default:
                    return false
            }
        },
        toGender(value){
            switch (value) {
                case "Male":
                    return "Nam"
                case "FeMale":
                    return "Nữ"
            
                default:
                    break;
            }
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
            customer:null,
            product:null
        }
    },
}
</script>
<style scoped>
.option-order button{
    color: white;
    border:1px solid #ccc;
    margin-left: 20px;
    height: 28px;
    border-radius: 2px;
    opacity: 0.8;
}
.option-order button:hover{
    cursor: pointer;
    opacity: 1;
}
.option-order{
    position: absolute;
    bottom: 20px;
    right: 50px;
}
.product div{
    margin-top: 30px;
    font-weight: bold;
}
span{
    font-weight: normal;
    margin-left: 10px;
    font-size: 14px;
}
.product{
    padding-left: 20px;
}
.customer div{
    margin-top: 30px;
    font-weight: bold;
}
.customer div span{
    font-weight: normal;
    margin-left: 10px;
    font-size: 14px;
}
.content-order{
    width: 100%;
    height: max-content;
    display: flex;
}
.customer,.product{
    width: 50%;
    height:80%;
}
.customer{
    position: relative;
    padding-left: 20px;
}
.customer:after {
  content: '';
  height: 80%;
  width: 1px;

  position: absolute;
  right: 0;
  top: 50px;

  background-color: #000000;
}
.detail-order{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.164);

}
.dialog{
    width: 700px;
    height: 500px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 20px 50px 20px 50px;
    border-radius: 3px;
}
</style>