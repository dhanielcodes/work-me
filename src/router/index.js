import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue')
        }
    ],
    history: createWebHistory()
})
