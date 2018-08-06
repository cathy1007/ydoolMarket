<template>
    <div>
        <div class="header">
              <img src="../../assets/img/banner.png" alt="banner">
              <div class="tab-container">
                <ul class="company-list global-container clearfix">
                   <li 

                    v-for="(item,index) in tabs"
                   class="company-tab" :class="{active:activeIndex == index}"
                   @click="changeTab(index, item.component)">
                   <a>{{item.title}}</a></li>
               </ul>
              </div>
        </div>
        <!-- 失活的组件将会被缓存！-->
        <keep-alive>
          <component v-bind:is="currentComponent"  v-on:change-tab="getInfo"></component>
        </keep-alive>
    </div>
</template>
<script>
//  公司信息Tag组件，使用is属性切换,keep-alive缓存
  import Home from './components/CompanyHome.vue'
  import Deal from './components/CompanyDeal.vue'
  import Info from './components/CompanyInfo.vue'
  import Service from './components/COmpanyService.vue'
  export default {
    data() {
      return{
        tabs:[
          {
            title:'首页',
            path:'companyHome',
            component:'Home'
          },
          {
            title:'公司介绍',
            path:'companyInfo',
            component:'Info'
          },
          {
            title:'服务内容',
            path:'companyService',
            component:'Service'
          },
          {
            title:'交易评价',
            path:'companyDeal',
            component:'Deal'
          }
        ],
        activeIndex:0,
        currentComponent:'Home'
      }
    },
    components:{
      Home,
      Deal,
      Info,
      Service 
    },
    methods:{
      changeTab(index,component) {
          this.activeIndex = index;
          this.currentComponent = component
      },
      getInfo(data) {
        this.activeIndex = data
        this.currentComponent = this.tabs[data].component
      }
    }
  }
</script>
<style lang="scss" scoped>
    img {
      width:100%;
    }
    .tab-container {
      background-color:$black;
    }
    .company-list {
      text-align:center;
      
      .company-tab {
        float:left;
        width:20%;
        padding:10px;
        a {
          padding:2px 0;
          box-sizing:border-box;
          color:$lightWhite;
          border-bottom:1px solid transparent;
          &:hover {
            padding:2px 8px;
            border-bottom:1px solid $orange;
            color:$white;
            transition:all .4s;
          }
        }
      }
    .active {
        background:$orange;  
        a {
          color:$white;
        }
    }
  }
</style>