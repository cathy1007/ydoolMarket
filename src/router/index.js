import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import Service from '@/views/service/Service'
import Company from '@/views/company/Company'


// import CompanyHome from '@/views/company/components/CompanyHome'
// import CompanyService from '@/views/company/components/CompanyService'
// import CompanyDeal from '@/views/company/components/CompanyDeal'
// import CompanyInfo from '@/views/company/components/CompanyInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/service',
      name:'service',
      component:Service
    },
    {
     path:'/company',
     name:'company',
     component:Company
    },
    // {
    //   path: '/companys',
    //   component:Company,
    //   children:[
    //   {
    //     path:'',
    //     name:'companyHome',
    //     component:CompanyHome
    //   },
    //   {
    //     path:'service',
    //     name:'companyService',
    //     component:CompanyService
    //   },
    //   {
    //     path:'info',
    //     name:'companyInfo',
    //     component:CompanyInfo
    //   },
    //   {
    //     path:'deal',
    //     name:'companyDeal',
    //     component:CompanyDeal
    //   }
        
    //   ]
      
    // }
  ]
})
