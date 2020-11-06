import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

export const router = createRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ],
    history: createWebHistory()
})
