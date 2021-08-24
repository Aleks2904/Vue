import pageCatalog from '@/pages/pageCatalog';
import pageItem from '@/pages/pageItem';

import {
    createRouter,
    createWebHistory
} from 'vue-router';

const routes = [{
    path: '/',
    component: pageCatalog
}, {
    path: '/item/:id',
    component: pageItem
}, ]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;