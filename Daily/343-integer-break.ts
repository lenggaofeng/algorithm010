/**
 * https://leetcode-cn.com/problems/integer-break/
 */

function integerBreak(n: number): number {
    if(n <= 3){return n - 1;}
    
    const remainder = n % 3;
    if(remainder === 0){
        return Math.pow(3, n / 3);
    } else if(remainder === 1) {
        return Math.pow(3, Math.floor(n / 3) - 1) * 4;
    } else {
        return Math.pow(3, Math.floor(n / 3)) * 2;
    }
};