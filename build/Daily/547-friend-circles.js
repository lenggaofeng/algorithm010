"use strict";
/**
 * https://leetcode-cn.com/problems/friend-circles/
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * todo
 * 有三种思路， bfs, dfs, 和并查集， 分别实现一遍
 *
 *
 *
 */
exports.default = null;
function findCircleNum(M) {
    const n = M.length;
    let color = new Array(n).fill(0);
    function dfs(i) {
        color[i] = 1;
        const friends = M[i];
        for (let j = 0; j < n; j++) {
            if (friends[j] == 1 && color[j] == 0) {
                dfs(j);
            }
        }
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (color[i] == 0) {
            cnt++;
            dfs(i);
        }
    }
    return cnt;
}
;
function findCircleNumBfs(M) {
    const n = M.length;
    function bfs(i) {
        const queue = [i];
        while (queue.length) {
            const top = queue.shift();
            color[top] = 1;
            const friends = M[top];
            for (let j = 0; j < n; j++) {
                if (friends[j] == 1 && color[j] == 0) {
                    queue.push(j);
                }
            }
        }
    }
    let cnt = 0;
    let color = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (color[i] == 0) {
            cnt++;
            bfs(i);
        }
    }
    return cnt;
}
;
