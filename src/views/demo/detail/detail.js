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
        this.foods.forEach(item => {
            item.list.forEach(item => {
                item.check = false;
            })
        });
    },
    methods: {
        /**
         * 选择类目
         */
        selectFoods(id, i, s) {
            let isHas = this.selectsId.findIndex(item => {
                return item == id;
            });
            // console.log(id)
            console.log(this.selectsId)

            // 如果该类目没有被选择，则选中,把名字添加进selectsName数组里
            if (isHas == -1) {
                this.foods[i].list[s].check = true;
                this.selectsName.push(this.foods[i].list[s].name);
                this.selectsId.push(this.foods[i].list[s].id);

            } else {
                this.foods[i].list[s].check = false;
                // 删除所选中类目
                this.selectsName.splice(isHas, 1);
                this.selectsId.splice(isHas, 1)
            }
            // console.log(this.selectsName);
            // console.log(this.selectsId);
            // console.log(this.foods[i].list[s]);
        },
        /**
         * 确定
         */
        confirm() {

        }
    }
}