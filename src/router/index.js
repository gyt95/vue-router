import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Hi from '@/components/Hi';
import Hi1 from '@/components/Hi1';
import Hi2 from '@/components/Hi2';
import Hi3 from '@/components/Hi3';
import Params from '@/components/Params';
import Error from '@/components/Error';

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hi1',
      name: 'hi1',
      component: Hi1
    },
    {
      path:'/params/:newsId/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    },
    {  
      path: '/goback',
      redirect: '/'  //重定向只需要写好源路径path和新路径redirect即可
    },
    {  
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'  //重定向只需要写好源路径path和新路径redirect即可
    },
    {
      path: '/hi',
      // name: 'Hi',
      component: Hi,
      children:[
        {path:'/',component:Hi3},//path:'/'可理解为刚进入hi页面显示的内容
        {path:'hi1',component:Hi1},
        {path:'hi2',name: 'hi2',component:Hi2}
      ]
    },
    {
      path: '*',  //这里的path:’*’就是找不到页面时的配置
      component: Error //component是我们新建的一个Error.vue的文件
    }
  ]
});
