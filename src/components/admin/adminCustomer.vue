<template>
    <div style="margin-top:50px">
        <div class="table">
            <div class="m-table">
                <table>
            <thead>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Email</th>
                <th>Số điện thoại</th>
            </thead>
            <tbody>
                <tr v-for="customer in listCustomer" :key="customer.customerId">
                    <td>{{customer.customerCode}}</td>
                    <td>{{customer.customerName}}</td>
                    <td>{{toDate(customer.dateOfBirth)}}</td>
                    <td>{{customer.gender}}</td>
                    <td>{{customer.address}}</td>
                    <td>{{customer.email}}</td>
                    <td>{{customer.phoneNumber}}</td>
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
        this.fetchCustomer()
    },
    methods: {
        fetchCustomer(){
            axios.get('https://localhost:25022/api/v1/Customers')
            .then((res)=>{
                this.listCustomer= res.data
            })

        },
        toDate(value){
            return value.slice(0,10)
        },
        // toGender(value){
        //     switch (value) {
        //         case "Male":
        //             return "Nam"
        //         case "FeMale":
        //             return "Nữ"
            
        //         default:
        //             break;
        //     }
        // }
    },
    data() {
        return {
            listCustomer:null
        }
    },
    
}
</script>
<style scoped>
.table{
    max-width: 80%;
    overflow: scroll;
}
</style>