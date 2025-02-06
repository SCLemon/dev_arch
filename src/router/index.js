import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../pages/Main/Main.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/main',
            component:Main,
        },
        {
            path:'/',
            redirect:'/main'
        },
    ]
})
router.beforeEach((to, from, next) => {
    next();
});

export default router