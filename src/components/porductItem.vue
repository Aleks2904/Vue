<template>
    <li class="catalog__item">
        <router-link
            :to="{ name: 'product', params: { id: product.id } }"
            class="catalog__pic"
        >
            <img :src="product.image.file.url" :alt="product.title" />
        </router-link>

        <router-link :to="{ name: 'product', params: { id: product.id } }">
            <h3 class="catalog__title">
                {{ product.title }}
            </h3>
        </router-link>

        <span class="catalog__price">
            {{ $filters.numberFormat(product.price) }} ₽
        </span>

        <ul class="colors colors--black">
            <li
                class="colors__item"
                v-for="(color, i) in product.colors"
                :key="color.id"
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
                        :title="color.title"
                        :style="{ backgroundColor: color.code }"
                    />
                </label>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ["product"],
    data() {
        return {
            startColor: 0,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>