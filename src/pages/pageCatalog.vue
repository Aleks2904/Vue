<template>
    <Header></Header>
    <product-main-content></product-main-content>
    <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import productMainContent from "@/components/productMainContent";
import Footer from "@/components/Footer";

export default {
    components: { Header, productMainContent, Footer },
};
</script>

<style lang="scss" scoped>
</style>