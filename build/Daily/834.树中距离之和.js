"use strict";
/*
 * @lc app=leetcode.cn id=834 lang=typescript
 *
 * [834] 树中距离之和
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = require("./Test");
/**
 *
 * 定义 dp[i] 为以 i 为根节点的树到所有子节点的距离之和
 * 定义 sz[i] 为以 i 为根节点的树到所有子节点数量之和
 *
 * 则有递推公式
 *  dp[i] = sumof(dp[v] + sz[v])(for(v in children[i]))
 *  sz[i] = sumof(sz[v])(for(v in children[i])) + 1
 *
 * 下面是最骚的操作。 通过递归的将 子节点v 与父节点i 翻转， 让 i 成为 v 的子节点， 可以根据已有的 dp[i] 和 dp[v], 计算出新的 dp[v]。 新的 dp[v] 即为对应的结点在本题的解。
 *
 * 因为只是翻转了 i， v 的关系， 所以其他结点的值都不会发生变化
 *
 * dpnew[i] = dp[i] - dp[v] - sz[v]
 * sznew[i] = sz[i] - sz[v]
 *
 * dpnew[v] = dp[v] + dpnew[i] + sznew[i]
 * sznew[v] = sz[v] + sznew[i]
 */
// @lc code=start
function sumOfDistancesInTree(N, edges) {
    let graph = new Array(N).fill(0).map(() => []);
    let dp = new Array(N);
    let sz = new Array(N);
    let res = new Array(N);
    edges.forEach(([start, end]) => {
        graph[start].push(end);
        graph[end].push(start);
    });
    function initDp(i, pre) {
        dp[i] = 0;
        sz[i] = 1;
        graph[i].forEach(v => {
            if (v === pre) {
                return;
            }
            initDp(v, i);
            dp[i] += dp[v] + sz[v];
            sz[i] += sz[v];
        });
    }
    function dfs(i, pre) {
        res[i] = dp[i];
        graph[i].forEach(v => {
            if (v === pre) {
                return;
            }
            let oldDpi = dp[i];
            let oldDpv = dp[v];
            let oldSzi = sz[i];
            let oldSzv = sz[v];
            dp[i] -= dp[v] + sz[v];
            sz[i] -= sz[v];
            dp[v] += dp[i] + sz[i];
            sz[v] += sz[i];
            dfs(v, i);
            dp[i] = oldDpi;
            dp[v] = oldDpv;
            sz[i] = oldSzi;
            sz[v] = oldSzv;
        });
    }
    initDp(0, -1);
    dfs(0, -1);
    return res;
}
;
// @lc code=end
const cases = [
    { input: [6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]], output: [8, 12, 6, 10, 10, 10] },
    { input: [2, [[1, 0]]], output: [1, 1] }
];
Test_1.testWithResult(cases, ([n, edges]) => sumOfDistancesInTree(n, edges), Test_1.getCompArr(Test_1.CompBase));
