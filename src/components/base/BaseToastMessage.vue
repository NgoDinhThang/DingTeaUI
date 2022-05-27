.<template>
    <div class="m-toast">
        {{titleToast}}
    </div>
</template>
<script>

export default {
    props:[
        "titleToast"
    ]
}
</script>
.<style scoped>
.m-toast{
    position: fixed;
    height: 30px;
    background-color: #D6EBCF;
    right: 50px;
    bottom: 20px;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 30px;
    background-image: url(https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/success-24.png);
    background-size: 20px 20px;
    background-position: 5% 50%;
    background-repeat: no-repeat;
    padding-left: 50px;
    font-size: 14px;
    color: #23AE41;
    
}
</style>