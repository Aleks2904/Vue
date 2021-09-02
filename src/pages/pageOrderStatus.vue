<template>
    <Header></Header>
    <main class="content container">
        <div class="content__top">
            <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link" href="index.html"> Каталог </a>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link" href="cart.html"> Корзина </a>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link"> Оформление заказа </a>
                </li>
            </ul>

            <h1 class="content__title">Заказ оформлен <span>№ 23621</span></h1>
        </div>

        <section class="cart">
            <form class="cart__form form" action="#" method="POST">
                <div class="cart__field">
                    <p class="cart__message">
                        Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу
                        почту придет письмо с&nbsp;деталями заказа. Наши
                        менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для
                        уточнения деталей доставки.
                    </p>

                    <ul class="dictionary">
                        <li class="dictionary__item">
                            <span class="dictionary__key"> Получатель </span>
                            <span class="dictionary__value">
                                Иванова Василиса Алексеевна
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key">
                                Адрес доставки
                            </span>
                            <span class="dictionary__value">
                                Москва, ул. Ленина, 21, кв. 33
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key"> Телефон </span>
                            <span class="dictionary__value">
                                8 800 989 74 84
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key"> Email </span>
                            <span class="dictionary__value">
                                lalala@mail.ru
                            </span>
                        </li>
                        <li class="dictionary__item">
                            <span class="dictionary__key"> Способ оплаты </span>
                            <span class="dictionary__value">
                                картой при получении
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="cart__block">
                    <ul class="cart__orders">
                        <li class="cart__order">
                            <h3>Смартфон Xiaomi Redmi Note 7 Pro 6/128GB</h3>
                            <b>18 990 ₽</b>
                            <span>Артикул: 150030</span>
                        </li>
                        <li class="cart__order">
                            <h3>Гироскутер Razor Hovertrax 2.0ii</h3>
                            <b>4 990 ₽</b>
                            <span>Артикул: 150030</span>
                        </li>
                        <li class="cart__order">
                            <h3>Электрический дрифт-карт Razor Lil’ Crazy</h3>
                            <b>8 990 ₽</b>
                            <span>Артикул: 150030</span>
                        </li>
                    </ul>

                    <div class="cart__total">
                        <p>Доставка: <b>500 ₽</b></p>
                        <p>Итого: <b>3</b> товара на сумму <b>37 970 ₽</b></p>
                    </div>
                </div>
            </form>
        </section>
    </main>
    <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import { store_URL } from "@/axiosURL.js";

export default {
    components: {
        Header,
        Footer,
    },

    data() {
        return {};
    },

    computed: {
        ...mapState({
            dataStatus: (state) => state.basket.orderData,
            accessKey: (state) => state.basket.userAccessKey,
        }),
    },
    methods: {
        ...mapMutations({
            setOrederData: "basket/setOrederData",
        }),

        checkDataStatus() {
            const idPage = this.$route.params.id;
            console.log(idPage);
            if (this.dataStatus.id === idPage) {
                return false;
            }

            axios({
                method: "GET",
                url: store_URL + "order" + idPage,
                params: {
                    userAccessKey: this.accessKey,
                },
            }).then((response) => {
                this.setOrederData(response.data);
            });
        },
    },

    mounted() {
        this.checkDataStatus();
    },
};
</script>

<style lang="scss" scoped>
</style>