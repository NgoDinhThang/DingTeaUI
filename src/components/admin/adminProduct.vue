<template>
    <div style="margin-top:50px">
        <div class="insert">
            <button class="add" @click="showDialog()">Thêm mới</button>
        </div>
        <div class="table">
             <div class="m-table">
                <table>
                    <thead>
                        <th v-for="columnName in columnames" :key="columnName"> {{columnName}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.productId">
                            <td >{{product.productCode}}</td>
                            <td >{{product.productName}}</td>
                            <td >{{showNameManu(product.manufactureCode)}}</td>
                            <td >{{product.price}}</td>
                            <td >Trà sữa</td>
                            <td >
                                <img :src="toUrlImage(product.imageName,product.imageToken)" alt="">
                            </td>
                            <td>
                                <span @click="update(product)">Sửa </span>|<span @click="deleteProduct(product.productId)">Xoá </span>|<span @click="AddRemain(product)">Số lượng</span>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="dialog-insert" v-show="isDialogShow">
            <div class="form-insert">
                <div class="header">
                    <i class="material-icons" @click="isDialogShow=false">close</i>
                </div>
                <div class="title-insert"><h1>Quản lý sản phẩm</h1></div>
                <div class="content">
                    <div class="row-1">
                        <div class="cell-1">
                            <div class="text">Mã Sản phẩm<span>*</span></div>
                            <input type="text" class="fields" v-model="ProductDetail.productCode" disabled>
                        </div>
                        <div class="cell-2">
                            <div class="text">Tên Sản phẩm<span>*</span></div>
                            <input type="text" class="fields" ref="nameProduct" v-model="ProductDetail.productName">
                        </div>
                    </div>
                    <div class="row-1">
                        <div class="cell-1" style="z-index:1000">
                            <div class="text">Nhà cung cấp<span>*</span></div>
                            <input type="text" class="fields" ref="manuName" readonly>
                            <i class="material-icons  arrowcbb" @click="manuComboboxShow=!manuComboboxShow">arrow_drop_down</i>
                            <div class="manufacture-combobox" v-show="manuComboboxShow">
                                <div class="manu-item"  v-for="manu in listManufacture" :key="manu.manufactureCode" @click="selectManu(manu)">{{manu.manufactureName}}</div>
                            </div>
                        </div>
                        <div class="cell-2">
                            <div class="text">Giá bán<span>*</span></div>
                            <input type="text" class="fields" v-model="ProductDetail.price" >
                        </div>
                    </div>
                    <div class="row-1">
                        <div class="cell-1" style="z-index:999">
                            <div class="text">Loại sản phẩm<span>*</span></div>
                            <input type="text" class="fields" ref="productType" readonly>
                            <i class="material-icons  arrowcbb" @click="typeCbb=!typeCbb">arrow_drop_down</i>
                            <div class="manufacture-combobox" v-show="typeCbb">
                                <div class="manu-item" @click="slctProductType" >Trà sữa</div>
                            </div>
                        </div>
                        <div class="cell-2">
                            <div class="text">Ảnh<span>*</span></div>
                            <div class="slc-img" @click="$refs.inputImg.click()" v-show="!selectedImg">Nhấp vào dây để chọn ảnh</div>
                            <input type="file" class="img" ref="inputImg" @change="onfileChange()">
                            <div class="preview"><img  alt="" v-if="url" :src="url"></div>
                        </div>
                    </div>
                </div>
                <button class="submitAdd" @click="upload()">Thêm/Cập nhật</button>
            </div>
        </div>
        <baseAlert :titleAlert="titleAlert" v-show="isAlertShow" @closeAlert="isAlertShow=false" style="z-index:10000"/>
        <baseToastMessage v-show="isToastShow" :titleToast="toastTitle"/>
        <baseInputOption  @closeAlertOption="closeInputOption" :titleAlert="titleInput" @oke="updateRemain" v-show="isInputOptionShow"/>
    </div>
    
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import baseToastMessage from '../base/BaseToastMessage.vue'
import baseInputOption from '../base/BaseInputOption.vue'
import baseAlert from '../base/BaseAlert.vue'
import axios from 'axios'
// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLhFPJfaw_vTjyl-MjMJb-wI_o1_cZ0uY",
  authDomain: "milktea-5f9ee.firebaseapp.com",
  projectId: "milktea-5f9ee",
  storageBucket: "milktea-5f9ee.appspot.com",
  messagingSenderId: "140613955635",
  appId: "1:140613955635:web:d0ea97cf9407fda7853346",
  measurementId: "G-CGJXE0MY5Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
    components:{
        baseToastMessage,baseInputOption,baseAlert
    },
    created(){
        this.fetchProducts()
        this.getListManufacture()
        console.log('list', this.listManufacture)
    },
    computed:{
        ...mapGetters(["products","listManufacture"])
    },
    methods:{
        ...mapActions(["fetchProducts","getListManufacture"]),
        updateRemain(remainAdd){
            if(parseInt(remainAdd)){
                this.productUpdate.remain= this.productUpdate.remain + parseInt(remainAdd)
                axios.put(`https://localhost:25022/api/v1/Products/${this.productUpdate.productId}`,this.productUpdate)
                        .then(()=>{
                        this.isInputOptionShow = false
                        this.fetchProducts()
                        this.toastTitle ="Cập nhật thành công" 
                        this.isToastShow = true
                        setTimeout(() => {
                            this.isToastShow = false
                        }, 3000);
                        })
                        .catch(console.error())
            }
            else{
                this.isAlertShow = true
            }
            
        },
        closeInputOption(){
            this.isInputOptionShow = false
        },
        AddRemain(product){
            this.productUpdate = product
            console.log(this.productUpdate);
            this.isInputOptionShow = true
        },
        update(product){
            this.stateAdd = 1
            this.isDialogShow = true
            this.ProductDetail = product
            this.$refs.productType.value = "Trà sữa"
            this.selectedImg=true
            this.idPut =product.productId
            for (const manufacture of this.listManufacture) {
                if(manufacture.manufactureCode== this.ProductDetail.manufactureCode){
                    this.$refs.manuName.value = manufacture.manufactureName
                }
            }
            this.url= this.toUrlImage(this.ProductDetail.imageName,this.ProductDetail.imageToken)
        },
        deleteProduct(productId){
            axios.delete(`https://localhost:25022/api/v1/Products/${productId}`)
                        .then(()=>{
                        this.isDialogShow = false
                        this.fetchProducts()
                        })
                        .catch(console.error())
        },
        toUrlImage(imgName,imgToken){
            return `https://firebasestorage.googleapis.com/v0/b/milktea-5f9ee.appspot.com/o/${imgName}?alt=media&token=${imgToken}`
        },
        onfileChange(){
            const file = event.target.files[0];
            this.url = URL.createObjectURL(file);
            this.selectedImg=true
        },
        showDialog(){
            this.isDialogShow=true
            this.stateAdd = 0
            this.ProductDetail=
            {
                productCode:null,
                productName:null,
                manufactureCode:null,
                price:null,
                productType:0,
                imageName:null,
                imageToken:null
            }
            var lastProductCode= this.products[this.products.length - 1].productCode
            var newProductCode = parseInt(lastProductCode.slice(-2)) + 1
            if(newProductCode <10){
                newProductCode = "0" +newProductCode
            }
            this.ProductDetail.productCode = "SP"+newProductCode
            this.url= null
            this.selectedImg = false

        },
        upload(){
            var inputs = document.getElementsByClassName("fields")
            for (const input of inputs) {
                console.log(input.value);
                if(!input.value){
                    alert("Phải nhập đầy đủ tất cả các trường")
                    return
                }
            }
            if(this.stateAdd ==0)
            {
                const ref = firebase.storage().ref()
                this.ProductDetail.price = parseFloat(this.ProductDetail.price)
                console.log(this.$refs.inputImg);
                const file = this.$refs.inputImg.files[0]
                if(!file){
                    alert("Vui lòng tải ảnh của sản phẩm lên")
                    return
                }
                const metadata ={
                    contentType:file.type
                }
                const name = file.name
                
                const uploadIMG = ref.child(name).put(file,metadata)
                uploadIMG.then(snapshot =>snapshot.ref.getDownloadURL())
                .then(url=>{
                    this.ProductDetail.imageName = name
                    this.ProductDetail.imageToken = url.slice(-36)
                        axios.post('https://localhost:25022/api/v1/Products',this.ProductDetail)
                        .then(()=>{
                        this.isDialogShow = false

                        this.fetchProducts()
                        this.toastTitle ="Thêm mới thành công" 
                        this.isToastShow = true
                        setTimeout(() => {
                            this.isToastShow = false
                        }, 3000);
                        })
                    
                    
                    
                })
                .catch(
                )
            }else{
                 axios.put(`https://localhost:25022/api/v1/Products/${this.idPut}`,this.ProductDetail)
                        .then(()=>{
                        this.isDialogShow = false
                        this.fetchProducts()
                        this.toastTitle ="Cập nhật thành công" 
                        this.isToastShow = true
                        setTimeout(() => {
                            this.isToastShow = false
                        }, 3000);
                        })
                        .catch(console.error())
            }
        },
        selectManu(manu){
            this.$refs.manuName.value = manu.manufactureName
            this.ProductDetail.manufactureCode = manu.manufactureCode
            this.manuComboboxShow=false
        },
        slctProductType(){
            this.$refs.productType.value = "Trà sữa"
            this.typeCbb=false
        },
        showNameManu(manuCode){
            for (const manufacture of this.listManufacture) {
                if(manufacture.manufactureCode== manuCode){
                    return manufacture.manufactureName
                }
            }
        }
    },
    data() {
        return {
            columnames:["Mã sản phẩm","Tên sản phẩm","Tên nhà cung cấp","Giá bán","Loại sản phẩm","Ảnh",""],
            isDialogShow:false,
            url:null,
            selectedImg:false,
            ProductDetail:
            {
                productCode:null,
                productName:null,
                manufactureCode:null,
                price:null,
                productType:0,
                imageName:null,
                imageToken:null,
                idPut:null
            },
            manuComboboxShow:false,
            typeCbb:false,
            stateAdd:0,
            isToastShow:false,
            toastTitle:null,
            titleInput:"Nhập số lượng thêm",
            isInputOptionShow:false,
            productUpdate:null,
            titleAlert:"Chỉ cho phép nhập số",
            isAlertShow:false
        }
    },
}
</script>
<style>
.arrowcbb{
    position: absolute;
    left: 278px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    
    border-radius: 0px 2px 2px 0px;
}
.arrowcbb:hover{
    background-color: #ccc;
    cursor: pointer;
}
.manu-item{
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    height: 25px;
    line-height: 30px;
    padding: 2px;
}
.manu-item:hover{
    background-color: #23AE41;
    color: white;
    cursor: pointer;
}
.manufacture-combobox{
    position: absolute;
    background-color: white;
    width: 256px;
    border: 1px solid black;
    border-radius: 0px 0px 2px 2px;
}
.text span{
    color: red;
}
.submitAdd{
    position: absolute;
    bottom: 8px;
    right: 8px;
    height: 30px;
    background-color: #23AE41;
    color: white;
    border-radius: 3px;
    padding:0px 10px 0px 10px;
    border: 1px solid white;
}
.submitAdd:hover{
    cursor: pointer;
    border:1px solid #ccc
}
.title-insert{
    margin-left: 50px;
}
.preview img{
    height: 100px;
}
.preview{
    width: 258px;
    text-align: center;
    
}
.slc-img:hover{
    cursor: pointer;
}
.slc-img{
    width: 256px;
    height: 28px;
    border: 1px dotted rgb(162, 134, 191);
    border-radius: 2px;
    
    color: rgb(162, 134, 191);
    font-size: 14px;
    text-align: center;
    line-height: 28px;
    background-image: url(https://testesignwebsiteadminrd.misa.com.vn/images/ico-attach.png);
    background-repeat: no-repeat;
    background-position: center left;
}
.img{
    position:absolute;
    opacity: 0;
}
.fields{
    height: 24px;
    width: 250px;
    font-size: 14px;
}
.fields:focus{
    outline-color: #23AE41;
}
.text{
    margin-bottom: 5px;
    font-size: 14px;
    
}
.row-1{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
}
.content{
    padding:20px 50px 20px 50px;
}
.header .material-icons{
    float: right;
    font-size: 30px;
    margin-right: 2px;
    color: rgba(0, 0, 0, 0.685);
}
.header .material-icons:hover{
    color: black;
    cursor: pointer;
}
.header{
    height: 30px;
    width: 100%;
    line-height: 30px;
}
.form-insert{
    position: absolute;
    width: 50%;
    height: 500px;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.dialog-insert{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.insert{
    width: 90%;
    margin-right: 10%;
    margin-bottom: 10px;
    height: 30px;
}
.add{
    float: right;
    height: 30px;
    background-color: #23AE41;
    color: white;
    border: unset;
    border-radius: 3px;
    padding:0px 10px 0px 10px;
    border: 1px solid white;
}
.add:hover{
    cursor: pointer;
    border:1px solid #ccc
}
.table{
    width:80%;
    margin-left: 10%;
}
.m-table ,td{
    border-bottom: 1px solid #ccc;
    
}
.m-table th{
    min-width: 100px;
    background-color: #785F91;
    color: white;
    height: 35px;
}
.m-table td{
    height: 100px;
    text-align: center;
    font-size: 14px;
    
}
.m-table td img{
    width: 50px;
}


.m-table table{
    word-spacing: 0px;
    white-space: 0px;
    border-spacing: 0px;
    max-width: 100%;
    min-width: 100%;
    position: sticky;
}
.m-table{
    width: 100%;
}
td span{
    color:lightskyblue;
    margin-left: 5px;
    margin-right: 5px;
}
td span:hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>