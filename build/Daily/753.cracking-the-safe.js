"use strict";
function crackSafe(n, k) {
    const visited = new Set();
    const result = [];
    function dfs(s) {
        const prefix = s.slice(1);
        for (let i = 0; i < k; i++) {
            const next = prefix + i;
            console.log(s, prefix, next);
            if (visited.has(next)) {
                continue;
            }
            visited.add(next);
            dfs(next);
            result.push("" + i);
        }
    }
    const init = new Array(n).fill("0").join("");
    visited.add(init);
    dfs(init);
    result.push(init);
    return result.join('');
}
;
console.log(crackSafe(2, 2));
