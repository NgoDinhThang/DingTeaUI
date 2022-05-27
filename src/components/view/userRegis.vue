<template>
    <div class="user-login">
        <div class="form-login">
            <form @submit.prevent="onRegis()">
                <h2>Đăng ký</h2>
                <div class="row">
                    <div class="field">
                        <div class="title-field">Mã khách hàng <span>*</span></div>
                        <input type="text" class="input-field" disabled v-model="customer.customerCode">
                    </div>
                    <div class="field">
                        <div class="title-field">Tên khách hàng <span>*</span></div>
                        <input type="text" class="input-field" v-model="customer.customerName">
                    </div>
                </div>
                <div class="row">
                    <div class="field">
                        <div class="title-field">Ngày sinh <span>*</span></div>
                        <input type="date" class="input-field" v-model="customer.dateOfBirth">
                    </div>
                    <div class="field" >
                        <div class="title-field">Giới tính <span>*</span></div>
                        <input type="text" class="input-field gender-input" v-model="customer.gender" readonly>
                        <i class="material-icons arr-cbb" @click="isComboboxShow = !isComboboxShow">arrow_drop_down</i>
                        <div class="gender-cbb" v-show="isComboboxShow">
                            <div class="item" @click="selectGender()">Nam</div>
                            <div class="item" @click="selectGender()">Nữ</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="field">
                        <div class="title-field">Địa chỉ <span>*</span></div>
                        <input type="text" class="input-field" v-model="customer.address">
                    </div>
                    <div class="field">
                        <div class="title-field">Email<span>*</span></div>
                        <input type="text" class="input-field" v-model="customer.email">
                    </div>
                </div>
                <div class="row">
                    <div class="field">
                        <div class="title-field">Số điện thoại<span>*</span></div>
                        <input type="text" class="input-field" v-model="customer.phoneNumber">
                    </div>
                    <div class="field">
                        <div class="title-field">Tên đăng nhập<span>*</span></div>
                        <input type="text" class="input-field" v-model="account.accountName">
                    </div>
                </div>
                <div class="row">
                    <div class="field">
                        <div class="title-field">Mật khẩu<span>*</span></div>
                        <input type="password" class="input-field" v-model="account.accountPassword">
                    </div>
                    <div class="field">
                        <div class="title-field">Nhập lại mật khẩu<span>*</span></div>
                        <input type="password" class="input-field" v-model="account.reTypePassword">
                    </div>
                </div>
                <button>Đăng ký</button>
            </form>
            

        
        </div>
        <baseAlert :titleAlert="titleAlert" v-show="isAlertShow" @closeAlert="closeAlert()"/>
        <baseAlertOption :titleAlert="titleAlertOption" v-show="isAlertOptionShow " @closeAlertOption ="isAlertOptionShow = false" @oke="oke()"/>
    </div>
</template>
<script>
import axios from 'axios'
import baseAlert from '../base/BaseAlert.vue'
import baseAlertOption from '../base/BaseAlertOption.vue'
import router from '../../routes.js'

