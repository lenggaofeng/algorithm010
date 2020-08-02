/**
 * https://leetcode-cn.com/problems/reverse-bits/
 */

 /**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n:number):number {
    let result = 0;
    let mask = 1;
    for(let i = 0; i < 32; i ++){
        result = result << 1;
        if(mask & n){
            result |= 1;
        }
        mask  = mask << 1;
    }

    return result >>> 0;
};

function reverseBits1(n:number):number {
    let result = 0;
    for(let i = 0; i < 32; i ++){
        result = (result << 1) + (n & 1);
        n = n >> 1;
    }

    return result >>> 0;
};

