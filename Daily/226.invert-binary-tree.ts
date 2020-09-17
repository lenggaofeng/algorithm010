function invertTree(root: TreeNode | null): TreeNode | null {
    function dfs(node: TreeNode){
        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    if(root){
        dfs(root);
    }
    return root;
};