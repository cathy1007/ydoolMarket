<template>
    <div class="header-container">
        <div class="global-container">
        <img  class="hidden-xs-only" src="../../assets/img/ydool-logo.png" height="28" width="234" alt="云朵网logo图">
        <ul class="fr">
            <li>我的</li>
            <li>商家入驻</li>
            <li>客服中心</li>
            <li>网站导航</li>
            <li>登录注册</li>
        </ul>
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
    .header-container {
        width:100%;
        background:$black;
        height:60px;
        line-height:60px;
        img {
            vertical-align:middle;
        }
        ul {
            li {
                color:$white;
                display:inline-block;
                padding-left:1em;
                &:hover {
                    color:$orange;
                }
            }
        }
    }
</style>