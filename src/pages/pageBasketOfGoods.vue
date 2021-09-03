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
                            v-for="item in goodsArr"
                            :key="item.product.id"
                        >
                            <div class="product__pic">
                                <img
                                    :src="item.product.image.file.url"
                                    width="120"
                                    height="120"
                                    srcset="img/phone-square-3@2x.jpg 2x"
                                    alt="Название товара"
                                />
                            </div>

                            <h3 class="product__title">
                                {{ item.product.title }}
                            </h3>
                            <p class="product__info">
                                Объем: <span>128GB</span>
                            </p>
                            <span class="product__code">
                                Артикул: {{ item.product.id }}
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

                                <input type="text" :value="item.quantity" />

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
                                        item.quantity * item.price
                                    )
                                }}
                                ₽
                            </b>

                            <button
                                class="product__del button-del"
                                type="button"
                                aria-label="Удалить товар из корзины"
                                @click.prevent="removeGoods(item)"
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

                    <router-link
                        :to="{ name: 'order' }"
                        v-slot="{ navigate }"
                        custom
                    >
                        <button
                            class="cart__button button button--primery"
                            type="submit"
                            @click="navigate"
                        >
                            Оформить заказ
                        </button>
                    </router-link>
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
import axios from "axios";
import { store_URL } from "@/axiosURL";

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
            item.quantity += 1;
            this.quantityСhanges(item);
        },
        decrementGoods(item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                this.quantityСhanges(item);
            }
        },

        quantityСhanges(item) {
            axios({
                method: "PUT",
                url: store_URL + "baskets/products",
                data: {
                    quantity: String(item.quantity),
                    productId: String(item.product.id),
                },
                params: {
                    userAccessKey: this.accessKey,
                },
            }).then(() => {
                this.reloadBaskets();
            });
        },

        removeGoods(item) {
            axios({
                method: "DELETE",
                url: store_URL + "baskets/products",
                data: {
                    productId: item.product.id,
                },
                params: {
                    userAccessKey: this.accessKey,
                },
            }).then(() => {
                this.reloadBaskets();
            });
        },

        ...mapActions({
            reloadBaskets: "basket/loadingAccessKeyBasket",
        }),
    },

    computed: {
        ...mapState({
            goodsArr: (state) => state.basket.basket,
            accessKey: (state) => state.basket.userAccessKey,
        }),

        fullPrice() {
            let fullPrice = 0;
            this.goodsArr.map((item) => {
                fullPrice += item.quantity * item.product.price;
            });
            return fullPrice;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>