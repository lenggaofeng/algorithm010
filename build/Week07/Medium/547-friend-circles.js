"use strict";
/**
 * https://leetcode-cn.com/problems/friend-circles/
 */
function findCircleNum(M) {
    const n = M.length;
    const visited = new Set();
    function dfs(index) {
        if (visited.has(index)) {
            return;
        }
        visited.add(index);
        const friends = M[index];
        for (let i = 0; i < n; i++) {
            if (friends[i]) {
                dfs(i);
            }
        }
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            cnt++;
            dfs(i);
        }
    }
    return cnt;
}
;
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
