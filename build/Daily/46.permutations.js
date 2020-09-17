"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function permute(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    const n = nums.length;
    function swap(i, j) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    function helper(level) {
        if (level == n) {
            results.push(nums.slice());
            return;
        }
        for (let i = level; i < n; i++) {
            swap(i, level);
            helper(level + 1);
            swap(i, level);
        }
    }
    helper(0);
    return results;
}
;
console.log(permute([1, 2, 3, 4]));
