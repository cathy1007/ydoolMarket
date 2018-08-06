<template>
    <div class="company-des global-container clearfix">
       <img class="info-logo fl" src="../../../assets/img/logo.jpg" alt="logo">
       <div class="info-des">
           <h3>宁波云网络科技有限公司</h3>
           <div class="info-detail">我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？</div>
       </div> 
    </div>
</template>
<script>
   export default{
        data() {
            return {

            }
        },
        mounted() {
            console.log('info----------------')
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    .company-des {
        margin:30px auto;
        padding:30px;
        background:$white;
        .info-des {
          padding-left:140px;
        }
        .info-detail {
            margin-top:10px;
            line-height:1.5;
            color:$lightGray;
            font-size:14px;
        }
    }
</style>
