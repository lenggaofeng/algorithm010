/**
 * 
 * https://leetcode-cn.com/problems/burst-balloons/
 */


 /**
  * 
  * 参考官方题解：
  * 反向思考, 令 solve(i,j) 为开区间的最大硬币数
  * 当 i >= j - 1 时, solve(i,j) = 0;
  * 当 i < j - 1 时， 假设 mid 为第一个插入的元素, 则此时， solve(i,j) = i * mid * j,
  * 考虑继续往中间插入，问题可以简化为子问题： solve(i, j) = solve(i, mid) + solve(mid, j) + i * j * mid;
  */

//   [3,1,5,8]
function maxCoins(nums: number[]): number {
    let n = nums.length;
    nums[-1] = nums[n] = 1;
    let cache:number[][] = [];
    function solve(left:number, right: number){
        if(left > right){
            return 0;
        }
        if(cache[left] && cache[left][right]){
            return cache[left][right];
        }
        let result = 0;
        let muitlBase = nums[left - 1] * nums[right + 1];
        for(let i = left; i <= right; i++){
            let tmp = solve(left, i - 1) + solve(i + 1, right) + muitlBase * nums[i];
            if(tmp > result){
                result = tmp;
            }
        }
        if(!cache[left]){
            cache[left] = [];
        }
        cache[left][right] = result;
        return result;
    }

    return solve(0, n - 1);
};

console.log(maxCoins([3,1,5,8]))