import infoFieldsOrder from "@/components/infoFieldsOrder.vue";

export default {
    props: ["title", "placeholder", "value", "error"],

    components: {
        infoFieldsOrder
    },

    computed: {
        dataValue: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("update:value", value);
            },
        },
    },
};