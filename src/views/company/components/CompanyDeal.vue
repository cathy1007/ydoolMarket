<template>
    <div>
        <div class="global-container compre-container">
            <h3 class="service-title">店铺综合评分</h3>
            <el-row class="compre-list">
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    工作速度：4.57分
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div>比同行业平均水平 低8.33%</div>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div>5分</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    工作质量：4.57分
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div>比同行业平均水平 低8.33%</div>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div>5分</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    工作态度：4.57分
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div>比同行业平均水平 低8.33%</div>
                </el-col>
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <div>5分</div>
                </el-col>
            </el-row>
        </div>
        <div class=" global-container deal-container">
            <h3 class="service-title">交易评价</h3>
            <el-row :gutter="10" class="deal-list">
                <el-col  :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                    <span class="deal-comment fl">好评</span>
                    <h3>评价好评率：100%</h3>
                    <p>共有107个任务评价</p>  
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                   <div>
                        <span class="deal-comment fl">评分</span>
                        <h3>工作速度</h3>
                        <p>5个星星</p> 
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                   <div>
                        <h3>工作进度</h3>
                        <p>5个星星</p> 
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                   <div>
                        <h3>服务质量</h3>
                        <p>5个星星</p> 
                    </div>
                </el-col>
            </el-row>
            <ul class="star-list clearfix">
                <li class="fl">好评数</li>
                <li class="fl">中评数</li>
                <li class="fl">差评数</li>
            </ul>
            <ul class="buyer-list">
                <li class="buyer-item">
                    <el-row :gutter="10">
                        <el-col 
                        :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="buyer-wrapper">
                               <img class="buyer-logo" src="../../../assets/logo.png" height="100" width="100" alt="">
                                <div class="buyer-name">
                                <p><span class="buyer-price">$ 2000</span><span class="buyer-call">收集白鳍豚 白鳍豚卡通图集</span></p>
                                <p class="buyer-comment">客户z**5 评价于 2018-03-24 13:34:01</p>
                               </div>
                          </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <p>5.00 分</p>
                            <p>评价:服务很周到！服务很周到！服务很周到</p>
                        </el-col>
                    </el-row>
                </li>
                <li class="buyer-item">
                    <el-row :gutter="10">
                        <el-col 
                        :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="buyer-wrapper">
                               <img class="buyer-logo" src="../../../assets/logo.png" height="100" width="100" alt="">
                                <div class="buyer-name">
                                <p><span class="buyer-price">$ 2000</span><span class="buyer-call">收集白鳍豚 白鳍豚卡通图集</span></p>
                                <p class="buyer-comment">客户z**5 评价于 2018-03-24 13:34:01</p>
                               </div>
                          </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <p>5.00 分</p>
                            <p>评价:服务很周到！服务很周到！服务很周到</p>
                        </el-col>
                    </el-row>
                </li>
            </ul>
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
            console.log('deal------------')
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    .service-title {
        padding:6px 0;
        border-bottom:1px solid $borderColor;
    }
    .compre-container, .deal-container {
        margin-top:30px;
        padding:20px;
        background:$white;
    }
    .compre-container {
        .el-row {
            padding-top:20px;
        }
    }
    
    .deal-list {
        border-bottom:1px solid $borderColor;
        .el-col {
            padding:10px 0;
            h3 {
                padding-top:10px;
            }
        }
        .deal-comment {
            display:inline-block;
            width:60px;
            height:60px;
            line-height:60px;
            margin-right:10px;
            text-align:center;
            border-radius:50%;
            border:1px solid $orange;
        }
    }
    .star-list {
        background:$white;
        li {
            width:33%;
            padding:20px 0;
            margin-top:10px;
            text-align:center;
            &:nth-of-type(2) {
                border-left:1px solid $borderColor;
                border-right:1px solid $borderColor;
            }
        }
    }
    .buyer-list {
        .buyer-item {
            padding:10px 0;
            border-bottom:1px solid $borderColor;
            .buyer-logo {
                float:left;
                vertical-align:middle;
            }
            .buyer-name {
                padding-left:120px;
                padding-top:20px;
            }
        }
    }
</style>