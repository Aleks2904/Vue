<template>
    <ul class="catalog__list">
        <porduct-item
            v-for="product in products"
            :key="product.id"
            :product="product"
            :colors="colors"
        />
    </ul>
</template>

<script>
import porductItem from "@/components/porductItem";

export default {
    components: { porductItem },
    props: ["products", "colors"],
};
</script>
