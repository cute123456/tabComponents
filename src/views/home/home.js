/**
 * 首页 
 * @file home.js 
 * @author yangxia 
 * @date 2018-06-19 09:44:26 
 */

import Vue from 'vue'
import fixBottom from '@/components/fixBottom'

export default {
    name: 'home',
    data() {
        return {
            tabIndex: 0,
            tabsList: ["音乐", "影视", "综艺"],
            content: [{
                    content: "我是音乐"
                },
                {
                    content: "我是影视"
                },
                {
                    content: "我是综艺"
                }
            ]
        };
    },
    components: {
        fixBottom,
    },
    methods: {
        // 组件的计算方法
        updateContent(data) {
            this.tabIndex = data;
            // console.log(data);
        }
    },

    created() {

    },
    mounted() {

    },
}