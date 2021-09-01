<template>
    <router-view></router-view>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    methods: {
        ...mapActions({
            lodingProducts: "product/getProducts",
            loadingAccessKeyBasket: "basket/loadingAccessKeyBasket",
        }),
    },
    mounted() {
        this.lodingProducts();
        this.loadingAccessKeyBasket();
    },
};
</script>
