/**
 * 首页 
 * @file home.js 
 * @author yangxia 
 * @date 2018-06-19 09:44:26 
 */

import Vue from 'vue';
import CitySelect from '@/components/CitySelect.vue'
import fixBottom from '@/components/fixBottom'

import { Slider, SliderItem } from 'vue-ydui/dist/lib.rem/slider';
/* 使用px：import {Slider, SliderItem} from 'vue-ydui/dist/lib.px/slider'; */

Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);

export default {
    name: 'home',
    data() {
        return {
            tabIndex: 0,
            tabsList: ["音乐", "影视", "综艺"],
            content: [{
                    content: "http://static.ydcss.com/uploads/ydui/1.jpg"
                },
                {
                    content: "http://static.ydcss.com/uploads/ydui/2.jpg"
                },
                {
                    content: "http://static.ydcss.com/uploads/ydui/3.jpg"
                }
            ]
        };
    },
    components: {
        fixBottom,
        'city-select': CitySelect
    },
    methods: {
        // 组件的计算方法
        updateContent(data) {
            this.tabIndex = data;
            // console.log(data);
        },
        // 轮播
        getContent(e) {
            this.tabIndex = e;
        },
        showAdd(e) {
            console.log(e)
        }
    },

    created() {
        console.log(333)
            // this.$axios.get('http://127.0.0.1:3000/sky/3/9', res => {
            //     console.log(res);
            // })
    },
    mounted() {
        this.$axios.post('http://www.cool1024.com:3000/playlist/detail', {
            id: '2250011882'
        }).then(res => {
            console.log(res)
        })
    },
}