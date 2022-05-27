<template>
    <div class="search-store">
        
        <baseTitleTag :titleParent= "titleParent" :titleChild = "titleChild"/>

        <baseTitle title="Các cửa hàng trên toàn quốc"/>
            <mCombobox class="province" :valDefault="provinceSearch" :valueSelects="province" :index="0" @selectItem="selectItem"  style="z-index:1000;"/>
            <mCombobox :valDefault="districtSearch"  :valueSelects="district" :index="1" @selectItem="selectItem" style="z-index:99;"/>
        

    </div>
</template>
<script>
import baseTitle from '../base/BaseTitle.vue'
import mCombobox from '../base/BaseCombobox.vue'
import baseTitleTag from "../base/BaseTitleTag.vue"
import { mapActions, mapGetters } from 'vuex'
export default ({
    components:{
        baseTitle,mCombobox,baseTitleTag
    },
    computed:{
         ...mapGetters(["provinceSearch","districtSearch","province","district"])
    },
    created(){
        this.fetchProvince()

    },
    methods: {
        ...mapActions(["fetchProvince","updateProvinceSearch","updateDistrictSearch"]),
        selectItem(valueSl,index){
            if(index ==0){
                this.updateProvinceSearch(valueSl)
            }
            else{
                this.updateDistrictSearch(valueSl)
            }
        }
       
    },
    data() {
        return {
            titleParent:"Danh sách cửa hàng",
            titleChild:"Cửa hàng theo quận"
        }
    },
    
    
})
</script>
<style  scoped>
.province{
    margin-top: 40px;
}
.search-store{
    padding-left: 10%;
    padding-right: 10%;
    min-height: 500px;
}
</style>
