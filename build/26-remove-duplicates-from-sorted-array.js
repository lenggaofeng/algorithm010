"use strict";
// [link](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
//从前往后遍历数组， 对于每个数字， 如果不存在，将它换到前面
function removeDuplicates(nums) {
    var cnt = 1;
    for (var i = 1, l = nums.length; i < l; i++) {
        var val = nums[i];
        var found = false;
        for (var j = 0; j < cnt; j++) {
            if (nums[j] == val) {
                found = true;
                break;
            }
        }
        if (!found) {
            nums[cnt] = val;
            cnt++;
        }
    }
    return cnt;
}
;
// let a = [0,0,1,1,1,2,2,3,3,4];
// let n = removeDuplicates(a);
// console.log(n, a);
