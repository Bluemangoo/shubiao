import { count, fillCount, filled } from "./data.ts";

export function click(line: number, column: number) {
    const base = filled[line][column].value ? -1 : 1;
    filled[line][column].value = !filled[line][column].value;
    fillCount.value += base;
    for (let i = 0; i < line; i++) {
        if (filled[i][column].value) {
            for (let j = column + 1; j < 10; j++) {
                count[line][j].value += base;
            }
        }
    }
    for (let i = line + 1; i < 10; i++) {
        if (filled[i][column].value) {
            for (let j = column + 1; j < 10; j++) {
                count[i][j].value += base;
            }
        }
    }
    for (let j = 0; j < column; j++) {
        if (filled[line][j].value) {
            for (let i = 0; i < line; i++) {
                count[i][j].value += base;
            }
        }
    }
    for (let j = column + 1; j < 10; j++) {
        if (filled[line][j].value) {
            for (let i = 0; i < line; i++) {
                count[i][column].value += base;
            }
        }
    }

    for (let i = 0; i < line; i++) {
        for (let j = 0; j < column; j++) {
            if (filled[i][j].value) {
                count[line][j].value += base;
            }
        }
    }
    for (let i = line + 1; i < 10; i++) {
        for (let j = column + 1; j < 10; j++) {
            if (filled[i][j].value) {
                count[i][column].value += base;
            }
        }
    }
}

export function clear() {
    fillCount.value = 0;
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            filled[i][j].value = false;
            count[i][j].value = 0;
        }
    }
}