<template>
    <Header></Header>
    <div v-if="goods == null">идет загрузка ...</div>
    <main v-else class="content container">
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
                        :to="{ name: 'main' }"
                    >
                        {{ goods.category.title }}
                    </router-link>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link">
                        {{ goods.title }}
                    </a>
                </li>
            </ul>
        </div>

        <section class="item">
            <div class="item__pics pics">
                <div class="pics__wrapper">
                    <img
                        v-if="startImg == 0"
                        width="570"
                        height="570"
                        :src="goods.image.file.url"
                        :alt="goods.title"
                    />
                    <img
                        v-else
                        width="570"
                        height="570"
                        :src="goods.image.file.url"
                        :alt="goods.title"
                    />
                </div>
                <ul class="pics__list">
                    <li class="pics__item" :key="0">
                        <a
                            href="#"
                            class="pics__link"
                            :class="{
                                'pics__link--current': 0 == startImg,
                            }"
                            @click.prevent="switchPictures"
                            :value="0"
                        >
                            <img
                                width="98"
                                height="98"
                                :src="goods.image.file.url"
                                :alt="goods.title"
                            />
                        </a>
                    </li>
                    <!-- <li
                        class="pics__item"
                        v-for="(img, i) in searcProduct().otherAngles"
                        :key="i + 1"
                    >
                        <a
                            href="#"
                            class="pics__link"
                            :class="{
                                'pics__link--current': i + 1 == startImg,
                            }"
                            @click.prevent="switchPictures"
                            :value="i + 1"
                        >
                            <img
                                width="98"
                                height="98"
                                :src="'/' + img"
                                :alt="searcProduct().title"
                            />
                        </a>
                    </li> -->
                </ul>
            </div>

            <div class="item__info">
                <span class="item__code" @click="searcProduct"
                    >Артикул: {{ $route.params.id }}</span
                >
                <h2 class="item__title">{{ goods.title }}</h2>
                <div class="item__form">
                    <form
                        class="form"
                        action="#"
                        method="POST"
                        @submit.prevent="submitGoods"
                    >
                        <b class="item__price">
                            {{ $filters.numberFormat(goods.price) }} ₽
                        </b>

                        <fieldset class="form__block">
                            <legend class="form__legend">Цвет:</legend>
                            <ul class="colors">
                                <li
                                    class="colors__item"
                                    v-for="(color, i) in goods.colors"
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
                                            :style="{
                                                backgroundColor: color.code,
                                            }"
                                            :title="color.title"
                                        />
                                    </label>
                                </li>
                            </ul>
                        </fieldset>

                        <!-- <fieldset class="form__block">
                            <legend class="form__legend">Объемб в ГБ:</legend>

                            <ul class="sizes sizes--primery">
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input
                                            class="sizes__radio sr-only"
                                            type="radio"
                                            name="sizes-item"
                                            value="32"
                                        />
                                        <span class="sizes__value"> 32gb </span>
                                    </label>
                                </li>
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input
                                            class="sizes__radio sr-only"
                                            type="radio"
                                            name="sizes-item"
                                            value="64"
                                        />
                                        <span class="sizes__value"> 64gb </span>
                                    </label>
                                </li>
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input
                                            class="sizes__radio sr-only"
                                            type="radio"
                                            name="sizes-item"
                                            value="128"
                                            checked=""
                                        />
                                        <span class="sizes__value">
                                            128gb
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </fieldset> -->

                        <div class="item__row">
                            <div class="form__counter">
                                <button
                                    type="button"
                                    aria-label="Убрать один товар"
                                    @click.prevent="quantityOfGoodsDecrement"
                                >
                                    <svg
                                        width="12"
                                        height="12"
                                        fill="currentColor"
                                    >
                                        <use xlink:href="#icon-minus"></use>
                                    </svg>
                                </button>

                                <input type="text" :value="quantityOfGoods" />

                                <button
                                    type="button"
                                    aria-label="Добавить один товар"
                                    @click.prevent="quantityOfGoodsIncrement"
                                >
                                    <svg
                                        width="12"
                                        height="12"
                                        fill="currentColor"
                                    >
                                        <use xlink:href="#icon-plus"></use>
                                    </svg>
                                </button>
                            </div>

                            <button
                                class="button button--primery"
                                type="submit"
                            >
                                В корзину
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="item__desc">
                <ul class="tabs">
                    <li class="tabs__item">
                        <a class="tabs__link tabs__link--current"> Описание </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#"> Характеристики </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#"> Гарантия </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#"> Оплата и доставка </a>
                    </li>
                </ul>

                <div class="item__content">
                    <p>
                        Навигация GPS, ГЛОНАСС, BEIDOU Galileo и QZSS<br />
                        Синхронизация со смартфоном<br />
                        Связь по Bluetooth Smart, ANT+ и Wi-Fi<br />
                        Поддержка сторонних приложений<br />
                    </p>

                    <a href="#"> Все характеристики </a>

                    <h3>Что это?</h3>

                    <p>
                        Wahoo ELEMNT BOLT GPS – это велокомпьютер, который
                        позволяет оптимизировать свои велотренировки, сделав их
                        максимально эффективными. Wahoo ELEMNT BOLT GPS
                        синхронизируется с датчиками по ANT+, объединяя
                        полученную с них информацию. Данные отображаются на
                        дисплее, а также сохраняются на смартфоне. При этом на
                        мобильное устройство можно установить как фирменное
                        приложение, так и различные приложения сторонних
                        разработчиков. Велокомпьютер точно отслеживает
                        местоположение, принимая сигнал с целого комплекса
                        спутников. Эта информация позволяет смотреть уже
                        преодоленные маршруты и планировать новые велопрогулки.
                    </p>

                    <h3>Дизайн</h3>

                    <p>
                        Велокомпьютер Wahoo ELEMNT BOLT очень компактный.
                        Размеры устройства составляют всего 74,6 x 47,3 x 22,1
                        мм. что не превышает габариты смартфона. Корпус гаджета
                        выполнен из черного пластика. На обращенной к
                        пользователю стороне расположен дисплей диагональю 56
                        мм. На дисплей выводятся координаты и скорость, а также
                        полученная со смартфона и синхронизированных датчиков
                        информация: интенсивность, скорость вращения педалей,
                        пульс и т.д. (датчики не входят в комплект поставки).
                        Корпус велокомпьютера имеет степень защиты от влаги
                        IPX7. Это означает, что устройство не боится пыли, а
                        также выдерживает кратковременное (до 30 минут)
                        погружение в воду на глубину не более 1 метра.
                    </p>
                </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { store_URL } from "@/axiosURL.js";

