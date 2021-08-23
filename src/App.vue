<template>
    <div class="content__catalog">
        <porduct-sort
            v-model:price-min="priceMin"
            v-model:price-max="priceMax"
            v-model:sort-id="sortId"
            v-model:sort-color="sortColor"
            :arrColors="arrColors"
        ></porduct-sort>
        <section class="catalog">
            <ProductList :products="product" :colors="arrColors" />
            <base-pagination
                :pageAll="getAllPages"
                :itemShow="productShow"
                v-model:page="page"
            ></base-pagination>
        </section>
    </div>
</template>

<script>
import products from "./data/products";
import ProductList from "./components/ProductList.vue";
import BasePagination from "./components/basePagination.vue";
import PorductSort from "./components/porductSort.vue";
import arrColors from "@/data/sortColor";

for (let pr in products) {
    const prod = products[pr];
    const newId = Math.random();
    products[pr].id = newId;
}

export default {
    components: { ProductList, BasePagination, PorductSort },
    data() {
        return {
            page: 1,
            productShow: 3,
            products: products,
            priceMin: 0,
            priceMax: 0,
            sortId: 0,
            sortColor: 0,
            arrColors: arrColors,
        };
    },
    computed: {
        sortProducts() {
            let filterProducts = products;

            if (this.priceMin > 0) {
                filterProducts = filterProducts.filter(
                    (product) => product.price > this.priceMin
                );
            }

            if (this.priceMax > 0) {
                filterProducts = filterProducts.filter(
                    (product) => product.price < this.priceMax
                );
            }

            if (this.sortId > 0) {
                filterProducts = filterProducts.filter(
                    (product) => product.categoryID === this.sortId
                );
            }

            if (this.sortColor > 0) {
                console.log(this.sortColor);

                filterProducts = filterProducts.filter(
                    (product) => product.colorID.indexOf(this.sortColor) != -1
                );
            }

            return filterProducts;
        },
        product() {
            const offset = (this.page - 1) * this.productShow;
            return this.sortProducts.slice(offset, offset + this.productShow);
        },
        getAllPages() {
            return this.sortProducts.length;
        },
    },
};
</script>
