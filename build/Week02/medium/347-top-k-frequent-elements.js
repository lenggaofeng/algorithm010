"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
/** 暴力解法， 使用 Map 统计次数， 并对次数进行排序， */
function topKFrequent(nums, k) {
    let map = new Map();
    nums.forEach(v => {
        let num = map.get(v) || 0;
        map.set(v, num + 1);
    });
    const cnts = [...map.entries()];
    return cnts.sort((a, b) => { return b[1] - a[1]; }).map(v => v[0]).slice(0, k);
}
;
/** 堆排序法， 先使用 Map 统计次数， 然后插入一个最小堆中， 留在堆中的K 个元素就是出现次数最多的元素, 因为 ts 中没有现成可用的堆， 先跳过 */
/** 桶排序法， 先使用 Map 统计次数， 然后以次数为下标，存入元素，最后按下标从大到小输出元素 */
function topKFrequent1(nums, k) {
    let map = new Map();
    let max = 0;
    nums.forEach(v => {
        let num = (map.get(v) || 0) + 1;
        map.set(v, num);
        max = Math.max(num, max);
    });
    let values = new Array(max);
    for (let [k, v] of map.entries()) {
        if (values[v]) {
            values[v].push(k);
        }
        else {
            values[v] = [k];
        }
    }
    let results = new Array(k);
    for (let i = max; i > 0; i--) {
        if (values[i] != undefined) {
            values[i].forEach(v => {
                if (k <= 0) {
                    return;
                }
                results[--k] = v;
            });
            if (k <= 0) {
                break;
            }
        }
    }
    return results;
}
;
