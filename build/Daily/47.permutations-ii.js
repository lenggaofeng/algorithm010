"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function permuteUnique(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    const n = nums.length;
    const used = new Array(n).fill(false);
    function helper(level, used, cache) {
        if (level == n) {
            results.push(cache.map(i => nums[i]));
            return;
        }
        for (let i = 0; i < n; i++) {
            if (used[i]) {
                continue;
            }
            cache.push(i);
            used[i] = true;
            helper(level + 1, used, cache);
            cache.pop();
            used[i] = false;
            while (i < n - 1 && nums[i + 1] == nums[i]) {
                i++;
            }
        }
    }
    helper(0, used, []);
    return results;
}
;
//使用交换数字来达到排列的目的， 使用 set 来防止重复数字被连续使用。
function permuteUnique2(nums) {
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
        const set = new Set();
        for (let i = level; i < n; i++) {
            if (set.has(nums[i])) {
                continue;
            }
            set.add(nums[i]);
            swap(i, level);
            helper(level + 1);
            swap(i, level);
        }
    }
    helper(0);
    return results;
}
;
console.log(permuteUnique([1, 2, 3, 4]));
