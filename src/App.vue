<script setup lang="ts">
import SButton from "./components/SButton.vue";
import { fillCount, needDisable } from "./data.ts";
import { clear } from "./utils.ts";
</script>

<template>
    <div class="box">
        <div class="menu flex">
            <button @click="needDisable=!needDisable">{{ needDisable ? "关闭锁定" : "打开锁定" }}</button>
            <button @click="clear()">清空</button>
        </div>
        <div style="font-size: xx-large">
            共计：{{ fillCount }}
        </div>
    </div>
    <div class="box flex">
        <table>
            <tr v-for="i in 10" :key="i">
                <td v-for="j in 10" :key="j">
                    <SButton :line="i-1" :column="j-1" />
                </td>
            </tr>
        </table>
    </div>
</template>

<style>
table {
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
    margin: 0;
    padding: 0;
}

th, td {
    width: 4rem;
    height: 4rem;
}

.box {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.menu {
    gap: 0.5rem;
}

.flex {
    display: flex;
}
</style>
