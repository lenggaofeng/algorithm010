"use strict";
function isSameTree(p, q) {
    function dfs(p, q) {
        if (p && q) {
            if (p.val == q.val) {
                return dfs(p.left, q.left) && dfs(p.right, q.right);
            }
            else {
                return false;
            }
        }
        return (p == null && q == null);
    }
    return dfs(p, q);
}
