import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
//路由
import MyGoodsList from "./views/MyGoodsList.vue"
import MyGoodsSearch from "./views/MyGoodsSearch.vue"
import MyUserInfo from "./views/MyUserInfo.vue"

import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;

//路由设置
import VueRouter from "vue-router"
//使用
Vue.use(VueRouter)
//规则
const route = [
  {
    path:"/",
    redirect:"mygoodslist"
  },
  {
    path:"/mygoodslist",
    name:"MyGoodsList",
    component:MyGoodsList,
    
    
  },
  {
    path:"/mygoodssearch",
    name:"MyGoodsSearch",
    component:MyGoodsSearch
  },
  {
    path:"/myuserinfo",
    name:"MyUserInfo",
    component:MyUserInfo
  },
 
]
const routers = new VueRouter({
  routes : route
})

//输入框获得焦点
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

new Vue({
  router:routers,
  render: (h) => h(App),
}).$mount("#app");
