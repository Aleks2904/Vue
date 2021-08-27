import pageCatalog from '@/pages/pageCatalog';
import pageItem from '@/pages/pageItem';

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
}, ]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;