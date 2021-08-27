import pageCatalog from '@/pages/pageCatalog';
import pageItem from '@/pages/pageItem';

import {
    createRouter,
    createWebHistory
} from 'vue-router';

const routes = [{
    path: '/',
    component: pageCatalog,
    name: 'main',
}, {
    path: '/item/:id',
    component: pageItem,
    name: 'product'
}, ]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;