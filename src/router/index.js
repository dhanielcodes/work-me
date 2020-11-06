import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const router = createRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ],
    history: createWebHistory()
})

export default router