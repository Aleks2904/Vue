<template>
    <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form
            class="filter__form form"
            action="#"
            method="get"
            @submit.prevent="submit"
        >
            <fieldset class="form__block">
                <legend class="form__legend">Цена</legend>
                <label class="form__label form__label--price">
                    <input
                        class="form__input"
                        type="text"
                        v-model.number="dataPriceMin"
                    />
                    <span class="form__value">От</span>
                </label>
                <label class="form__label form__label--price">
                    <input
                        class="form__input"
                        type="text"
                        v-model.number="dataPriceMax"
                    />
                    <span class="form__value">До</span>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Категория</legend>
                <label class="form__label form__label--select">
                    <select
                        class="form__select"
                        type="text"
                        v-model="dataSortID"
                    >
                        <option value="0">Все категории</option>
                        <option
                            v-for="sorts in sort"
                            :key="sorts.id"
                            :value="sorts.id"
                        >
                            {{ sorts.title }}
                        </option>
                    </select>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ul class="colors">
                    <li
                        class="colors__item"
                        v-for="color in arrColors"
                        :key="color.colorId"
                    >
                        <label class="colors__label">
                            <input
                                class="colors__radio sr-only"
                                type="radio"
                                :value="color.colorId"
                                v-model="colors"
                            />
                            <span
                                class="colors__value"
                                :style="{ backgroundColor: color.colorName }"
                            >
                            </span>
                        </label>
                    </li>
                </ul>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Объемб в ГБ</legend>
                <ul class="check-list">
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input
                                class="check-list__check sr-only"
                                type="checkbox"
                                name="volume"
                                value="8"
                                checked=""
                            />
                            <span class="check-list__desc">
                                8
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input
                                class="check-list__check sr-only"
                                type="checkbox"
                                name="volume"
                                value="16"
                            />
                            <span class="check-list__desc">
                                16
                                <span>(461)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input
                                class="check-list__check sr-only"
                                type="checkbox"
                                name="volume"
                                value="32"
                            />
                            <span class="check-list__desc">
                                32
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input
                                class="check-list__check sr-only"
                                type="checkbox"
                                name="volume"
                                value="64"
                            />
                            <span class="check-list__desc">
                                64
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input
                                class="check-list__check sr-only"
                                type="checkbox"
                                name="volume"
                                value="128"
                            />
                            <span class="check-list__desc">
                                128
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input
                                class="check-list__check sr-only"
                                type="checkbox"
                                name="volume"
                                value="264"
                            />
                            <span class="check-list__desc">
                                264
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                </ul>
            </fieldset>

            <button class="filter__submit button button--primery" type="submit">
                Применить
            </button>

            <button
                class="filter__reset button button--second"
                type="button"
                @click="reset"
            >
                Сбросить
            </button>
        </form>
    </aside>
</template>

<script>
import sorts from "@/data/sort";

export default {
    props: {
        priceMin: Number,
        priceMax: Number,
        sortId: Number,
        sortColor: Number,
        arrColors: Array,
    },
    emits: [
        "update:priceMin",
        "update:priceMax",
        "update:sortId",
        "update:sortColor",
    ],
    data() {
        return {
            dataSortID: 0,
            dataPriceMin: 0,
            dataPriceMax: 0,
            colors: 0,
        };
    },
    computed: {
        sort() {
            return sorts;
        },
    },
    watch: {
        priceMin(value) {
            this.dataPriceMin = value;
        },
        priceMax(value) {
            this.dataPriceMax = value;
        },
        sortId(value) {
            this.dataSortID = value;
        },
        sortColor(value) {
            this.colors = value;
        },
    },
    methods: {
        submit() {
            this.$emit("update:priceMin", this.dataPriceMin);
            this.$emit("update:priceMax", this.dataPriceMax);
            this.$emit("update:sortId", this.dataSortID);
            this.$emit("update:sortColor", this.colors);
        },
        reset() {
            this.$emit("update:priceMin", 0);
            this.$emit("update:priceMax", 0);
            this.$emit("update:sortId", 0);
            this.$emit("update:sortColor", 0);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>