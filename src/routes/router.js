import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeProject.vue')
        },

        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/IndexProject.vue')
        },

        {
            path: '/projects/:slug',
            name: 'show-project',
            component: () => import('../views/ShowProject.vue')
        },
        //page not found error 404
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: () => import('../views/NotFound.vue')
        }
    ],
});

export default router;
