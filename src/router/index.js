import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'
import AccountInfo from '../views/homepage/AccountInfo'
import userinfo from '../views/homepage/userinfo'
import b from '../views/homepage/content/b'
import c from '../views/homepage/content/c'
import create from '../views/homepage/project/create'
import upload from '../views/homepage/project/upload'
import rale from '../views/homepage/message/rale'
Vue.use(Router)
//获取原型对象上的push函数
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/AccountInfo',
      name: 'AccountInfo',
      component: AccountInfo,
      children:
      [
        {
          path: "/userinfo",
          name: "userinfo",
          component: userinfo,
        },
        {
          path: "/b",
          name: "b",
          component: b,
        },
        {
          path: "/c",
          name: "c",
          component: c,
        },
        {
          path: "/create",
          name: "create",
          component: create
        },
        {
          path: "/upload",
          name: "upload",
          component: upload,
        },
        {
          path: "/rale",
          name: "rale",
          component: rale,
        },
      ]
    },

  ]
})

