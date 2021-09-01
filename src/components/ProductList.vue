<template>
    <div v-if="loadingProduct">идет загрузка товара ...</div>
    <div v-else-if="loadingProductError">
        во время загрузки произошла ошибка
    </div>
    <div v-else-if="products.length == 0">товар не найден</div>
    <ul v-else class="catalog__list">
        <porduct-item
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </ul>
</template>

<script>
import porductItem from "@/components/porductItem";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: { porductItem },
    computed: {
        ...mapState({
            products: (state) => state.product.products,
            loadingProduct: (state) => state.product.loadingProduct,
            loadingProductError: (state) => state.product.loadingProductError,
        }),
    },
};
</script>
