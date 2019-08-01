import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Register from '@/components/Register'
import UserInfo from '@/components/UserInfo'


Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/user-info',
            name: 'UserInfo',
            component: UserInfo,
            props: true,
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})