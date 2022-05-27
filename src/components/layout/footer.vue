<template>
    <div class="home-contact">
            <div class="more-news">
                <div class="about-us">
                    <div class="more-news-title">
                        VỀ CHÚNG TÔI
                    </div>
                    <div class="detail">
                        <div class="company more-news-item">Công ty</div>
                        <div class="career more-news-item">
                            Cơ hội nghề nghiệp
                        </div>
                    </div>
                </div>
                <div class="customer-service">
                    <div class="more-news-title">
                        DỊCH VỤ KHÁCH HÀNG
                    </div>
                    <div class="detail">
                        <div class="questions more-news-item">
                            Câu hỏi thường gặp
                        </div>
                    </div>
                </div>
                <div class="fast-link">
                    <div class="more-news-title">
                        LIÊN KẾT NHANH
                    </div>
                    <div class="detail">
                        <div class="search-store more-news-item">
                            Tìm cửa hàng
                        </div>
                        <div class="for-partner more-news-item">
                            Dành cho đối tác
                        </div>
                    </div>
                    
                </div>
                <div class="social-network">
                    <img src="https://dingtea.vn/images/ft-facebook.png" alt="" style="margin-right:20px">

                    <img src="https://dingtea.vn/images/ft-instagram.png" alt="">
                </div>
            </div>
            <div class="copyright">
                <p style="margin:0px">
                <img src="https://dingtea.vn/images/logo-txt.png" width="155px" alt="">
                </p>
                <p>© Copyright by MAPLE LEAVES TSAIP CO.,LTD</p>
                <p>Công ty TNHH TMDV & ĐTSX Lá Phong</p>
            </div>
        </div>
</template>
<style  scoped>
.copyright{
    color: white;
    display: grid;
}
.copyright p{
    justify-self: end;
}
.more-news-item{
    line-height: 30px;
    opacity: 0.7;
}
.more-news-item:hover{
    cursor: pointer;
    color: #E3C383;
    opacity: 1 !important;
}
.more-news-title{
    margin-bottom: 15px;
}
.more-news{
    display: flex;
    color: white;
    width: 60%;
    justify-content: space-between;
    padding: 0px 20px 0px 100px ;
}
.home-contact{
    background-color: #242221;
    padding: 40px 20px 30px 20px;
    margin-top: 50px;
    display: flex;
    height: max-content;
}
</style>