"use strict";
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];
        const needI = map.get(need);
        if (needI != undefined && i !== needI) {
            return [needI, i];
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [-1, -1];
}
;
// let nums = [3,2,4];
// let target = 6;
// console.log(twoSum(nums,target));
