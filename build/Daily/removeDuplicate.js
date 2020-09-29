"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function removeDuplicate(arr) {
    let n = arr.length;
    let base = arr[0];
    let basei = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] != base) {
            for (let j = 0; i + j < n; j++) {
                arr[basei + j] = arr[i + j];
            }
            n -= i - basei;
            base = arr[basei];
            basei++;
            i = basei;
        }
    }
}
function removeDuplicate2(arr) {
    if (!arr.length) {
        return arr;
    }
    let n = arr.length;
    let base = arr[0];
    let cnt = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] != base) {
            arr[cnt++] = arr[i];
            base = arr[i];
        }
    }
}
const arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
removeDuplicate2(arr);
console.log(arr);
