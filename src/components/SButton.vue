<script setup lang="ts">
import { click } from "../utils.ts";
import { count, filled, needDisable } from "../data.ts";

const prop = defineProps({
    line: Number,
    column: Number
});

const line = prop.line ?? 0;
const column = prop.column ?? 0;
const selfConst = count[line][column];
const selfFilled = filled[line][column];
</script>

<template>
    <button @click="click(line,column)" :disabled="needDisable&&(selfConst>0)"
            :style="`background-color:${(needDisable&&(selfConst>0))?'gray':selfFilled?'green':'white'}`">
        {{ selfConst }}
    </button>
</template>

<style scoped>
button {
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
}
</style>