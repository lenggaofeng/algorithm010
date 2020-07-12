"use strict";
/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/
 */
/**
 * 暴力解法： 放到一个数组中， 排序， 返回
*/
function kthSmallest1(matrix, k) {
    const nums = matrix.reduce((a, b) => {
        return a.concat(b);
    }, []);
    nums.sort((a, b) => a - b);
    return nums[k - 1];
}
/**
 *
 * 思路：归并排序. 最好的办法是用小根堆。 暂时没有封装好的堆， 所以直接排序了. 直接排序，比暴力解法效率还要低
 */
function kthSmallest2(matrix, k) {
    let queue = [];
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        queue.push([matrix[i][0], i, 0]);
    }
    let min = [];
    for (let i = 0; i < k; i++) {
        queue.sort((a, b) => b[0] - a[0]);
        min = queue.pop();
        if (min[2] < n - 1) {
            let row = min[1];
            let col = min[2] + 1;
            queue.push([matrix[row][col], row, col]);
        }
    }
    return min[0];
}
/**
 * 思路: 二分法， 利用矩阵的性质， 可以计算出比任意一个数字 mid 大的数的数量， 如果这个数量大于 k, 则在下半部分， 否则在上半部分
 */
function kthSmallest(matrix, k) {
    let n = matrix.length;
    function check(mid) {
        let num = 0;
        let i = n - 1;
        let j = 0;
        while (i >= 0 && j < n) {
            if (matrix[i][j] <= mid) {
                num += i + 1;
                j++;
            }
            else {
                i--;
            }
        }
        return num >= k;
    }
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = (right + left) >> 1;
        if (check(mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
;
