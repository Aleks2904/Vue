<template>
    <ul class="catalog__list">
        <porduct-item
            v-for="product in product"
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
        ...mapGetters({
            product: "product/product",
        }),
    },
};
</script>
