"use strict";
/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */
// @lc code=start
/**
 * 思路： 使用 Map 保存数字在第一个数组出现的次数，对于第二个数组， 判断是否出现过， 如果出现过，加入到交集
 */
function intersect(nums1, nums2) {
    let map = new Map();
    if (nums1.length > nums2.length) {
        let tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    nums1.forEach(v => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        }
        else {
            map.set(v, 1);
        }
    });
    let results = nums2.filter(v => {
        if (!map.has(v)) {
            return false;
        }
        let cnt = map.get(v);
        if (cnt > 0) {
            map.set(v, cnt - 1);
        }
        return cnt > 0;
    });
    return results;
}
;
// 如果数组已经排好序， 那么可以使用双指针
function intersectSort(nums1, nums2) {
    const comp = (a, b) => a - b;
    nums1.sort(comp);
    nums2.sort(comp);
    let i = 0;
    let j = 0;
    let l1 = nums1.length;
    let l2 = nums2.length;
    let results = [];
    while (i < l1 && j < l2) {
        let a = nums1[i];
        let b = nums2[j];
        if (a == b) {
            results.push(a);
            i++;
            j++;
        }
        else if (a < b) {
            i++;
        }
        else {
            j++;
        }
    }
    return results;
}
;
// @lc code=end
