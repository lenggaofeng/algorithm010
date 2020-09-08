"use strict";
function combine(n, k) {
    const result = [];
    function helper(base, cache) {
        if (cache.length == k) {
            result.push(cache.slice());
            return;
        }
        for (let i = base; i <= n; i++) {
            cache.push(i);
            helper(i + 1, cache);
            cache.pop();
        }
    }
    helper(1, []);
    return result;
}
;
console.log(combine(4, 2));
