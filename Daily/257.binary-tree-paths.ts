function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) { return [];}

    const paths: string[] = [];
    function dfs(node:TreeNode, nodes: TreeNode[]) {
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
};