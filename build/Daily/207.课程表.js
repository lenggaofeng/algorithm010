"use strict";
/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
function canFinishDfs(numCourses, prerequisites) {
    const visited = new Array(numCourses).fill(0 /* Idle */);
    const edges = new Array(numCourses).fill(0).map(() => []);
    prerequisites.forEach(([_out, _in]) => {
        edges[_in].push(_out);
    });
    let hasCircle = false;
    function dfs(i) {
        visited[i] = 1 /* Visting */;
        const nexts = edges[i];
        for (let j = 0; j < nexts.length; j++) {
            const next = nexts[j];
            if (visited[next] == 0 /* Idle */) {
                dfs(next);
            }
            else if (visited[next] == 1 /* Visting */) {
                hasCircle = true;
                return;
            }
        }
        visited[i] = 2 /* Visited */;
    }
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] == 0 /* Idle */) {
            dfs(i);
        }
    }
    return !hasCircle;
}
;
// @lc code=start
function canFinish(numCourses, prerequisites) {
    const inDegress = new Array(numCourses).fill(0);
    const nexts = new Array(numCourses).fill(0).map(() => []);
    prerequisites.forEach(([_out, _in]) => {
        inDegress[_out]++;
        nexts[_in].push(_out);
    });
    const queue = new Array();
    inDegress.forEach((v, i) => {
        if (v == 0) {
            queue.push(i);
        }
    });
    let visited = 0;
    while (queue.length) {
        visited++;
        const i = queue.pop();
        nexts[i].forEach(v => {
            inDegress[v]--;
            if (inDegress[v] == 0) {
                queue.push(v);
            }
            ;
        });
    }
    return visited == numCourses;
}
;
// @lc code=end
console.log(canFinishDfs(3, [[1, 0], [1, 2], [0, 2]]));
