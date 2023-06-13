import { createRouter, createWebHistory } from 'vue-router'


const HomeProject = () => import('../views/HomeProject.vue');

const routes = [
    {
        path: '/',
        component: HomeProject
    },

    {
        path: '/index-project',
        component: () => import('../views/IndexProject.vue')
    },

    {
        path: '/show-project',
        component: () => import('../views/ShowProject.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
