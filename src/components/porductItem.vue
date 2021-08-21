<template>
    <li class="catalog__item">
        <a class="catalog__pic" href="#">
            <img :src="product.img" :alt="product.title" />
        </a>

        <h3 class="catalog__title">
            <a href="#">
                {{ product.title }}
            </a>
        </h3>

        <span class="catalog__price"> {{ product.price }} ₽ </span>

        <ul class="colors colors--black">
            <li
                class="colors__item"
                v-for="(color, i) in colorProducts(colors, product)"
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
export default {
    props: ["product", "colors"],
    data() {
        return {
            startColor: 0,
        };
    },

    methods: {
        colorProducts(colors, product) {
            let productColor = product.colorID;
            return colors.filter(
                (color) => productColor.indexOf(color.colorId) != -1
            );
        },
    },
};
</script>

<style lang="scss" scoped>
</style>