<template>
    <div class="global-container">
       <div class="company-des clearfix">
            <img class="info-logo fl" src="../../../assets/img/logo.jpg"  alt="logo">
           <div class="info-des">
               <h3>宁波云网络科技有限公司</h3>
               <div class="info-detail">我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？我是公司介绍介绍介绍介绍介绍，是富文本吗？</div>
           </div> 
       </div>
       <div class="company-evaluate">
           <el-row>
               <el-col class="company-info" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                   <h3>宁波云朵网络科技有限公司</h3>
                   <p><span>地区: 浙江省，杭州市</span><span>服务时间：工作日9-18:00</span>
                   </p>
                   <p><span>综合评分</span><span>入驻时间：2018-02-30</span>
                   </p>
                   <p><span>服务热线：0567-00000000</span><span>服务地区：宁波市，杭州市，温州市</span>
                   </p>
                   <div class="service-tag">
                       <span class="tag-title">主营</span>
                       <span>APP开发</span>
                       <span>logo设计</span>
                       <span>广告设计</span>
                       <span>设计</span>
                   </div>
               </el-col>
                <el-col class="company-compre" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <h3>综合评分</h3>
                    <div class="compre-container">
                        <div class="compre-item"><span class="item-des">工作速度：</span>
                            <i class="el-icon-star-on active-icon" v-for="(item,index) in 5"></i>
                            <span class="compre-score"><span>4.54</span>分</span>
                        </div>
                         <div class="compre-item compre-rather">比同行业平均水平<span class="low-rather">低8.33%</span>
                         </div>
                    </div>
                    <div class="compre-container">
                        <div class="compre-item"><span class="item-des">工作质量：</span>
                            <i class="el-icon-star-on active-icon" v-for="(item,index) in 5"></i>
                            <span class="compre-score"><span>4.54</span>分</span>
                        </div>
                         <div class="compre-item compre-rather">比同行业平均水平<span class="high-rather">高8.33%</span>
                         </div>
                    </div>
                    <div class="compre-container">
                        <div class="compre-item"><span class="item-des">工作态度：</span>
                            <i class="el-icon-star-on active-icon" v-for="(item,index) in 5"></i>
                            <span class="compre-score"><span>4.54</span>分</span>
                        </div>
                         <div class="compre-item compre-rather">比同行业平均水平<span class="high-rather">高8.33%</span>
                         </div>
                    </div>
                    <div class="compre-promise">服务保障 
                        <span class="compre-guarantee"><img src="../../../assets/img/guarantee.png" height="19" width="18" alt="promise">承诺按时按质保证完成</span>
                        <span class="compre-invoice"><img src="../../../assets/img/invoice.png" height="16" width="19" alt="fapiao">提供发票</span></div>
                </el-col>
           </el-row>
       </div>
       <div class="company-service">
         <div class="part-title"><h2>服务内容推荐</h2><span @click="goService">更多>></span></div>
           <el-row :gutter="10">
                <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="item in 4">
                    <div class="service-item">
                        <h3 class="service-title">LOGO设计-标识设计-品类设计</h3>
                        <p class="service-des">一口价：含代理费、发票</p>
                        <p class="service-sale"><span>销量 780</span><span>咨询量 621</span></p>
                        <h2 class="service-price">$1200</h2>
                        <p class="service-detail">查看详情</p>
                    </div>
                </el-col>
            </el-row>
       </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            console.log('home------------')
        },
        methods:{
            goService() {
                
                this.$emit('change-tab', "2")
            }
        }
    }
</script>
<style lang="scss" scoped>
    .company-des {
        margin:30px 0;
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
    
    .company-evaluate {
        background:$white;
        border-radius:2px;
        .el-col {
            padding:20px;
            h3 {
              margin-bottom:10px;
              padding:10px 0;
              border-bottom:1px solid #e5e5e5;
            }
        }
    }
    .company-info {
        p{
            line-height:2;
            font-size:12px;
            span {
                display:inline-block;
                width:50%;
            }
        }
    }
    .service-tag {
        margin-top:20px;
        span {
           display:inline-block;
           font-size:12px;
           border:1px solid $orange;
           padding:4px 8px; 
           background:$lightOrange;
           color:#fed566;
        }
        .tag-title {
            background:#fed566;
            color:$textColor;
        }
       

    }
    .company-compre {

        .compre-item{
            display:inline-block;
            width:50%;
            margin-right:-4px;
            line-height:2.2;
            font-size:12px;
            .active-icon {
                color:$orange;
            }
            .item-des {
                font-size:14px;
                padding-right:20px;
            }
        }
        .compre-score {
            color:$lightGray;
            span {
                color:#ff6805;
                padding:0 14px;
            }
        }
        .compre-rather {
            color:$lightGray;
            .low-rather {
                float:right;
                padding-right:30px;
                color:#57cb02;
            }
            .high-rather {
                float:right;
                padding-right:30px;
                color:$priceColor;
            }
        }
        .compre-promise {
            margin-top:20px;
            img{
                vertical-align:middle;
                margin-right:10px;
            }
            span{
                padding-left:20px;
                color:#a0a0a0;
            }
        }
    }
    .company-service {
        margin: 30px 0;
        .part-title {
            position:relative;
            margin-bottom:20px;
            padding-left:6px;
            border-left:2px solid $orange;
            span{
                position:absolute;
                top:0;
                right:20px;
                color:#979797;
                font-size:12px;
            }
        }
    }

    .service-item {
        position:relative;
        background:$white;
        border-radius:2px;
        border:1px solid $borderColor;
        padding:20px;
        &:hover {
           border:1px solid $orange;
           .service-detail {
            opacity:1;
            transition: all .5s ease-in-out;

           }
        }

    }
    .service-title {
         width:100%;
         white-space: nowrap;
         overflow:hidden;
         text-overflow:ellipsis;    
    }
    .service-des {
        color:#707070;
        padding-top:20px;
    }
    .service-sale {
        color:$lightGray;
        padding-top:10px;
        span {
            padding-right:10px;
        }
    }
    .service-price {
        color:$priceColor;
        padding-top:20px;
    }
    .service-detail {
        position:absolute;
        right:20px;
        bottom:16px;
        opacity:0;
        padding:8px 22px;
        border-radius:2px;
        background:$orange;
        color:$white;
        
    }
</style>