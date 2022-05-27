<template>
    <div class="intro-title">
        <span>{{titleParent}}</span><span style="opacity:0.5">/ {{titleChild}}</span>
    </div>
</template>
<script>

export default ({
    props:[
        "titleParent","titleChild"
    ]
    
})
</script>
<style  scoped>

.intro-title span{
    margin-right: 5px;
}
.intro-title{
    background-color: #EAECEF;
    height: 48px;
    line-height: 48px;
    padding-left: 20px;
    border-radius: 5px;
    margin-bottom: 40px;
}

</style>
