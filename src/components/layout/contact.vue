<template>
    <div class="contact-header">
        <i class="fab fa-facebook-f item-contact fb-isg" ></i>
        <i class="fab fa-instagram item-contact fb-isg" ></i>
        <i class="fas fa-phone-alt item-contact"></i>
        <div class="phone-number item-contact">1900 2003</div>
        <div class="login-regis" v-show="loginRegisShow">
            <div class="login-btn" @click="toLogin()">Đăng nhập</div>
            <div class="regis-btn" @click="toRegis()">Đăng ký</div>
        </div>
        
        <div class="options" v-show="isAvatarShow">
            <i class="fa fa-user icon-drd" @click="isOptionShow = !isOptionShow"></i>
            <div class="dropdown-options" v-show="isOptionShow">
                <div class="option-item" @click="history()">Lịch sử mua hàng</div>
                <div class="option-item" @click="changePassword()">Đổi mật khẩu</div>
                <div class="option-item" @click="isConfirmShow = true">Đăng xuất</div>

            </div>
        </div>


        <div class="confirm-dialog" v-show="isConfirmShow" style="z-index:1000">
            <div class="order-confirm">
            <i class="material-icons confirm">info_outline</i>
            <div class="title-confirm" >
                Bạn có muốn đăng xuất
            </div>
            <div class="button-confirm">
                <button style="background-color:#DE3333" @click="isConfirmShow = false">Huỷ</button>
                <button style="background-color:#3185D6" @click="userLogOut()">Đồng ý</button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex"
import router from '../../routes'

export default ({
    created(){
        if(localStorage.customerId){
            this.loginRegisShow = false
            this.isAvatarShow = true
        }
        else{
            this.loginRegisShow = true
            this.isAvatarShow = false
        }
    },
    computed:{
        
    },
    methods: {
        ...mapActions(["userLogOut","updateChangePassword","updateHistoryOrderShow"]),
        toLogin(){
            router.push('/user-login')
        },
        toRegis(){
            router.push('/user-regis')
        },
        history(){
            this.isOptionShow = false
            const scrollTop = window.pageYOffset
            const scrollLeft = window.pageXOffset
            window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
            this.updateHistoryOrderShow(true)
        },
        changePassword(){
            this.updateChangePassword(true)
            this.isOptionShow = false
        },
        logOut(){

            this.isOptionShow = false
        }
    },
    data() {
        return {
            isOptionShow:false,
            loginRegisShow:false,
            isConfirmShow:false,
            isAvatarShow:false
        }
    },
})
</script>
<style  scoped>
.login-regis div:hover{
    cursor: pointer;
    text-decoration: underline;
}
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
    color: black;
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



.icon-drd{
    border-radius: 50%;
    border:1px solid white;
    width: 36px;
    height: 36px;
    text-align: center;
    line-height: 40px;

}
.option-item{
    border: 1px solid #ccc;
    color: black;
    text-align: center;
    line-height: 40px;
}
.option-item:hover{
    background-color: #e4c89b;
    color: white;
    cursor: pointer;
}
.dropdown-options{
    position: absolute;
    width: 150px;
    right: -10px;
    font-size: 12px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;

}
.options{
    width: 38px;
    height: 38px;
    
    
    font-size: 24px;
     position: absolute;
    right: 10px;
    color: white;
}
.icon-drd:hover{
 cursor: pointer;
 background-color: white;
 color: black ;
}

.login-regis{
    height: 100%;
    display: flex;
    line-height: 40px;
    margin-left: 10px;
    
}
.login-regis div{
    margin-left: 10px;
    font-size: 16px;
}
.contact-header{
    height: 40px;
    background-color: #242221;
    display: flex;
    align-items: center;
    padding-left: 10%;
    padding-right: 5%;
    justify-content: right;
    color: white;
    font-size: 1.25vw;
}

.item-contact{
    padding-left: 15px;
}
.phone-number{
    padding-left: 5px;
}
.fa-instagram::before{
    font-size: 1.5vw;
}
.fb-isg:hover{
    cursor: pointer;
    color: #E3C383;
}

</style>
