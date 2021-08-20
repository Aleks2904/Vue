<template>
    <div class="content__catalog">
        <porduct-sort
            :priceMin.sync="priceMin"
            :priceMax.sync="priceMax"
            :sortId.sync="sortId"
        ></porduct-sort>
        <section class="catalog">
            <ProductList :products="product" />
            <base-pagination
                :pageAll="getAllPages"
                :itemShow="productShow"
                :page.sync="page"
            ></base-pagination>
        </section>
    </div>
</template>

<script>
import products from "./data/products";
import ProductList from "./components/ProductList.vue";
import BasePagination from "./components/basePagination.vue";
import porductSort from "@/components/porductSort";
import PorductSort from "./components/porductSort.vue";

for (let pr in products) {
    const prod = products[pr];
    const newId = Math.random();
    products[pr].id = newId;
    console.log(prod);
}

export default {
    name: "App",
    components: { ProductList, BasePagination, porductSort, PorductSort },
    data() {
        return {
            page: 1,
            productShow: 3,
            products: products,
            priceMin: 0,
            priceMax: 0,
            sortId: 0,
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
