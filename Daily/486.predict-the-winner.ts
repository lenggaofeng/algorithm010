
/*
动态规划， 另 dp[i][j] 为当数组剩下部分为 i - j  时， 当前玩家最大优势分值。
对于 i == j, dp[i][i] , 当前玩家只能选取第 i 个值， dp[i][i] = nums[i];
对于 i < j, dp[i][j] = max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
 */

function PredictTheWinner(nums: number[]): boolean {
    let n = nums.length;
    const dp:number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++){
        dp[i] = nums[i];
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
        }
    }

    return dp[n - 1] >= 0;
};

console.log(PredictTheWinner([1, 5, 2]))