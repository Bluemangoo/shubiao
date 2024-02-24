import { Ref, ref } from "vue";

const filled: Ref<boolean>[][] = [];
const count: Ref<number>[][] = [];

const needDisable = ref(true);

const fillCount = ref(0);

for (let i = 0; i <= 9; i++) {
    filled[i] = [];
    count[i] = [];

    for (let j = 0; j <= 9; j++) {
        filled[i][j] = ref(false);
        count[i][j] = ref(0);
    }
}

export { filled, count, needDisable, fillCount };