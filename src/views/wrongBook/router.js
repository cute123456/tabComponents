import Router from 'vue-router';
import index from './';
import list from './list';
import detail from './detail';


export default [{
    name: '错题本',
    component: index,
    path: '/wrongBook',
    redirect: '/wrongBook/list',
    children: [{
            name: '错题本列表',
            path: 'list',
            component: list,
            meta: {
                auth: true
            }
        },
        {
            name: '错题本详情',
            path: 'detail',
            component: detail,
            meta: {
                auth: true
            }
        },

    ]
}]