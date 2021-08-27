<template>
    <main class="content container">
        <div class="content__top content__top--catalog">
            <h1 class="content__title">Каталог</h1>
            <span class="content__info"> 152 товара </span>
        </div>

        <div class="content__catalog">
            <porduct-sort
                :arrColors="$store.state.product.arrColors"
            ></porduct-sort>

            <section class="catalog">
                <ProductList />

                <base-pagination />
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