import Router from 'vue-router';
import index from './';
import list from './list';
import detail from './detail';


export default [{
    name: '音乐列表',
    component: index,
    path: '/music',
    redirect: '/music/list',
    children: [{
            name: '列表',
            path: 'list',
            component: list,
            meta: {
                auth: true
            }
        },
        {
            name: '详情',
            path: 'detail',
            component: detail,
            meta: {
                auth: true
            }
        },

    ]
}]