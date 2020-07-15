/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
function numTrees(n: number): number {
    let c = 1;
    for(let i = 0; i < n; i++){
        c = Math.floor(c * 2 * (2 * i + 1) / (i + 2));
    }
    return c;
};

// @lc code=end

