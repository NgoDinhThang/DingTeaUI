<template>
    <div class="intro-home">
        <div class="intro-home-content">
            <baseTitleTag :titleParent= "titleParent" :titleChild = "titleChild"/>
            <baseTitle title="GIỚI THIỆU DING TEA" />
            <div class="content">
                Ding Tea hiện là thương hiệu đồ uống lớn nhất của Đài Loan tại Trung Quốc. Thương hiệu Ding Tea đang như một cơn bão rất nhanh chóng lan rộng ra xung quanh những nước Châu Á. Đi đến đâu Ding Tea cũng nhận được sự yêu quý của khách hàng các nước. Đây cũng là loại trà có hương vị khác biệt nhất, đủ tiêu chuẩn và là thương hiệu đồ uống duy nhất để đưa vào giới thiệu tại Shanghai World Expo 2010. Tại khu vực Châu Á, Dingtea đã có hơn 350 chuỗi cửa hàng trải rộng từ Bắc vào Nam của Trung Quốc, trên toàn thế giới Ding Tea sở hữu chuỗi 650 cửa hàng.
                <br>
                <br>
                Dingtea hiện tại đã có chi nhánh cửa hàng tại Đài Loan, Nhật Bản, Trung Quốc, Hồng Kong, Indonesia, Malaisia, Singapor, Việt Nam, Myanma, Brunei, v.v..
                <br>
                <br>
                Trong suốt quá trình phát triển của mình Dingtea luôn tập trung vào việc kết hợp và tạo ra những sản phẩm chất lượng cao nhất và phải tạo được sự khác biệt so với những sản phẩm cùng loại trên thị trường. Để làm được điều này, chỉ số chất lượng của tất cả các nguyên liệu và các thành phần được sử dụng trong Dingtea không chỉ vượt qua được chứng nhận SGS Đài Loan mà họ cũng đã vượt qua 231 bài thử nghiệm chất lượng của SGS Nhật Bản về việc cấp phép nhập khẩu. Dingtea hoàn toàn không sử dụng hương liệu phụ gia để bảo quản. Ngoài tính đặc trưng hơn so với các sản phẩm khác, Ding Tea còn thể hiện văn hóa trà chuyên nghiệp, tinh tế và độc đáo của người Đài Loan.
                <br>
                <br>
                Để luôn có được loại trà tốt nhất, Dingtea đã ký hợp đồng với những nông dân ở vùng cao. Chăm sóc tại những vườn chè với nhiệt độ thấp và có độ cao lên đến 1000m, cùng với việc lựa chọn tỉ mỉ một đầu-hai-lá, trà đã pha không chỉ toả ra một hương vị ngọt ngào mà còn có mùi thơm đặc biệt. Phần lớn các loại trà trên thị trường đều có xuất xứ từ Trung Quốc, hương thơm được tăng lên thông qua việc sử dụng các phụ gia, trong khi vị đắng và vị ngọt được điều chỉnh thông qua các chất làm ngọt, do đó chất lượng có sự khác biệt đáng kể so với Dingtea.
            </div>
        </div>
        <div class="intro-home-care">
            <div class="intro-home-care-title">
                Có thể bạn quan tâm
            </div>
            <div class="intro-home-care-select">
                <div class="select-item">
                    <span>Giới thiệu Ding Tea</span>
                    <span><i class="material-icons">navigate_next</i></span>
                </div>
                <div class="select-item">
                    <span>Câu chuyện Ding Tea</span>
                    <span><i class="material-icons">navigate_next</i></span>
                </div>
                <div class="select-item">
                    <span>Thành tựu</span>
                    <span><i class="material-icons">navigate_next</i></span>
                </div>
                <div class="select-item">
                    <span>Nhượng quyền thương hiệu</span>
                    <span><i class="material-icons">navigate_next</i></span>
                </div>
                <div class="select-item">
                    <span>Sản phẩm</span>
                    <span><i class="material-icons">navigate_next</i></span>
                </div>
                <div class="select-item">
                    <span>Cơ hội nghề nghiệp</span>
                    <span><i class="material-icons">navigate_next</i></span>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import baseTitle from '../base/BaseTitle.vue'
import baseTitleTag from "../base/BaseTitleTag.vue"
export default ({
    components:{
        baseTitle,baseTitleTag
    },
    data() {
        return {
            titleParent:"Giới thiệu",
            titleChild:"Giới thiệu Ding Tea"
        }
    },
})
</script>

<style  scoped>
.material-icons{
    color: black;
    background-color: #E3C383;
    font-size: 18px;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-left: 40px;
}
.select-item span{
    line-height: 45px;
}
.select-item{
    border-bottom: 1px solid #E3C383;
    color: #E3C383;
    display: flex;
    justify-content: space-between;
}
.intro-home-care-select{
    display: grid;
}
.intro-home-care-title{
    font-size: 24px ;
    margin-bottom: 20px;
}
.intro-home-care{
    padding: 100px 20px 100px 50px;
}
.content{
    margin-top: 40px;
    font-size: 15px;
    font-weight: 100 !important;
    line-height: 24px;
}

.intro-home-content{
    width: 70%;
}
.intro-home{
    padding: 0px 120px 0px 120px;
    display: flex;
}
</style>