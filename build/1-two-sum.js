"use strict";
/**
 * 思路：
 * 用 Map 保存数据，以数组值为键， 索引为值. 遍历过程中可以检查对应的值是否已经在 map 中
 */
function twoSum(nums, target) {
    const map = {};
    for (let i = 0, l = nums.length; i < l; i++) {
        let value = nums[i];
        let need = target - value;
        if (map[need] != undefined) {
            return [map[need], i];
        }
        map[value] = i;
    }
    return [];
}
;
let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));
