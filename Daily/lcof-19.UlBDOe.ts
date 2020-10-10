/**
 * 
 * 动态规划思路。
 * dp[i][j] 表示 [0..i]在j状态下时需要的最小步数。 共有， 红，黄，红三种状态
 * 
 * dp[i][0] = dp[i - 1][0] + (isYellow(i) ? 1 : 0);
 * dp[i][1] = min(dp[i - 1][0] + dp[i - 1][1]) + (isRed(i) ? 1 : 0);
 * dp[i][2] = min(dp[i - 1][1] + dp[i - 1][2]) + (isYellow(i) ? 1 : 0);
 * dp[0][0] = isYellow(0) ? 1 : 0
 * dp[0][1] = dp[0][2] = num_max;
 */
function minimumOperations(leaves: string): number {
    let pre0 = leaves[0] == 'y' ? 1 : 0;
    let pre1 = Number.MAX_VALUE;
    let pre2 = Number.MAX_VALUE;
    let n = leaves.length;
    for (let i = 1; i < n; i++){
        let isYellow = leaves[i] == "y" ? 1 : 0;
        let isRed = leaves[i] == "r" ? 1 : 0;
        let tmp = pre0;
        pre2 = Math.min(pre1, pre2) + isYellow;
        pre1 = Math.min(pre0, pre1) + isRed;
        pre0 = tmp + isYellow;
    }
    return pre2;
};

console.log(minimumOperations("rrryyyrryyyrr"))