"use strict";
function invertTree(root) {
    function dfs(node) {
        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    if (root) {
        dfs(root);
    }
    return root;
}
;
