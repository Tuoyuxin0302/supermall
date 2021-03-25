import Vue from'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/home/Home');
const More=()=>import('../views/more/More');
const Profile=()=>import('../views/profile/Profile');
const YingYong=()=>import('../views/yingyong/YingYong');

//安装插件
Vue.use(VueRouter);

//创建router

const routes=[
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/more',
    component:More
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/yingyong',
    component:YingYong
  },
];
const router=new VueRouter({
  routes,
  mode:'history'
});
export default router