export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            startColor: 0,
            startImg: 0,
            quantityOfGoods: 1,
            goods: null,
        };
    },
    methods: {
        ...mapActions({
            reloadBaskets: "basket/loadingAccessKeyBasket",
        }),

        switchPictures(e) {
            const val = Number(e.currentTarget.getAttribute("value"));
            this.startImg = val;
        },

        quantityOfGoodsIncrement() {
            this.quantityOfGoods += 1;
        },

        quantityOfGoodsDecrement() {
            if (this.quantityOfGoods > 1) this.quantityOfGoods -= 1;
        },

        submitGoods() {
            let methods = "POST";

            let checkBasketLength = this.basket
                .map((el) => {
                    if (el.product.id == this.$route.params.id) {
                        return el;
                    }
                })
                .filter((el) => typeof el !== "undefined").length;

            if (checkBasketLength > 0) {
                methods = "PUT";
            } else {
                methods = "POST";
            }

            axios({
                method: methods,
                url: store_URL + "baskets/products",
                data: {
                    quantity: String(this.quantityOfGoods),
                    productId: this.$route.params.id,
                },
                params: {
                    userAccessKey: this.accessKey,
                },
            }).then(() => {
                this.reloadBaskets();
            });
        },
    },
    computed: {
        ...mapState({
            accessKey: (state) => state.basket.userAccessKey,
            basket: (state) => state.basket.basket,
        }),
    },

    mounted() {
        axios
            .get(store_URL + `products/${this.$route.params.id}`)
            .then((reponse) => {
                this.goods = reponse.data;
            });
    },
};
</script>

<style lang="scss" scoped>
</style>