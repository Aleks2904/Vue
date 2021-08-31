<template>
    <Header />
    <main class="content container">
        <div class="content__top">
            <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                    <router-link
                        class="breadcrumbs__link"
                        :to="{ name: 'main' }"
                    >
                        Каталог
                    </router-link>
                </li>
                <li class="breadcrumbs__item">
                    <router-link
                        class="breadcrumbs__link"
                        :to="{ name: 'basket' }"
                    >
                        Каталог
                    </router-link>
                </li>
            </ul>

            <h1 class="content__title">Корзина</h1>
            <span class="content__info"> {{ goodsArr.length }} товара </span>
        </div>

        <section class="cart">
            <form class="cart__form form" action="#" method="POST">
                <div class="cart__field">
                    <ul class="cart__list">
                        <li
                            class="cart__item product"
                            v-for="item in goods"
                            :key="item.id"
                        >
                            <div class="product__pic">
                                <img
                                    :src="item.img"
                                    width="120"
                                    height="120"
                                    srcset="img/phone-square-3@2x.jpg 2x"
                                    alt="Название товара"
                                />
                            </div>

                            <h3 class="product__title">
                                {{ item.title }}
                            </h3>
                            <p class="product__info">
                                Объем: <span>128GB</span>
                            </p>
                            <span class="product__code">
                                Артикул: {{ item.id }}
                            </span>

                            <div class="product__counter form__counter">
                                <button
                                    type="button"
                                    aria-label="Убрать один товар"
                                    @click.prevent="decrementGoods(item)"
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        fill="currentColor"
                                    >
                                        <use xlink:href="#icon-minus"></use>
                                    </svg>
                                </button>

                                <input
                                    type="text"
                                    :value="item.quantityOfGoods"
                                />

                                <button
                                    type="button"
                                    aria-label="Добавить один товар"
                                    @click.prevent="incrementGoods(item)"
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        fill="currentColor"
                                    >
                                        <use xlink:href="#icon-plus"></use>
                                    </svg>
                                </button>
                            </div>

                            <b class="product__price">
                                {{
                                    $filters.numberFormat(
                                        item.quantityOfGoods * item.price
                                    )
                                }}
                                ₽
                            </b>

                            <button
                                class="product__del button-del"
                                type="button"
                                aria-label="Удалить товар из корзины"
                            >
                                <svg width="20" height="20" fill="currentColor">
                                    <use xlink:href="#icon-close"></use>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="cart__block">
                    <p class="cart__desc">
                        Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем
                        этапе
                    </p>
                    <p class="cart__price">
                        Итого:
                        <span>{{ $filters.numberFormat(fullPrice) }} ₽</span>
                    </p>

                    <button
                        class="cart__button button button--primery"
                        type="submit"
                    >
                        Оформить заказ
                    </button>
                </div>
            </form>
        </section>
    </main>
    <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {};
    },
    methods: {
        incrementGoods(item) {
            item.quantityOfGoods += 1;
        },
        decrementGoods(item) {
            if (item.quantityOfGoods > 1) {
                item.quantityOfGoods -= 1;
            }
        },
    },

    computed: {
        ...mapState({
            goodsArr: (state) => state.basket.goodsArr,
            products: (state) => state.product.products,
        }),

        goods() {
            const goodsArr = this.goodsArr;

            const arrProduct = [];

            this.products.map((item) => {
                goodsArr.map((itemBasket) => {
                    if (item.id == itemBasket.id) {
                        item.quantityOfGoods = itemBasket.number;
                        arrProduct.push(item);
                    }
                });
            });

            return arrProduct;
        },

        fullPrice() {
            let fullPrice = 0;
            this.goods.map((item) => {
                fullPrice += item.quantityOfGoods * item.price;
            });
            return fullPrice;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>