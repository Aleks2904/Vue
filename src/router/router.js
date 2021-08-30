import pageCatalog from '@/pages/pageCatalog';
import pageItem from '@/pages/pageItem';
import pageError from '@/pages/pageError';

import {
    createRouter,
    createWebHistory
} from 'vue-router';

const routes = [{
    name: 'main',
    path: '/',
    component: pageCatalog,
}, {
    name: 'product',
    path: '/item/:id',
    component: pageItem,
}, {
    name: 'pageError',
    path: '/:pathMatch(.*)*',
    component: pageError,
}]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;