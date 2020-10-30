"use strict";
/*
 * @lc app=leetcode.cn id=845 lang=typescript
 *
 * [845] 数组中的最长山脉
 */
// @lc code=start
function longestMountain(A) {
    let left = 0;
    let n = A.length;
    let maxLen = 0;
    while (left + 2 < n) {
        let right = left + 1;
        if (A[left] < A[right]) {
            while (right < n - 1 && A[right] < A[right + 1]) {
                right++;
            }
            if (right < n - 1 && A[right] > A[right + 1]) {
                while (right < n - 1 && A[right] > A[right + 1]) {
                    right++;
                }
                maxLen = Math.max(maxLen, right - left + 1);
            }
            else {
                right++;
            }
        }
        left = right;
    }
    return maxLen;
}
;
// @lc code=end
