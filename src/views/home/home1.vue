<template>
    <div>
        <div class="home-header clearfix">
          <div class=" global-container clearfix">
            <div class="home-sider">
              <search-bar />
              <div class="market-logo clearfix">
                <div class="fl">
                  <span class="market-name">云服务</span>
                  <p>为企业提供成长服务</p>
                </div>
                <div class="fr">
                  <img src="../../assets/img/gps.png">
                  <span class="market-city">
                    <span class="choosed-city">全国</span>[切换城市]
                  </span>
                </div>
              </div>
              <div class="sider-container"> 
                <h2 class="sider-title">云市场分类</h2>
                <ul class="sider-list">
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">企业信息化</span>
                    <span class="sider-part">企业软件管理</span>
                    <span class="sider-part">工具软件</span>
                  </li>
                  <li>
                    <span class="sider-head">产品制造</span>
                    <span class="sider-part">产品打样</span>
                    <span class="sider-part">印刷产品制造</span>
                  </li>
                  <li>
                    <span class="sider-head">解决方案</span>
                    <span class="sider-part">行业解决方案</span>
                    <span class="sider-part">安全解决方案</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="home-carousel fr">
              <div class="search-input">
                <input type="text" placeholder="请输入您需要的服务">
                <span class="search-btn">搜全部</span>
                <span>或者</span>
                <span class="search-btn">发布定制需求</span>
              </div>
              <div class="carousel-list">
                  <el-carousel 
                      height="300px"
                      indicator-position="outside">
                    <el-carousel-item>
                      <img src="../../assets/img/banner.png" 
                      height="400px" alt="banner">
                    </el-carousel-item>
                  </el-carousel>
              </div>
              <div class="carousel-des">
                 <ul class="clearfix">
                  <li class="fl">
                    <h4>
                      <img src="../../assets/img/rd.png" height="28" width="20" alt="hot">
                    云市场热点</h4>
                    <ul>
                      <li class="hot-item"><span></span>文案征集 云市场好伙伴好文案</li>
                      <li class="hot-item">
                      <span></span>这朵云-中国文化传媒新文创IP平台上线</li>
                    </ul>
                  </li>
                  <li class="fl">
                    <h4>
                      <img src="../../assets/img/yfw.png" height="26" width="23" alt="">
                    了解云朵网服务
                    </h4>
                    <h6>云朵网服务能做什么？提供哪些服务？云朵网服务能做什么？提供哪些服务？</h6>
                  </li>
                  <li class="fl">
                    <h4>
                      <img src="../../assets/img/sxy.png" height="24" width="25" alt="">
                    云朵服务商学院</h4>
                    <p>让入住变得更简单！</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container global-container">
            <p class="part-title">推荐服务</p>
            <el-row :gutter="10">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div class="card-body">
                    <div 
                        class="card-menu card-one" 
                        >
                      <h2>我要开公司</h2> 
                      <h6>一站式开公司服务</h6> 
                    </div>
                    <ul class="card-list">
                        <li @click="goService">
                            <div>
                              <h3>创业顾问</h3>
                              <h5>创业咨询服务</h5>  
                            </div>
                        </li>
                        <li>
                            <div>
                               <h3>国内商标注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>地址注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>代理记账</h3>
                               <h5>产权保护第一步</h5> 
                            </div> 
                        </li>
                    </ul>
                    
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div class="card-body">
                    <div class="card-menu card-two">
                      <h2>我要做产品</h2> 
                      <p>一站式开公司服务</p> 
                    </div>
                    <ul class="card-list">
                        <li @click="goService">
                            <div>
                              <h3>创业顾问</h3>
                              <h5>创业咨询服务</h5>  
                            </div>
                        </li>
                        <li>
                            <div>
                               <h3>国内商标注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>地址注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>代理记账</h3>
                               <h5>产权保护第一步</h5> 
                            </div> 
                        </li>
                    </ul>
                    
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div class="card-body">
                    <div class="card-menu card-three">
                      <h2>我要做产品</h2> 
                      <p>一站式开公司服务</p> 
                    </div>
                        <ul class="card-list">
                        <li @click="goService">
                            <div>
                              <h3>创业顾问</h3>
                              <h5>创业咨询服务</h5>  
                            </div>
                        </li>
                        <li>
                            <div>
                               <h3>国内商标注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>地址注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>代理记账</h3>
                               <h5>产权保护第一步</h5> 
                            </div> 
                        </li>
                    </ul>
                    
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div class="card-body">
                    <div class="card-menu card-for"
                    >
                      <h2>我要做产品</h2> 
                      <p>一站式开公司服务</p> 
                    </div>
                    <ul class="card-list">
                        <li @click="goService">
                            <div>
                              <h3>创业顾问</h3>
                              <h5>创业咨询服务</h5>  
                            </div>
                        </li>
                        <li>
                            <div>
                               <h3>国内商标注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>地址注册</h3>
                              <h5>产权保护第一步</h5> 
                            </div>
                          
                        </li>
                        <li>
                            <div>
                               <h3>代理记账</h3>
                               <h5>产权保护第一步</h5> 
                            </div> 
                        </li>
                    </ul>
                    
                </div>
              </el-col>
            </el-row>
        </div>
        <div class="box-container global-container">
          <p class="part-title">内容创业服务</p>
          <el-row :gutter="10">
            <el-col class="box-body" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="box-menu" style="border-top:2px solid #939afd">
                <h3 class="menu-title">内容策划</h3>
                <p class="menu-des">视频图文策划制作</p>
                 <p class="menu-more">更多服务</p>
              </div>
              <ul class="box-list">
                <li class="item-container">
                    <h3 class="item-title">商品展示短视频</h3>
                    <h5 class="item-des">影视剧、广告篇、宣传片、短视频拍摄制作</h5>
                    <h3 class="item-price">$1200</h3>
                    <p class="item-sale"><span>销量 6</span><span>咨询 42</span></p>   
                </li> 
                <li class="item-container">
                    <h3 class="item-title">商品展示短视频</h3>
                    <h5 class="item-des">影视剧、广告篇、宣传片、短视频拍摄制作</h5>
                    <h3 class="item-price">$1200</h3>
                    <p class="item-sale"><span>销量 6</span><span>咨询 42</span></p>   
                </li>
              </ul>
            </el-col>
             <el-col class="box-body" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="box-menu" style="border-top:2px solid #38bef4">
                <h3 class="menu-title">内容运营</h3>
                <p class="menu-des">视频图文策划制作</p>
                 <p class="menu-more">更多服务</p>
              </div>
              <ul class="box-list">
                <li class="item-container">
                    <h3 class="item-title">商品展示短视频</h3>
                    <h5 class="item-des">影视剧、广告篇、宣传片、短视频拍摄制作</h5>
                    <h3 class="item-price">$1200</h3>
                    <p class="item-sale"><span>销量 6</span><span>咨询 42</span></p>   
                </li> 
                <li class="item-container">
                    <h3 class="item-title">商品展示短视频</h3>
                    <h5 class="item-des">影视剧、广告篇、宣传片、短视频拍摄制作</h5>
                    <h3 class="item-price">$1200</h3>
                    <p class="item-sale"><span>销量 6</span><span>咨询 42</span></p>   
                </li>
              </ul>
            </el-col>
             <el-col class="box-body" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="box-menu" style="border-top:2px solid #d795fe">
                <h3 class="menu-title">内容推广和变现</h3>
                <p class="menu-des">视频图文策划制作</p>
                 <p class="menu-more">更多服务</p>
              </div>
              <ul class="box-list">
                <li class="item-container">
                    <h3 class="item-title">商品展示短视频</h3>
                    <h5 class="item-des">影视剧、广告篇、宣传片、短视频拍摄制作</h5>
                    <h3 class="item-price">$1200</h3>
                    <p class="item-sale"><span>销量 6</span><span>咨询 42</span></p>   
                </li> 
                <li class="item-container">
                    <h3 class="item-title">商品展示短视频</h3>
                    <h5 class="item-des">影视剧、广告篇、宣传片、短视频拍摄制作</h5>
                    <h3 class="item-price">$1200</h3>
                    <p class="item-sale"><span>销量 6</span><span>咨询 42</span></p>   
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
        <div class="hot-company global-container">
          <p class="part-title">热门服务商</p>
          <el-row :gutter="10">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <div class="company-info company-yan">
                <img class="company-logo" src="../../assets/img/logo.jpg">
                <h3 class="company-title">宁波云朵网络科技有限公司</h3>
                <p class="company-evaluate"><span>速度：5.7</span><span>质量4.7</span><span>态度：5.0</span></p>
                <p class="company-slogan">您的互联网专家</p>
                <p class="company-go-btn">进入店铺</p>
                <div class="company-badge"><p class="badge-content">云朵严选</p></div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <div class="company-info">
                <img class="company-logo" src="../../assets/img/logo.jpg">
                <h3 class="company-title">宁波云朵网络科技有限公司</h3>
                <p><span>速度：5.7</span><span>质量4.7</span><span>态度：5.0</span></p>
                <p>您的互联网专家</p>
                <p class="company-go-btn">进入店铺</p>
              </div>
            </el-col>
          </el-row>
        </div>
    </div>
