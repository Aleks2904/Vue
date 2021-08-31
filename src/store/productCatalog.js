import products from "@/data/products";
import arrColors from "@/data/sortColor";

for (let pr in products) {
    const newId = Math.random();
    products[pr].id = newId;
}

export const catalogStore = {
    state: () => ({
        page: 1,
        priceMin: 0,
        priceMax: 0,
        sortId: 0,
        sortColor: 0,
        products: products,
        productShow: 3,
        arrColors: arrColors
    }),
    getters: {
        sortProducts(state) {
            let filterProducts = state.products;

            if (state.priceMin > 0) {
                filterProducts = filterProducts.filter(
                    (product) => product.price > state.priceMin
                );
            }

            if (state.priceMax > 0) {
                filterProducts = filterProducts.filter(
                    (product) => product.price < state.priceMax
                );
            }

            if (state.sortId > 0) {
                filterProducts = filterProducts.filter(
                    (product) => product.categoryID === state.sortId
                );
            }

            if (state.sortColor > 0) {

                filterProducts = filterProducts.filter(
                    (product) => product.colorID.indexOf(state.sortColor) != -1
                );
            }

            return filterProducts;
        },
        product(state, getters) {
            const offset = (state.page - 1) * state.productShow;
            return getters.sortProducts.slice(offset, offset + state.productShow);
        },
        getAllPages(state, getters) {
            return getters.sortProducts.length;
        },
        colorProductsItem: (state) => (product) => {
            let productColor = product.colorID;

            return state.arrColors.filter(
                (color) => productColor.indexOf(color.colorId) != -1
            );
        },
    },
    mutations: {
        setPage(state, page) {
            state.page = page
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
    namespaced: true,
}