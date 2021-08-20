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
            v-for="numberPage in itemPagitaion"
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
export default {
    props: ["pageAll", "itemShow", "page"],
    methods: {
        pagination(page) {
            this.$emit("update:page", page);
        },
        nextPage() {
            if (this.itemPagitaion != this.page) {
                this.$emit("update:page", this.page + 1);
            }
        },
        pastPage() {
            if (this.page > 1) {
                this.$emit("update:page", this.page - 1);
            }
        },
    },
    computed: {
        itemPagitaion() {
            return Math.ceil(this.pageAll / this.itemShow);
        },
    },
};
</script>
