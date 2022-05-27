<template>
    <div class=" title">
                <div class="point"></div>
                {{title}}
                <div class="point"></div>
            </div>
</template>
<script>
export default {
    props:[
        "title"
    ],
}
</script>
<style  scoped>
.title{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-size: 36px;
    padding: 20px 0px 20px 0px;
    width: max-content;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    font-weight: 600;
}
.point{
    width: 10px;
    height: 10px;
    background-color: #e3c383;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 50%;
}
</style>