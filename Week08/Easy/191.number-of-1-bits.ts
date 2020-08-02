/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 */

 export default null;

function hammingWeight(n:number):number {
    let cnt = 0;
    while(n){
        n = n & n - 1;
        cnt ++;
    }
    return cnt;
}

// console.log(hammingWeight(67))
