/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let i = 0;
    let j = 0;
    let cnt = nums1.length + nums2.length;
    let result = new Array(cnt);
    let index = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] > nums2[j]){
            result[index ++] = nums2[j++];
        } else {
            result[index ++] = nums1[i++];
        }
    }
    while(i < nums1.length){
        result[index ++] = nums1[i++];
    }
    while(j < nums2.length){
        result[index ++] = nums2[j++];
    }
    return (result[Math.floor(cnt / 2)] + result[Math.floor((cnt - 1) / 2)]) / 2;
};
// @lc code=end