export default {
    components:{
        baseAlert,baseAlertOption
    },
    created(){
        this.getListAccount()
        this.getListCustomer()
        
    },
    methods: {
        oke(){
            router.push('/user-login')
        },
        getListAccount(){
            axios.get('https://localhost:25022/api/v1/Accounts')
            .then((res)=>{
                this.listAccount = res.data
            })
        },
        getListCustomer(){
            axios.get('https://localhost:25022/api/v1/Customers')
            .then((res)=>{
                this.listCustomer  = res.data
                var lastCustomerCode =this.listCustomer[this.listCustomer.length-1].customerCode;
            var newCode =parseInt(lastCustomerCode.slice(-2))+1
            if(newCode < 10){
                newCode = "0"+ newCode
            }
            this.customer.customerCode = "KH" + newCode
            })
        },
        selectGender(){
            this.customer.gender = event.currentTarget.innerHTML
            this.isComboboxShow = false
        },
        onRegis(){
                var inputs =document.getElementsByClassName("input-field")
                for (const input of inputs) {
                    if(!input.value){
                        this.titleAlert = "Vui lòng nhập đầy đủ thông tin!"
                        this.isAlertShow = true
                        return
                    }
                    else{
                    if(this.account.accountPassword != this.account.reTypePassword){
                        this.titleAlert = "Vui lòng kiểm tra lại mật khẩu"
                        this.isAlertShow = true
                        return
                    }
                        
                    
                    }
                }
                for (const accountt of this.listAccount) {
                    if(this.account.accountName == accountt.accountName){
                        console.log("11111");
                        this.titleAlert = "Tên đăng nhập đã tồn tại"
                        this.isAlertShow = true
                        return
                    }
                    
                }
                axios.post(`https://localhost:25022/api/v1/Customers`,this.customer)
                        .then((res)=>{
                            this.account.customerId = res.data.id
                            this.account.createdDate = new Date()
                            this.account.customerCode = this.customer.customerCode
                            axios.post(`https://localhost:25022/api/v1/Accounts`,this.account)
                            .then(()=>{
                                this.titleAlertOption="Đăng ký thành công, đăng nhập ngay bây giờ?"
                                this.getListAccount()
                                this.getListCustomer()
                                this.isAlertOptionShow = true
                            })
                        })
        },
        closeAlert(){
            this.isAlertShow = false
        }

    },
    data() {
        return {
            isComboboxShow:false,
            listAccount:null,
            listCustomer:null,
            customer:{
                customerCode:null,
                customerName:null,
                dateOfBirth:null,
                gender:null,
                address:null,
                email:null,
                phoneNumber:null,
            },
            account:{
                customerId:null,
                customerCode:null,
                accountName:null,
                accountPassword:null,
                createdDate:null,
                reTypePassword:null
            },
            titleAlert:null,
            isAlertShow:false,
            titleAlertOption:null,
            isAlertOptionShow:false
        }
    },
    
}
</script>
<style scoped>
button:hover{
    cursor: pointer;
    background-color: #23AE41;
}
button{
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
    padding: 10px 15px  10px 15px;
    background-color: #3c834b;
    border:unset;
    color: white;
    border-radius: 2px;
}
.gender-cbb div:hover{
    background-color: #6cd883;
    color: white;
    cursor: pointer;
}
.gender-cbb div{
    height: 36px;
    border-bottom: 1px solid black;
    line-height: 36px;
    padding-left: 10px;
    font-size: 14px;
}
.gender-cbb{
    position: absolute;
    background-color: white;
    z-index: 100;
    width: 234px;
    border: 1px solid black;
    height: max-content;

}
.field{
    position: relative;
}
.input-field:focus{
    outline-color: #23AE41;
}
button:focus{
    outline-color: #23AE41;
}
.arr-cbb:hover{
    background-color: #ccc;
    cursor: pointer;
}
.arr-cbb{
    position: absolute;
    right: 1px;
    bottom: 1px;
    line-height: 34px;
    width: 34px;
    text-align: center;
}
span{
    color: red;
}
.input-field{
    height: 30px;
    width: 220px;
    margin-top: 5px;
    padding-left: 10px;
}
.row{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.user-login{
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url(https://thietkecafedep.com.vn/upload/images/THI%E1%BA%BET%20K%E1%BA%BE%20M%E1%BA%AAU/Tr%C3%A0%20s%E1%BB%AFa/DingTea%20-%20%C4%90%C3%A0%20N%E1%BA%B5ng/DINGTEA_DN_NT_TANG1_SUA_C.png);
    background-size: 100%;
    background-repeat: no-repeat;
}
.form-login{
    position: absolute;
    width: 500px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.959);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    padding: 5px 50px 5px 50px;
}
.form-login h2{
    text-align: center;
}

</style>