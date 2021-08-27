<template>
    <li class="catalog__item">
        <router-link
            :src="product.img"
            :alt="product.title"
            :to="{ name: 'product', params: { id: product.id } }"
            tag="img"
            class="catalog__pic"
        />

        <router-link
            tag="h3"
            :to="{ name: 'product', params: { id: product.id } }"
            class="catalog__title"
        >
            {{ product.title }}
        </router-link>

        <span class="catalog__price">
            {{ $filters.numberFormat(product.price) }} ₽
        </span>

        <ul class="colors colors--black">
            <li
                class="colors__item"
                v-for="(color, i) in colorProducts(product)"
                :key="color.colorId"
            >
                <label class="colors__label">
                    <input
                        class="colors__radio sr-only"
                        type="radio"
                        :value="i"
                        v-model="startColor"
                    />

                    <span
                        class="colors__value"
                        :style="{ backgroundColor: color.colorName }"
                    />
                </label>
            </li>
        </ul>
    </li>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    props: ["product"],
    data() {
        return {
            startColor: 0,
        };
    },
    computed: {
        ...mapGetters({
            colorProducts: "product/colorProductsItem",
        }),
    },
};
</script>

<style lang="scss" scoped>
</style>