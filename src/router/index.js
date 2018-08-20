import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home' // home文件夹下只放home页面
import wrongBook from '@/views/wrongBook/router.js' // my文件夹下可以放很多文件夹 
import notFound from '@/views/notFound'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home,
            meta: {
                auth: true
            }
        },
        {
            path: '*',
            component: notFound,
        },
        ...wrongBook,
    ],
    mode: 'history'
})