"use strict";
/**
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 */
/**
 * 思路1： 暴力求解，O(n)
 */
function minArray(numbers) {
    return Math.min(...numbers);
}
;
/**
 * 思路2: 利用数组的部分有序性， 进行二分查找
 *
 * [3,4,5,1,2]
 *
 */
function minArrayBn(numbers) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        let valMid = numbers[mid];
        if (valMid > numbers[right]) {
            left = mid + 1;
        }
        else if (valMid < numbers[right]) {
            right = mid;
        }
        else {
            right--;
        }
    }
    return numbers[left];
}
;
// let a = [3,4,5,1,2]
// let a = [2,2,2,0,1]
let a = [1, 3, 3];
console.log(minArrayBn(a));
