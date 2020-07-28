/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 */

function hammingWeight(n:number):number {
    let mask = 1;
    let cnt = 0;
    for(let i = 0; i < 32; i++){
        if((mask & n) != 0){
            cnt ++;
        }
        mask <<= 1;
    }
    return cnt;
};


function hammingWeight2(n:number):number {
    let cnt = 0;
    while(n != 0){
        n &= n - 1;
        cnt ++;
    }
    return cnt;
};
console.log(hammingWeight2(11111111111111111111111111111101))