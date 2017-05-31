/* eslint-disable spaced-comment */

import login from '../views/login.vue'
import Index from '../views/index.vue'
import sys from '../views/sys/sysIndex.vue'
import department from '../views/sys/department.vue'

const routers = [
    { path: '/login', name: 'login', component: login },
    /* 第一个参数是系统ID，第二个参数是模块ID，第三个参数是用户名 */
    {
        path: '/index/:tabId/:sysModel/:userName',
        component: Index,
        children: [{
                path: '/sys',
                component: sys,
                children: [
                    { path: '', component: department }
                ]
            }
        ]
    },
    { path: '/', redirect: '/login' }
]

export default routers