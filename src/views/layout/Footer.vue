<template>
    <div class="footer-container">
        <el-row class="global-container platform-list">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <img src="../../assets/img/zzrz.png" height="56" width="56" alt="商家资质认证">
                <div class="platform-des">
                    <h2>商家资质认证</h2>
                    <p>严筛服务商，提供品质服务</p>
                </div> 
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
               <img src="../../assets/img/jydb.png" height="56" width="56" alt="平台交易担保">
                <div class="platform-des">
                  <h2>平台交易担保</h2>
                  <p>服务完成，再付款给服务商</p>  
                </div> 
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <img src="../../assets/img/xypf.png" height="56" width="56" alt="平台先行赔付">
                <div class="platform-des">
                   <h2>平台先行赔付</h2>
                   <p>保证金监管，交易纠纷先行支付</p> 
                </div>
            </el-col>
        </el-row>
        <div class="global-container concat-container">
            <el-row>
                <el-col  :offset="3" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                    <div class="concat-message">
                        <p>联系我们</p>
                        <p>客服QQ:80000000</p>
                        <p>商务合作:example@qq.com</p>
                    </div>
                </el-col>
                <el-col 
                :offset="3"
                 :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                    <div class="concat-message clearfix">
                        <img class="qrcode-img" src="../../assets/img/qrcode.png" alt="关注二维码">
                        <div class="qrcode-des">
                           <p>扫码关注这朵云微信公众号</p>
                           <p>查看更多企业云市场信息</p> 
                        </div>
                      
                    </div>  
                </el-col>
            </el-row>   
        </div>
        <div class="global-container footer-copyright">
            Copyright@copyright2017浙朵云 云朵网
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
  .footer-container {
    background:$black;
    margin-top:128px;
  }
  .platform-list{
    padding:20px 0;
    .el-col {
        color:#adadad;
        text-align:center;
        border-left:1px solid #41484d;
        &:nth-of-type(1) {
            border-left:1px solid transparent;
        }
        position:relative;
        padding:20px;
        .platform-des {
            display:inline-block;
            padding-left:70px;
        }
        img {
            position:absolute;
            top:14px;
            vertical-align:middle;
        }
    }
  }
  .concat-container {
    .concat-message {
       line-height:2;
       color:#adadad;
    }
    .qrcode-img {
        width:100px;
       float:left;
    }
    .qrcode-des {
     float:left;
     padding-left:20px;
     padding-top:20px;
    }
  }
  .footer-copyright {
    text-align: center;
    margin-top: 20px;
    padding: 20px;
    border-top: 1px solid #41484d;
    font-size:18px;
    color:#545454;  
  }
</style>