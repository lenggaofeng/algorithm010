"use strict";
function binaryTreePaths(root) {
    if (!root) {
        return [];
    }
    const paths = [];
    function dfs(node, nodes) {
        if (!node.left && !node.right) {
            const values = nodes.map(v => v.val);
            values.push(node.val);
            const path = values.join("->");
            paths.push(path);
            return;
        }
        nodes.push(node);
        if (node.left) {
            dfs(node.left, nodes);
        }
        if (node.right) {
            dfs(node.right, nodes);
        }
        nodes.pop();
    }
    dfs(root, []);
    return paths;
}
;
