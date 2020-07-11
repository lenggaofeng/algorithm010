"use strict";
/**
 * https://leetcode-cn.com/problems/diving-board-lcci/
 */
function divingBoard(shorter, longer, k) {
    if (k == 0) {
        return [];
    }
    if (shorter == longer) {
        return [shorter * k];
    }
    let results = new Array(k + 1);
    for (let i = 0; i <= k; i++) {
        let v = shorter * (k - i) + longer * i;
        results[i] = v;
    }
    return results;
}
;
