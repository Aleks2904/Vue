<template>
    <div class="error-container">
        <Header></Header>

        <div>
            <h1 class="error-container__title">404</h1>
            <p class="error-container__discription">
                тыкни на дино и вернись на главную !
            </p>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    components: {
        Header,
        Footer,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.error-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
        font-size: 50px;
        line-height: 54px;
        text-align: center;
    }

    &__discription {
        font-size: 30px;
        line-height: 34px;
        text-align: center;
    }
}
</style>