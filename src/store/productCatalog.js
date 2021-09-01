import axios from "axios";
import {
    store_URL
} from '@/axiosURL.js';

export const catalogStore = {
    state: () => ({
        //активная страница и всего страниц
        page: 1,
        allPage: 0,
        //сортировка
        priceMin: 0,
        priceMax: 0,
        sortId: 0,
        sortColor: 0,
        //список категорий и цветов для сортировки
        listColor: [],
        listSort: [],
        //список товары и колличество отображаймых
        products: [],
        productShow: 3,
        //состояния загрузки и ошибки при получении товаров
        loadingProduct: false,
        loadingProductError: false,
    }),
    mutations: {
        setPage(state, page) {
            state.page = page
        },
        setAllPage(state, allPage) {
            state.allPage = allPage
        },
        setProducts(state, products) {
            state.products = products
        },
        setListColor(state, listColor) {
            state.listColor = listColor
        },
        setListSort(state, listSort) {
            state.listSort = listSort
        },
        setPriceMin(state, priceMin) {
            state.priceMin = priceMin
        },
        setPriceMax(state, priceMax) {
            state.priceMax = priceMax
        },
        setSortId(state, sortId) {
            state.sortId = sortId
        },
        setSortColor(state, sortColor) {
            state.sortColor = sortColor
        },
    },
    actions: {
        //получения товаров
        getProducts(context) {
            this.state.product.loadingProduct = true;

            return axios
                .get(store_URL + 'products', {
                    params: {
                        //старт страница и колличества строница 
                        page: this.state.product.page,
                        limit: this.state.product.productShow,
                        //сортировка
                        categoryId: this.state.product.sortId,
                        colorId: this.state.product.sortColor,
                        minPrice: this.state.product.priceMin,
                        maxPrice: this.state.product.priceMax,
                    }
                })
                .catch(() => {
                    this.state.product.loadingProductError = true;
                })
                .then(response => {
                    this.state.product.loadingProduct = false;

                    if (response.status > 199 && response.status < 300) {
                        context.commit('setProducts', response.data.items);
                        context.commit('setAllPage', response.data.pagination.pages);
                        this.state.product.loadingProductError = false;
                    }
                })
        },
    },
    namespaced: true,
}