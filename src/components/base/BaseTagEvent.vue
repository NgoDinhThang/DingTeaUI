<template>
    <div class="tag-event">
        <div class="image-event">
            <img src="https://dingtea.vn/images/tet-2020/tet.png" alt="">

        </div>
        <div class="content-event">
            <div class="event-title">
                Thông báo lịch hoạt động tết 2020 Dingtea Hà Nội
            </div>
            <div class="type-time">
                Sự kiện - 20/01/2020
            </div>
            <div class="content">
                Ding Tea Hà Nội thông báo thời gian Đóng – Mở cửa Tết Canh Tý 2020, các bạn có thể dễ dàng theo dõi theo các khu vực Quận/Huyện thành phố Hà Nội.
            </div>
        </div>


    </div>
</template>
<style  scoped>
.content-event .content{
    line-height: 20px;
    color: #212529;
    font-size: 15px;
    font-weight: 200 !important;
}
.content-event div{
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;

}
.event-title{
    font-weight: bold;
    font-size: 20px;
}
.tag-event{
    width: 100%;
    height: 180px;
    padding-bottom: 30px;
    display: flex;
}
.image-event img{
    height: 180px;
    margin-right: 20px;
}
.type-time{
    color: #ccc;
    font-style: italic;
}
</style>