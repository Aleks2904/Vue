<template>
    <li class="catalog__item">
        <router-link :to="'/item/' + product.id" class="catalog__pic">
            <img :src="product.img" :alt="product.title" />
        </router-link>

        <router-link :to="'/item/' + product.id">
            <h3 class="catalog__title">
                {{ product.title }}
            </h3>
        </router-link>

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
    computed: {
        ...mapGetters({
            colorProducts: "product/colorProductsItem",
        }),
    },
};
</script>

<style lang="scss" scoped>
</style>