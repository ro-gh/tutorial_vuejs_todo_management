import Vue from 'vue' // App.vue の <router-view> の動作
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [ // ルーティングを追加していくにはここの配列にオブジェクトを追加していく
    {
      path: '/',  // [/] にアクセスした時、
      name: 'Hello',
      component: Hello // ここを出力する
    }
    
  ]
})
