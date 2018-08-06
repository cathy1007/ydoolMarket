<template>
 <div class="global-container clearfix">
    <el-row>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="market-logo clearfix hidden-xs-only">
        <div class="fl">
          <span class="market-name">云服务</span>
          <p class="market-des">为企业提供成长服务</p>
        </div>
        <div class="market-port fl">
          <img src="../../assets/img/gps.png" alt="gps">
          <span class="market-city">
            <span class="choosed-city">全国</span>[切换城市]
          </span>
        </div>
    </div>
      </el-col>
      <el-col 
       class="search-right"
      :xs="24" :sm="18" :md="18" :lg="18" :xl="18"
        >
        <div class="search-input">
          <div>
            <input type="text" placeholder="请输入您需要的服务">
            <span class="search-btn">搜全部</span>
            <span>或者</span>
            <span class="search-btn">发布定制需求</span>
          </div>
        
        <div class="search-shortcuts">
          <span class="hot-search">LOGO设计</span>
          <span>软件开发</span>
          <span>商标注册</span>
          <span class="hot-search">VIP购买</span>
          <span>代理记账</span>
          <span>海报设计</span>
        </div>
    </div>
      </el-col>
    </el-row>

 </div>
</template>
<script></script>
<style lang="scss" scoped>
    .market-logo {
        .market-port{
          padding-top:20px;
          padding-left:40px;
        }
        .market-name {
          font-size:34px;
          color:#505050;
        }
        .market-des {
          font-size:12px;
          color:#bbb;
        }
        .market-city {
          color:#9e9e9e;
          padding:10px 0;
          .choosed-city {
            color:#1d1d1d;
            padding-right:4px;
          }
        }

    }
    .search-right {
      padding-left:220px;
      @media screen and (max-width:1200px) {
        padding-left:120px;
       }
       @media screen and (max-width:768px) {
        padding-left:0;
       }
    }
    .search-input {
        input {
         width:66%;
          padding:5px;
          margin-right:-6px;
        }
        span {
          display:inline-block;
          margin-bottom:4px;
          &:nth-of-type(2) {
          color:#9e9e9e;
          padding:0 4px;
          }
        }
    }
    .search-shortcuts {
      margin-top:10px;
      span {
        border-left:1px solid #9d9d9d;
        text-align:center;
        margin-right:-4px;
        padding: 0 10px;
        color:#9d9d9d;
        &:nth-of-type(1) {
          padding-left:0;
          border-left:1px solid transparent;
        }
      }
      .hot-search {
          color:$orange;
      }
    }
    .search-btn {
        padding:7px  11px;
        background:$orange;
        color:#fff;
    }
</style>