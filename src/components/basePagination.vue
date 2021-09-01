<template>
    <ul class="catalog__pagination pagination">
        <li class="pagination__item">
            <a
                class="pagination__link pagination__link--arrow"
                :class="{
                    'pagination__link--disabled': 1 === this.page,
                }"
                href="#"
                aria-label="Предыдущая страница"
                @click.prevent="pastPage"
            >
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-left"></use>
                </svg>
            </a>
        </li>

        <li
            class="pagination__item"
            v-for="numberPage in allPage"
            :key="numberPage"
        >
            <a
                href="#"
                class="pagination__link"
                :class="{ 'pagination__link--current': numberPage === page }"
                @click.prevent="pagination(numberPage)"
            >
                {{ numberPage }}
            </a>
        </li>

        <li class="pagination__item">
            <a
                class="pagination__link pagination__link--arrow"
                :class="{
                    'pagination__link--disabled':
                        this.itemPagitaion === this.page,
                }"
                href="#"
                aria-label="Следующая страница"
                @click.prevent="nextPage"
            >
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    methods: {
        pagination(page) {
            this.pageMutations(page);
        },
        nextPage() {
            if (this.itemPagitaion != this.page) {
                this.pageMutations(this.page + 1);
            }
        },
        pastPage() {
            if (this.page > 1) {
                this.pageMutations(this.page - 1);
            }
        },

        ...mapMutations({
            pageMutations: "product/setPage",
        }),
        ...mapActions({
            getProducts: "product/getProducts",
        }),
    },
    computed: {
        ...mapState({
            allPage: (state) => state.product.allPage,
            page: (state) => state.product.page,
        }),
    },
    watch: {
        page() {
            this.getProducts();
        },
    },
};
</script>
