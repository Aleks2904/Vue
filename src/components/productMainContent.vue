<template>
    <main class="content container">
        <div class="content__top content__top--catalog">
            <h1 class="content__title">Каталог</h1>
            <span class="content__info"> 152 товара </span>
        </div>

        <div class="content__catalog">
            <!-- <porduct-sort
                v-model:price-min="priceMin"
                v-model:price-max="priceMax"
                v-model:sort-id="sortId"
                v-model:sort-color="sortColor"
                :arrColors="arrColors"
            ></porduct-sort> -->
            <section class="catalog">
                <ProductList :products="product" :colors="arrColors" />
                <!-- <base-pagination
                    :pageAll="getAllPages"
                    :itemShow="productShow"
                    v-model:page="page"
                ></base-pagination> -->
            </section>
        </div>
    </main>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import BasePagination from "@/components/basePagination.vue";
import PorductSort from "@/components/porductSort.vue";

export default {
    components: { ProductList, BasePagination, PorductSort },
    data() {
        return {};
    },
    computed: {},
};
</script>

<style lang="scss" scoped>
</style>