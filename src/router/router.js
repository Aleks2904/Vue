import pageCatalog from '@/pages/pageCatalog';
import pageItem from '@/pages/pageItem';
import pageError from '@/pages/pageError';
import pageBasketOfGoods from '@/pages/pageBasketOfGoods';
import pageOrders from '@/pages/pageOrders';
import pageOrderStatus from '@/pages/pageOrderStatus';

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
        name: 'basket',
        path: '/basket',
        component: pageBasketOfGoods,
    }, {
        name: 'order',
        path: '/order',
        component: pageOrders,
    }, {
        name: 'orderStatus',
        path: '/status/:id',
        component: pageOrderStatus,
    },
    {
        name: 'pageError',
        path: '/:pathMatch(.*)*',
        component: pageError,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;