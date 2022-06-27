import { createRouter, createWebHistory } from 'vue-router';

import Index from './components/Index.vue';
import PageNotFound from './components/PageNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home', path: '/', component: Index
        },
        {
            path: "/:catchAll(.*)", component: PageNotFound
        }
    ],
    linkActiveClass: "active",
    scrollBehavior() {
        return {
            top: 0
        }
    }
});
router.beforeEach(function (to, from, next) {
    document.title = "Minella Resume | Vue";
    next()
});

export default router;
