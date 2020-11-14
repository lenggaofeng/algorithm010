/*
 * @lc app=leetcode.cn id=922 lang=typescript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
function sortArrayByParityII(A: number[]): number[] {
    const arr: number[] = new Array(A.length);
    let index = 0;
    for (let i = 0; i < A.length; i++){
        if (A[i] % 2 == 0) {
            arr[index] = A[i];
            index += 2;
        }
    }
    index = 1;
    for (let i = 0; i < A.length; i++){
        if (A[i] % 2 != 0) {
            arr[index] = A[i];
            index += 2;
        }
    }
    return arr;
};
// @lc code=end

