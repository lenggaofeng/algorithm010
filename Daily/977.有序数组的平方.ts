/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(A: number[]): number[] {
    const n = A.length;
    let positiveIndex = 0;
    for(let i = 0; i < n; i++){
        if(A[i] >=0){
            positiveIndex = i;
            break;
        }
    }

    let i = positiveIndex - 1;
    let j = positiveIndex;
    const results = new Array(n);
    let k = 0;
    while(i >= 0 && j < n){
        if(Math.abs(A[i]) < Math.abs(A[j])){
            results[k++] = A[i] * A[i];
            i--;
        } else {
            results[k++] = A[j] * A[j];
            j ++;
        }
    }
    while(i >= 0){
        results[k++] = A[i] * A[i];
        i--;
    }
    while(j < n){
        results[k++] = A[j] * A[j];
        j++;
    }
    return results;
};

function sortedSquares2(A: number[]): number[] {
    const results = new Array(A.length);
    let i = 0;
    let j = A.length - 1;
    let k = j;
    while(i <= j){
        if(Math.abs(A[i]) > Math.abs(A[j])){
            results[k --] = A[i] * A[i];
            i ++;
        } else {
            results[k --] = A[j] * A[j];
            j --;
        }
    }
    return results;
}

console.log(sortedSquares2([-4,-1,0,3,10]))
// @lc code=end

