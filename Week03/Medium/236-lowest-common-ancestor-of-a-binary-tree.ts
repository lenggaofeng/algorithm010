 /**
  * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
  */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
export default null;

class TreeNode{
    public val: number;
    public left: TreeNode;
    public right: TreeNode;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/*
思路1 遍历二叉树， 保存每个结点的父节点， 然后反向遍历， 
将 p 一直到 root 的父节点保存到一个 set 中， 
然后 q 一直往上找父节点， 并判断是否出现在 set 中， 如果有， 则是最近公共祖先。
 */

function lowestCommonAncestor(root:TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    const parents = new Map<TreeNode, TreeNode>();
    function setTreeParents(node:TreeNode, parent: TreeNode){
        if(node == null){return;}
        parents.set(node, parent);
        setTreeParents(node.left, node);
        setTreeParents(node.right, node);
    }
    setTreeParents(root, null);

    const set = new Set();
    let node = p;
    while(node != null){
        set.add(node);
        node = parents.get(node);
    }

    node = q;
    while(node != null){
        if(set.has(node)){
            return node;
        }
        node = parents.get(node);
    }

    return null;
};

/**
 * 思路2 ： 后续遍历二叉树， 递归过程中返回 p, q 或公共祖先 
 * 参考题解
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
 */

function lowestCommonAncestor2(root:TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    function dfs(root:TreeNode, p: TreeNode, q: TreeNode){
        if(!root){return null;}
        if(root == p || root == q){
            return root;
        }
        const left = dfs(root.left, p, q);
        const right = dfs(root.right, p, q);
        if(left && right){ return root;}
        if(left && !right){ return left;}
        if(!left && right){ return right;}
        return null;
    }

    return dfs(root, p, q);
};