</template>
<script>
import searchBar from '@/views/layout/SearchBar'
  export default {
    data() {
        return {

        }
    },
    components {
      searchBar
    },
    methods:{
      goService() {
        this.$router.push({name:'service'})
      }
  }
}
</script>

<style lang="scss" scoped>
    h2 {
      line-height:24px;
    }
    p{
      line-height:20px;
    }
    .part-title {
      font-size:20px;
      margin: 30px 0;
      color:#000;
    }
    .home-header {
      background:url(../../assets/img/banner.png);
      padding-top:50px;
      padding-bottom:20px;
      .home-sider {
        display:inline-block;
        position:absolute;
        z-index:3;
      }
      .market-logo {
        margin-bottom:20px;
        .fr{
          padding-top:30px;
        }
        .market-name {
          font-size:44px;
        }
        .market-city {
          color:#898989;
          padding:10px 0;
          .choosed-city {
            color:#1d1d1d;
            padding-right:4px;
          }
        }

      }
      .search-input {
        margin-bottom:62px;
        text-align:right;
        input {
          width:300px;
          padding:5px;
          margin-right:-6px;
        }
      }
      .search-btn {
        padding:7px  11px;
        background:$orange;
        color:#fff;
      }
      .carousel-des {
        .fl {
          width:300px;
          height:110px;
          padding:14px;
          color:#6b6b6b;
          background:#fff;
          border-right:1px solid #ececec;
        }
        .hot-item {
          font-size:12px;

          span {
            display:inline-block;
            width:4px;
            height:4px;
            margin-right:10px;
            margin-bottom:2px;
            background:#6b6b6b;
            border-radius:50%;
          }
        }
         h4 {
          padding:10px 0;
          color:#3c3c3c;
          img {
            vertical-align:middle;
            margin-right:10px;
          }
         }
      }
      .sider-container {
        .sider-title {
          text-align:center;
          padding:10px 0;
          background-color:#000;
          color:$lightWhite;
        }
      }
      .sider-list {
        li {
          background:$lightBlack;
          padding:11px 10px;
          color:$lightWhite;
          border:1px solid #514f4d;
          font-size:12px;
          span {
            padding:10px 8px;
          }
        }
      }
      
      .sider-head {
        font-weight:700;     
        color:$white;
      }

    }


    .card-body {
        background: #fff;
        height: 270px;
        margin-bottom:20px;
        .card-menu {
            position: absolute;
            z-index: 2;
            width: 224px;
            height: 270px;
            overflow: hidden;
            color:$white;
            
            h2 {
              padding:20px 0 0 16px;
            }
            h6 {
              padding:6px 0 0 16px;
            }
        }
        .card-one {
          background-image:url('../../assets/img/kgs.png')
        }
        .card-two {
          background-image:url('../../assets/img/zcp.png')
        }
        .card-three {
          background-image:url('../../assets/img/ztg.png')
        }
        .card-for {
          background-image:url('../../assets/img/nrfw.png')
        }
        .card-list {
            position:relative;
            padding-left: 204px;
            background: #fff;
            height: 100%;
            li {
                float: Left;
                transition: all .3s ease-in-out;
                position: relative;
                height: 135px;
                width: 50%;
                text-align:center;
                overflow: hidden;
                border-bottom: 1px solid #ececec;
                border-right: 1px solid #ececec;
                &:hover {
                  box-shadow:0 2px 15px 0 rgba(0,0,0,.15);
                  h3 {
                    color:$orange;
                  }
                }
                div {
                    position:absolute;
                    width:100%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                p{
                  line-height:20px;
                }
                h3 {
                  line-height:24px;
                  margin-bottom: 10px;
                  color:#3c3c3c;
                }
                h5 {
                  color:#afafaf;
                }
            }

        }
    }
    .box-body {
      
      h2 {
          margin-bottom:10px;
        }
      .box-menu {
        padding:0 12px 20px 16px;
        background:#fff;
        border-top:2px solid red;
        position:relative;
        .menu-title{
          padding-top:18px;
          color:#3c3c3c;
        }
        .menu-des {
          padding-top:10px;
          color:#6b6b6b;
        }
        .menu-more {
            position:absolute;
            right:12px;
            bottom:12px;
            padding:10px;
            color:#0282eb;
            &:hover {
              color:$orange;
            }

        }
      }
      .box-list{
        li {
          padding:0 10px 30px 16px;
          background:#efefef;
          border-bottom:1px solid #fff;
          transition: all .3s ease-in-out;
          &:hover {
            box-shadow:0 2px 15px 0 rgba(0,0,0,.15);
            .item-title{
              color:$orange;
            }
          }
        }
        .item-container {

        }
        .item-title {
          padding-top:34px;
          color:#555;
        }
        .item-des {
          padding-top:10px;
          color:#afafaf;
        }
        .item-price {
          padding-top:20px;
          color:#ff1616;
        }
        .item-sale {
          padding-top:6px;
          color:#6b6b6b;
        }
      }
    }
    .hot-company {

        .company-info {
          position:relative;
          background:$white;
          text-align:center; 
          margin-bottom:10px;
          padding:20px 0; 
          color:#747474; 
          &:hover {
            outline:1px solid $orange;
            .company-title {
              color:$orange;
            }
          }      
        }
        .company-yan {
          background:linear-gradient(#fff,#fff6dc);
        }
        .company-logo {
          width:120px;
          height:auto;
        }
        .company-title {
          margin:20px 0;
          padding: 0 10px;
          color:#343434;
        }
        .company-slogan {
        }
        .company-go-btn {
          display:inline-block;
          margin-top:20px;
          padding: 4px 32px;
          border:1px solid $orange;
          font-size:14px;
          color:#434343;
          &:hover {
            background:$orange;
            color:$white;
          }
        }
        .company-badge {
          position:absolute;
          right:0;
          top:0;
          width:110px;
          height:110px;
          overflow:hidden;
          .badge-content {
            width:120px;
            background:#f2d886;
            color:#ba8622;
            transform:translate(24px,16px) rotate(45deg);
          }
        }
    }
</style>