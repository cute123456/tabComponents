import Vue from 'vue'

export default {
    data() {
        return {
            fatherNum: -1,
            sonNum: -1,
            list: [{
                    timeYear: '2018年',
                    childList: [{
                            timeMonth: 1,
                            secondList: [{
                                    problem: '今天菜有点辣',
                                },
                                {
                                    problem: '今天菜有点咸',
                                },
                                {
                                    problem: '今天菜有点太甜',
                                },
                            ]
                        },
                        {
                            timeMonth: 2,
                            secondList: [{
                                    problem: '今天菜有点辣...',
                                },
                                {
                                    problem: '今天菜有点咸....',
                                },
                                {
                                    problem: '今天菜有点太甜....',
                                },
                            ]
                        },
                    ]
                },
                {
                    timeYear: '2017年',
                    childList: [{
                            timeMonth: 3,
                            secondList: [{
                                    problem: '菜量太少了。。',
                                },
                                {
                                    problem: '菜量太少了。。。',
                                },
                                {
                                    problem: '菜量太少了，种类少',
                                },
                            ]
                        }, {
                            timeMonth: 3,
                            secondList: [{
                                    problem: '菜量太少了。。',
                                },
                                {
                                    problem: '菜量太少了。。。',
                                },
                                {
                                    problem: '菜量太少了，种类少',
                                },
                            ]
                        }, {
                            timeMonth: 3,
                            secondList: [{
                                    problem: '菜量太少了。。',
                                },
                                {
                                    problem: '菜量太少了。。。',
                                },
                                {
                                    problem: '菜量太少了，种类少',
                                },
                            ]
                        },
                        {
                            timeMonth: 4,
                            secondList: [{
                                    problem: '肥肉太肥',
                                },
                                {
                                    problem: '肥肉太肥....',
                                },
                                {
                                    problem: '肥肉太肥....',
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },
    components: {

    },
    cretaed() {

    },
    methods: {
        /**
         * 折叠
         */
        toshow(i, s) {
            console.log(`i=${i},s=${s}`)
            if (this.fatherNum == i && this.sonNum == s) {
                this.fatherNum = -1;
                this.sonNum = -1;
            } else {
                this.fatherNum = i;
                this.sonNum = s;
            }
        }
    }
}