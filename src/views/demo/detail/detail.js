import Vue from 'vue'


export
default {
    data() {
        return {
            selectsName: [],
            selectsId: [],
            foods: [{
                    id: 1,
                    classifiy: '猪肉',
                    list: [{
                            id: 2,
                            name: '量少1'
                        },
                        {
                            id: 3,
                            name: '不新鲜'
                        },
                        {
                            id: 4,
                            name: '太油腻'
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
                        {
                            id: 10,
                            name: '量少'
                        },
                        {
                            id: 11,
                            name: '太油'
                        },
                    ]
                },
                {
                    id: 12,
                    classifiy: '水果',
                    list: [{
                            id: 13,
                            name: '不新鲜'
                        },
                        {
                            id: 14,
                            name: '种类太少'
                        },
                        {
                            id: 15,
                            name: '过期'
                        },
                        {
                            id: 16,
                            name: '种类太少'
                        },
                        {
                            id: 17,
                            name: '过期'
                        },
                        {
                            id: 18,
                            name: '种类太少'
                        },
                    ]
                },
            ]
        }
    },
    created() {

    },
    methods: {
        /**
         * 选择类目
         */
        selectFoods(id) {
            let isHas = this.selectsName.findIndex(item => {
                return item.id
            });
            // 如果该类目没有被选择，则选中
            if (isHas === -1) {

            }
        }
    }
}