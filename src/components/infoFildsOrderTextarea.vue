<template>
    <info-fields-order :title="title" :error="error">
        <textarea
            class="form__input form__input--area"
            v-model="dataValue"
            :placeholder="placeholder"
        />
    </info-fields-order>
</template>

<script>
import infoFildsMixins from "@/components/mixins/infoFildsMixins.js";

export default {
    mixins: [infoFildsMixins],
};
</script>