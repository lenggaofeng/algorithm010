/**
 * 
 * 第 k 个, k / (n - 1)
 * 
 * 
*/
function getPermutation(n: number, k: number): string {
    let nums = new Array(n).fill(0).map((_, i) => i + 1);
    const permutation: number[] = [];
    let base = 1;
    for (let i = 2; i < n; i++){
        base *= i;
    }
    k--;
    for (let index = 0; index < n - 1; index++){
        let i = Math.floor(k / base);
        permutation.push(nums[i]);
        nums.splice(i, 1);
        k -= base * i;
        base /= (n - index - 1);
    }
    permutation.push(nums[0]);
    return permutation.join('');
};
console.log(getPermutation(4, 9));