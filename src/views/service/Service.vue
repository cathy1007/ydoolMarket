<template>
<div>
    <div  class="search-wrapper">
        <search-bar />
    </div>
    
    <ul class="global-container service-tab clearfix">
        <li class="tab-item tab-sider">
            <h3 class="sider-title">云市场分类
                <i class="el-icon-caret-bottom"></i>
            </h3>
            <div class="sider-container" v-show="showBar">
                <sider-bar />
            </div>
        </li>
        <li class="tab-item">企业信息化</li>
        <li class="tab-item">网络服务</li>
        <li class="tab-item">市场营销</li>
        <li class="tab-item">科技资产</li>
        <li class="tab-item">科技资产</li>
        <li class="tab-item">科技资产</li>
        <li class="tab-item">科技资产</li>
        <li class="tab-item">科技资产</li>
        <li class="tab-item">科技资产</li> 
        <li class="tab-item">科技资产</li>  
    </ul>
    <div  class="global-container">
        <el-row :gutter="30">
            <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
                <ul class="service-rank clearfix">
                    <li class="rank-item rank-title">排序</li>
                    <li class="rank-item">默认</li>
                    <li class="rank-item">成交额</li>
                    <li class="rank-item">好评率</li>
                </ul>
                <ul class="service-list">
                    <li class="service-info clearfix">
                        <div class="service-logo">
                            <img src="../../assets/logo.png" height="80" width="80" alt="logo">
                            <p>浙江省 杭州市</p>
                            <p>好评:<span>100%</span>  服务:<span>8</span></p>
                        </div>
                        <div class="service-des">
                           <h3>宁波云朵网络科技有限公司</h3>
                           <h4>
                            <span class="service-mark">综合评分</span>
                            <i class="el-icon-star-on active-icon" v-for="(item,index) in 5"></i>
                            <span class="service-score">78分</span>
                            </h4>
                           <p><span>相关服务</span>程序开发 APP开发 综合性网站 程序开发 APP开发 综合性网站 程序开发 APP开发 综合性网站 程序开发 APP开发 综合性网站</p>
                        </div>
                        <div class="service-go">
                            <p class="service-look" @click="goCompany">进店看看</p>
                            <p class="service-consult">免费咨询</p>
                        </div>
                        
                    </li>
                    <li class="service-info clearfix">
                        <div class="service-logo">
                            <img src="../../assets/logo.png" height="80" width="80" alt="logo">
                            <p>浙江省 杭州市</p>
                            <p>好评:100%  服务:8</p>
                        </div>
                        <div class="service-des">
                           <h3>宁波云朵网络科技有限公司
                            <img src="../../assets/img/level.png" height="20" width="49" alt="level">
                            <img src="../../assets/img/guard.png" height="19" width="17" alt="guard">
                           </h3>
                           <h4><span class="service-mark">综合评分</span>
                            <i class="el-icon-star-on active-icon" v-for="(item,index) in 5"></i>
                            <span class="service-score">78分</span></h4>
                           <p>
                            <span class="des-tag">相关服务：</span>
                            <span>程序开发</span>
                            <span>APP开发</span>
                            <span>综合性网站</span>
                            <span>程序开发</span>
                            <span>APP开发</span>
                            <span>综合性网站</span>
                            <span>程序开发</span>
                            <span>APP开发</span>
                            <span>综合性网站</span></p>
                        </div>
                        <div class="service-go">
                            <p class="service-look">
                                <img src="../../assets/img/02store.png" height="16" width="17" />进店看看</p>
                            <p class="service-consult">
                                <img src="../../assets/img/02chat.png" height="16" width="18" alt="consult">免费咨询</p>
                        </div>
                        
                    </li>
                </ul>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                <ul class="service-list recommend-list">
                    <li class="service-info clearfix">
                        <div class="recommend-badge">
                            <div class="gradual"></div>
                            <div class="desc"><p class="tui">推</p><p class="jian">荐</p></div>
                        </div>
                        <div class="service-logo">
                            <div class="recommend-logo clearfix">
                                <img src="../../assets/logo.png" height="80" width="80" alt="logo">
                                <div class="recommend-title">
                                    <h4>宁波云朵网络科技有限公司</h4>
                                    <p>等级 和 安全 图标</p>
                                </div>
                            </div>
                            <h4 class="recommend-score"><span class="service-mark">综合评分</span>
                            <i class="el-icon-star-on active-icon" v-for="(item,index) in 5"></i>
                            <span class="service-score">78分</span></h4>
                            <p>浙江省 杭州市</p>
                            <p>好评:<span>100%</span>  服务:<span>8</span></p>
                        </div>
                        <div class="clearfix">
                            <span class="service-look">
                                <img src="../../assets/img/02store.png" height="16" width="17" />进店看看</span>
                            <span class="service-consult">
                                <img src="../../assets/img/02chat.png" height="16" width="18" alt="consult">免费咨询</span>
                        </div>
                        <div class="service-des">
                           <p>程序开发 APP开发 综合性网站 程序开发 APP开发 综合性网站 程序开发 APP开发 综合性网站 程序开发 APP开发 综合性网站</p>
                        </div>
                        
                        
                    </li>
                    <li>
                        <img src="../../assets/img/02vip.png" height="106" width="277" alt="vip comment">
                    </li>
                    <li>
                        <img src="../../assets/img/02advertisement.png" height="785" width="278" alt="ad">
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</div>
    
