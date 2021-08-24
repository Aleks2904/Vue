<template>
    <ul class="catalog__list">
        <porduct-item
            v-for="product in $store.state.product.products"
            :key="product.id"
            :product="product"
        />
    </ul>
</template>

<script>
import porductItem from "@/components/porductItem";

export default {
    components: { porductItem },
};
</script>
