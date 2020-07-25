/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 */

function climbStairs(n: number): number {
    if(n == 1) {return 1;}
    if(n == 2) {return 2;}
    let pre = 1, cur = 2;

    let i = 3;
    while(i <= n){
        let tmp = cur;
        cur += pre;
        pre = tmp;
        i ++;
    }
    return cur;
};