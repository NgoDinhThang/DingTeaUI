<template>
    <div class="user-login">
        <div class="form-login">
            <form @submit.prevent="onLogin(account)" >
                <h2>Đăng nhập</h2>
            <div class="field">
                <div>Tên đăng nhập</div>
                <input type="text" id="account-name" class="input" v-model="account.accountName">
            </div>

            <div class="field">
                <div>Mật khẩu</div>
                <input type="password" id="password" class="input" v-model="account.accountPassword">
            </div>
            <div class="loginError"><span  v-show="loginError">Tên đăng nhập hoặc mật khẩu không chính xác</span></div>
            <button id="login" >Đăng nhập</button>
            </form>
            


        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters(["loginError"])
        },
        methods: {
            ...mapActions(["onLogin"])
        },
        data() {
            return {
                account:{
                    accountName:null,
                    accountPassword:null,
                }
            }
        }
    }
</script>
<style scoped>
.loginError{
    color: red;
    font-size: 14px;
    margin-top: 10px;
    height: 15px;
}
#login{
    margin-top: 20px;
    border-radius: 2px;
    width: 300px;
    border: unset;
    height: 36px;
    background-color: #343A41;
    color: white;
}
button:hover{
    cursor: pointer;
    outline-width: 2px;
    outline-color: #ccc;
    outline-style: solid;
}
.field div{
    margin-bottom: 5px;
    font-size: 14px;
}
.field{
    padding-top: 30px;
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
    width: 300px;
    height: 400px;
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
.field input{
    width: 266px;
    padding-left: 15px;
    padding-right: 15px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 2px;
    /* outline-color: #ccc */

}
.field input:focus{
    border-color: black;
    outline: unset;
}
</style>