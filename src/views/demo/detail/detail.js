import Vue from 'vue'


export
default {
    data() {
        return {
            foods: [{
                    id: 1,
                    classifiy: '猪肉',
                    list: [{
                            id: 2,
                            name: '量少'
                        },
                        {
                            id: 3,
                            name: '量少'
                        },
                        {
                            id: 4,
                            name: '量少'
                        },
                    ]
                },
                {
                    id: 6,
                    classifiy: '蔬菜',
                    list: [{
                            id: 7,
                            name: '不新鲜'
                        },
                        {
                            id: 8,
                            name: '量少'
                        },
                        {
                            id: 9,
                            name: '太油'
                        },
                    ]
                },
                {
                    id: 10,
                    classifiy: '水果',
                    list: [{
                            id: 11,
                            name: '不新鲜'
                        },
                        {
                            id: 12,
                            name: '种类太少'
                        },
                        {
                            id: 13,
                            name: '过期'
                        },
                    ]
                },
            ]
        }
    },
    methods: {

    }
}