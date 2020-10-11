/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPowHelper(x:number, n:number):number{
    if(x == 1){return x;}
    let halfPow = myPowHelper(x, Math.floor(n / 2));
    let result = halfPow * halfPow;
    if(x % 2 != 0){
        result *= x;
    }
    return result;
}
function myPow(x: number, n: number): number {
    if(n == 0){return 1;}
    let pow = myPowHelper(x, Math.abs(n));
    return n > 0 ? pow : 1/pow;
};
// @lc code=end

