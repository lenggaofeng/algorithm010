"use strict";
/*
 * @lc app=leetcode.cn id=785 lang=typescript
 *
 * [785] 判断二分图
 */
function isBipartiteDFS(graph) {
    let n = graph.length;
    let colors = new Array(n);
    colors.fill(-1);
    function dfs(i, color) {
        colors[i] = color;
        let sideColor = color ? 0 : 1;
        let sides = graph[i];
        for (let j = 0; j < sides.length; j++) {
            let edge = sides[j];
            let edgeColor = colors[edge];
            if (edgeColor == -1) {
                if (!dfs(edge, sideColor)) {
                    return false;
                }
            }
            else if (edgeColor == color) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < n; i++) {
        if (colors[i] == -1 && !dfs(i, 0)) {
            return false;
        }
    }
    return true;
}
;
// @lc code=start
function isBipartite(graph) {
    let n = graph.length;
    let colors = new Array(n);
    colors.fill(-1);
    function bfs(i, color) {
        const queue = new Array();
        colors[i] = color;
        queue.push(i);
        while (queue.length) {
            let cur = queue.shift();
            color = colors[cur];
            let sideColor = color ? 0 : 1;
            let sides = graph[cur];
            for (let j = 0; j < sides.length; j++) {
                let edge = sides[j];
                let edgeColor = colors[edge];
                if (edgeColor == -1) {
                    colors[edge] = sideColor;
                    queue.push(edge);
                }
                else if (edgeColor == color) {
                    return false;
                }
            }
        }
        return true;
    }
    for (let i = 0; i < n; i++) {
        if (colors[i] == -1 && !bfs(i, 0)) {
            return false;
        }
    }
    return true;
}
;
// @lc code=end
// let arr = [[1,3], [0,2], [1,3], [0,2]];
// // let arr = [[2,3,5,6,7,8,9],[2,3,4,5,6,7,8,9],[0,1,3,4,5,6,7,8,9],[0,1,2,4,5,6,7,8,9],[1,2,3,6,9],[0,1,2,3,7,8,9],[0,1,2,3,4,7,8,9],[0,1,2,3,5,6,8,9],[0,1,2,3,5,6,7],[0,1,2,3,4,5,6,7]];
// console.log(isBipartite(arr));