</template>
<script>
import siderBar from '@/views/layout/SiderBar'
import searchBar from '@/views/layout/SearchBar'

export default {
    data() {
        return {
            showBar:false
        }
    },
    components:{
      siderBar,
      searchBar  
    },
    methods:{
        goCompany() {
            this.$router.push({ path: 'company' })
        }
    }
}
    
</script>
<style lang="scss" scoped>
  .search-wrapper {
    background:#fff;
    padding-top:50px;
    padding-bottom:20px;
  }
  .service-tab {
    margin-bottom:20px;
    .tab-item {
        float:left;
        margin:12px;
        padding-bottom:4px;
        font-size:16px;
        color:#4d4c4c;
        &:hover {
            border-bottom:2px solid $orange;
        }
    }
    .tab-sider {
        position:relative;
        width:270px;
        margin:0;
        padding:13px 0;
        border:2px solid transparent;
        background:$lightBlack;
        &:hover {
            border:2px solid transparent;
        }
        .sider-title {
            text-align:center;
            color:$white;
        }
        .sider-container {
            position:absolute;
            top:60px;
            z-index:3;
        }
    }
  }
  .service-rank {
    background:$white;
    margin-bottom:20px;
    .rank-item {
        float:left;
        padding:20px 30px;
        color:#979797;
        &:hover {
            color:$orange;
        }
    }
    .rank-title {
        color:#222;
        &:hover {
            color:#222;
        }
    }
  }
  .service-list { 
    
    .service-info{
      position:relative;
      min-height:130px;
      margin-bottom:20px;
      padding:30px;
      background:#fff;
    }
    .service-logo{
        float:left;
        text-align:center;   
        img {
            width:108px;
            height:auto;
        }
        p {
           font-size:12px;
           color:#545454;
           padding-bottom:10px;
           &:nth-of-type(1) {
            margin-top:20px;
           } 
           span {
            color:#0056ca;
           }  
        }
    }
    .service-des{
        padding-left:128px;
        h3 {
            color:#0056ca;
            padding-top:10px;
            img {
                vertical-align:middle;
                margin-left:4px;
            }
        }
        h4 {
            padding:38px 0;
            color:#979797;

        }
        .service-mark{
            padding-right:10px;
        }
        .active-icon {
            color:$orange;
        }
        .service-score {
            padding-left:12px;
        }
        p {
            font-size:12px;
            color:#818181;
            line-height:2;
            span {
                padding:0 4px;
            }
            .des-tag {
                color:#4d4c4c;
                font-weight:700;
            }
        }

    }
    .service-go {
        position:absolute;
        top:30px;
        right:30px;
    }
    .service-look, .service-consult {
        padding:6px 40px;
        border:1px solid $borderColor;
        text-align:center;
        border-radius:2px; 
        font-size:12px;
        color:#909090;
        background:$borderColor;
        img {
            vertical-align:middle;
            margin-right:6px;
        }
    }
    .service-look {
        margin-bottom:10px;
        border:1px solid #448aca;
        background:#3cb3df;
        color:$white;
    }
  }
  .service-list.recommend-list {
        .service-info {
            max-width:280px;
            padding:20px;
            position:relative;
        }
        .service-logo {
            float:none;
            img {
                float:left;
                width:80px;
                margin-right:10px;
            }
            p{
                display:inline-block;
                &:nth-of-type(1) {
                    margin-top:0;
                }
            }
        }
        .recommend-badge {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 50px;
            height: 50px;
            overflow: hidden;
            .gradual {
                width: 100%;
                height: 100%;
                background: linear-gradient(-135deg, $orange 50%, transparent 50%);
            }
            .desc {
                position: absolute;
                top:0;
                right:0;
                z-index: 1;
                font-size:12px;
                color:$white;
                .tui {
                    position:absolute;
                    right:16px;
                    top:6px;
                    font-size:12px;
                }
                .jian {
                    position:absolute;
                    right:3px;
                    top:20px;
                    font-size:12px;
                }
            }
        }
        .recommend-title {
            text-align:left;
            h4 {
                margin-bottom:10px;
            }
        }
        .recommend-score {
            padding:10px 0;
            color:#979797;
        }
        .service-look, .service-consult {
            float:left;
            margin:6px;
            padding:6px 12px;
        }
        .service-des {
            padding-left:0;
            padding-top:20px;
        }
  }
</style>