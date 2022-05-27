<template>
    <div class="m-changepassword">
        <div class="change-form">
            <h2 >Đổi mật khẩu</h2>
            <div class="row">
                Mật khẩu mới:
                <input type="password" class="new-pass" ref="pass">
            </div>
            <div class="row">
                Nhập lại mật khẩu:
                <input type="password" class="retype-pass" ref="reTypePass">
            </div>
            <div class="option">
                <button class="close" @click="updateChangePassword(false)"> Huỷ </button>
                <button class="changPass" @click="changePassword()">Đổi mật khẩu</button>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(["updateChangePassword"]),
        changePassword(){
            if(this.$refs.pass.value != this.$refs.reTypePass.value ){
                alert("Mật khẩu không chính xác")
                return
            }
            axios.put(`https://localhost:25022/api/v1/Accounts/changepass/${localStorage.customerId}/${this.$refs.pass.value}`,)
            .then(()=>{
                this.updateChangePassword(false)
            })
            .catch((err)=>{
                alert(err)
            })
        }
    },
}
</script>
<style scoped>
.close{
    background-color: red;
}
.changPass{
    background-color: #23ae41;
}
button:hover{
    cursor: pointer;
}
.option button{
    padding: 8px 14px 8px 14px;
    border: unset;
    color: white;
    border-radius: 3px;
}
.option{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.row input{
    float: right;
    width: 250px;
    height: 28px;
    font-size: 18px;
}
.row{
    margin-top: 30px;
    line-height: 34px;
}
.change-form h2{
    width: 100%;
    text-align: center;
    
}
.m-changepassword{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
}
.change-form{
    position: absolute;
    width: 400px;
    height: 280px;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding:20px 50px 20px 50px;
    border-radius: 5px;
}
</style>