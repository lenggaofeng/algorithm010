"use strict";
/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */
/**
 *
 * 参考官方题解 https://leetcode-cn.com/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/
 *
 * 方法1： 动态规划，
 * 首先拆分问题， 可以把 n 个结点分别当做根节点来构造BST, 比根节点小的在左子树， 比根节点大的在右子树。 左右子树可以用同样的方式来构造。
 *
 * 定义：
 *  G(n) 为 n 个数的不同二叉搜索树总数。
 *  F(i,n) 为以第 i 个值为根节点, 长度为 n 的序列的 BST 总数。
 * 有上述推论可得到
 *   G(n) = F(1, n) + F(2, n) + ... + F(n, n)
 *
 *  对于 F(i, n) , 根节点为第 i 个数， 左子树有 i - 1 个结点， 右子树有 n - i 个结点, 它的数量为左右子树集合的笛卡尔积的数量。
 *  F(i, n) = G(i - 1) * G(n - i);
 *
 * 归纳可得，
 *    G(n)= G(0) * G(n - 1) + G(1) * G(n-2) + ... + G(n - 1) * G(0);
 *
 * 初始条件:
 *  G(0) = G(1) = 1
 *
 * 方法2 :
 *     上述公式是的值在数学上被称作卡特兰数， 计算公式为：
 *  C0 = 1,  C(n + 1) = 2(2n + 1)/(n + 2) * C(n)
 */
function numTreesDp(n) {
    if (n <= 1) {
        return 1;
    }
    let G = new Array(n);
    G[0] = G[1] = 1;
    for (let i = 2; i <= n; i++) {
        G[i] = 0;
        for (let j = 1; j <= i; j++) {
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
}
// @lc code=start
function numTrees(n) {
    let c = 1;
    for (let i = 0; i < n; i++) {
        c = c * (4 * i + 2) / (i + 2);
    }
    return c;
}
;
// @lc code=end
