import axios from "axios";
import {
    store_URL
} from '@/axiosURL.js';

export const basketOfGoods = {
    state: () => ({
        userAccessKey: null,
        basket: [],
    }),
    actions: {
        loadingAccessKeyBasket(context) {
            const accessKey = localStorage.getItem('userKey');

            if (accessKey) {
                context.state.userAccessKey = accessKey;
            }

            return axios
                .get(store_URL + 'baskets', {
                    params: {
                        userAccessKey: context.state.userAccessKey
                    }
                })
                .then(response => {
                    if (context.state.userAccessKey === null) {
                        context.state.userAccessKey = response.data.user.accessKey;
                        localStorage.setItem('userKey', response.data.user.accessKey)
                    }

                    context.state.basket = response.data.items;
                })

        },
    },
    namespaced: true,
}