<template>
    <Header></Header>

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
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link"> Оформление заказа </a>
                </li>
            </ul>

            <h1 class="content__title">Корзина</h1>
            <span class="content__info"> {{ goodsArr.length }} товара </span>
        </div>

        <section class="cart">
            <form class="cart__form form" @submit.prevent="sybmit">
                <div class="cart__field">
                    <div class="cart__data">
                        <infoFildsOrderText
                            v-model:value="dataGoods.name"
                            title="ФИО"
                            placeholder="Введите ваше полное имя"
                            :error="errorOrder.name"
                        ></infoFildsOrderText>

                        <infoFildsOrderText
                            v-model:value="dataGoods.address"
                            title="Адрес доставки"
                            placeholder="Введите ваш адрес"
                            :error="errorOrder.address"
                        ></infoFildsOrderText>

                        <infoFildsOrderText
                            v-model:value="dataGoods.phone"
                            title="Телефон"
                            placeholder="Введите ваш телефон"
                            :error="errorOrder.phone"
                            :type="'tel'"
                        ></infoFildsOrderText>

                        <infoFildsOrderText
                            v-model:value="dataGoods.email"
                            title="Email"
                            placeholder="Введи ваш Email"
                            :error="errorOrder.email"
                            :type="'email'"
                        ></infoFildsOrderText>

                        <infoFildsOrderTextarea
                            v-model:value="dataGoods.comment"
                            title="Комментарий к заказу"
                            placeholder="Ваши пожелания"
                        ></infoFildsOrderTextarea>
                    </div>

                    <div class="cart__options">
                        <h3 class="cart__title">Доставка</h3>
                        <ul class="cart__options options">
                            <li class="options__item">
                                <label class="options__label">
                                    <input
                                        class="options__radio sr-only"
                                        type="radio"
                                        name="delivery"
                                        value="0"
                                        checked=""
                                    />
                                    <span class="options__value">
                                        Самовывоз <b>бесплатно</b>
                                    </span>
                                </label>
                            </li>
                            <li class="options__item">
                                <label class="options__label">
                                    <input
                                        class="options__radio sr-only"
                                        type="radio"
                                        name="delivery"
                                        value="500"
                                    />
                                    <span class="options__value">
                                        Курьером <b>500 ₽</b>
                                    </span>
                                </label>
                            </li>
                        </ul>

                        <h3 class="cart__title">Оплата</h3>
                        <ul class="cart__options options">
                            <li class="options__item">
                                <label class="options__label">
                                    <input
                                        class="options__radio sr-only"
                                        type="radio"
                                        name="pay"
                                        value="card"
                                    />
                                    <span class="options__value">
                                        Картой при получении
                                    </span>
                                </label>
                            </li>
                            <li class="options__item">
                                <label class="options__label">
                                    <input
                                        class="options__radio sr-only"
                                        type="radio"
                                        name="pay"
                                        value="cash"
                                    />
                                    <span class="options__value">
                                        Наличными при получении
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="cart__block">
                    <ul class="cart__orders">
                        <li
                            class="cart__order"
                            v-for="item in goodsArr"
                            :key="item.product.id"
                        >
                            <h3>{{ item.product.title }}</h3>
                            <b
                                >{{
                                    $filters.numberFormat(
                                        item.product.price * item.quantity
                                    )
                                }}
                                ₽</b
                            >
                            <span>Артикул: {{ item.product.id }}</span>
                        </li>
                    </ul>

                    <div class="cart__total">
                        <p>Доставка: <b>500 ₽</b></p>
                        <p>
                            Итог: <b>{{ goodsArr.length }}</b> товара на сумму
                            <b>{{ $filters.numberFormat(fullPrice) }} ₽</b>
                        </p>
                    </div>

                    <button
                        class="cart__button button button--primery"
                        type="submit"
                    >
                        Оформить заказ
                    </button>
                </div>
                <div class="cart__error form__error-block" v-if="errorMessage">
                    <h4>Заявка не отправлена!</h4>
                    <p>
                        {{ errorMessage }}
                    </p>
                </div>
            </form>
        </section>
    </main>

    <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import infoFildsOrderText from "@/components/infoFildsOrderText";
import infoFildsOrderTextarea from "@/components/infoFildsOrderTextarea";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import { store_URL } from "@/axiosURL";

export default {
    components: {
        Header,
        Footer,
        infoFildsOrderText,
        infoFildsOrderTextarea,
    },
    data() {
        return {
            dataGoods: {},
            errorOrder: {},
            errorMessage: "",
        };
    },
    computed: {
        ...mapState({
            goodsArr: (state) => state.basket.basket,
            accessKey: (state) => state.basket.userAccessKey,
        }),

        fullPrice() {
            let fullPrice = 0;

            this.goodsArr.map((item) => {
                fullPrice += item.product.price * item.quantity;
            });

            return fullPrice;
        },
    },
    methods: {
        ...mapMutations({
            updateBasket: "basket/resetBasket",
            setOrederData: "basket/setOrederData",
        }),
        sybmit() {
            axios({
                method: "POST",
                url: store_URL + "orders",
                data: { ...this.dataGoods },
                params: {
                    userAccessKey: this.accessKey,
                },
            })
                .catch((er) => {
                    this.errorOrder = er.response.data.error.request || {};
                    this.errorMessage = er.response.data.error.message || "";
                })
                .then((response) => {
                    this.updateBasket([]);
                    this.setOrederData(response.data);
                    this.$router.push({
                        name: "orderStatus",
                        params: { id: response.data.id },
                    });
                });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>