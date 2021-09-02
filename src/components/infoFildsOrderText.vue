<template>
    <info-fields-order :title="title" :error="error">
        <input
            class="form__input"
            v-model="dataValue"
            :placeholder="placeholder"
            :type="type"
        />
    </info-fields-order>
</template>

<script>
import infoFildsMixins from "@/components/mixins/infoFildsMixins.js";

export default {
    props: {
        type: {
            default: "text",
        },
    },

    mixins: [infoFildsMixins],
};
</script>

<style lang="scss" scoped>
</style>