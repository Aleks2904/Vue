import {
    createStore
} from 'vuex';

import {
    catalogStore
} from "@/store/productCatalog"
import {
    basketOfGoods
} from '@/store/basketOfGoods'


export default createStore({
    modules: {
        product: catalogStore,
        basket: basketOfGoods,
    }
})