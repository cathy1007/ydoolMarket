<template>
    <div class="global-container">
        <div class="tag-container clearfix">
            <span class="tag-title">产品分类:</span>
            <ul class="tag-list clearfix">
                <li class="fl">全部</li>
                <li class="fl" v-for="item in 10">LOGO设计</li>
            </ul>
        </div>
        <div class="service-container">
            <h3 class="part-title">服务产品</h3>
            <el-row :gutter="10">
                <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="item in 4">
                    <div class="service-item">
                        <h3 class="service-title">LOGO设计-标识设计-品类设计</h3>
                        <p class="service-des">一口价：含代理费、发票</p>
                        <p class="service-sale">销量 780 咨询量 621</p>
                        <h3 class="service-price">$1200</h3>
                        <p class="service-detail">查看详情</p>
                    </div>
                </el-col>
            </el-row>
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
            console.log('service------------')
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    .tag-container {
        position:relative;
        margin:30px 0;
        padding:10px;
        border-radius:4px;
        background:$white;

        .tag-title {
            position:absolute;
            left:20px;
            top:16px;
            font-weight:700;
        }
        .tag-list {
            padding-left:80px;
            li {
                border:1px solid $orange;
                color:$orange;
                margin:6px 12px;
                padding:4px 16px;
                font-size:12px;
            }
        }
    }
    .service-container {
        .part-title{
            margin:40px 0;
            padding-left:10px;
            border-left:2px solid $orange;
        }
        .el-col {
            margin-bottom:10px;
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