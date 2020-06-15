/**
 Do not return anything, modify nums in-place instead.
 */
/**
 * 原数组为 ab, 目标数组为 ba
 * 假设 a' 为 a 翻转， 可观察到
 * ba = (a'b')'
 * */

function reverse(nums: number[], start: number, end: number ){
    for(let i = start, j = end; i < j; i++, j--){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}
function rotate(nums: number[], k: number): void {
    let cnt = nums.length;
    k = k % cnt;
    let last = cnt - 1;
    let mid = cnt - k;
    reverse(nums, 0, mid - 1);
    reverse(nums, mid, last);
    reverse(nums, 0, last);
};

// let nums = [-1];
// let k = 2;
// rotate(nums, k );
// console.log(nums);