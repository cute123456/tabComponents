// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iconSvg from '@/components/iconSvg'
import './global.js'
import tab from '@/components/tab.vue'; // 导入自己写的组件文件
import $ from 'jquery'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

import animated from 'animate.css' // npm install animate.css --save安装，在引入
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(animated)

Vue.use(YDUI);

Vue.use(tab); // 自定义全局组件的时候需要Vue.use();

Vue.component('my-tab', tab);
Vue.component('icon-svg', iconSvg) // fontIcon 若在阿里图标中添加了新图标,请在index.html中更新代码

Vue.config.productionTip = false;
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App, tab },
    template: '<App/>'
})