/**
 * https://leetcode-cn.com/problems/power-of-two/
 */

function isPowerOfTwo(n: number): boolean {
    return (n & n - 1) == 0 ;
};