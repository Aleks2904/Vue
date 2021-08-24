<template>
    <li class="catalog__item">
        <router-link to="/item" class="catalog__pic">
            <img :src="product.img" :alt="product.title" />
        </router-link>

        <h3 class="catalog__title">
            <router-link to="/item">
                {{ product.title }}
            </router-link>
        </h3>

        <span class="catalog__price"> {{ product.price }} ₽ </span>

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

    methods: {
        ...mapGetters({
            colorProducts: "product/colorProductsItem",
        }),

        // colorProducts(colors, product) {
        //     let productColor = product.colorID;
        //     return colors.filter(
        //         (color) => productColor.indexOf(color.colorId) != -1
        //     );
        // },
    },
};
</script>

<style lang="scss" scoped>
</style>