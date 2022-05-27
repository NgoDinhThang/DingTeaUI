<template>
    <div style="margin-top:50px">
        <div class="table">
            <div class="m-table">
                <table>
                    <thead>
                        <th>Mã khách hàng</th>
                        <th>Tên tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Ngày tạo</th>
                    </thead>
                    <tbody>
                        <tr v-for="account in listAccount" :key="account.customerId">
                            <td class="ad">{{account.customerCode}}</td>
                            <td class="ad">{{account.accountName}}</td>
                            <td class="ad">{{account.accountPassword}}</td>
                            <td class="ad">{{toDate(account.createdDate)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    created(){
        this.fetchAccount()
    },
    methods: {
        fetchAccount(){
            axios.get('https://localhost:25022/api/v1/Accounts')
            .then((res)=>{
                this.listAccount = res.data
                console.log(res.data);
            })
        },
        toDate(value){
            return value.slice(0,10)
        }
    },
    data() {
        return {
            listAccount:null
        }
    },
}
</script>
<style>
    
</style>