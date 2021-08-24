import {
    createStore
} from 'vuex';

import {
    catalogStore
} from "@/store/productCatalog"

export default createStore({
    modules: {
        product: catalogStore
    }

})