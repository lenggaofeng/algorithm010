/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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
    constructor(val: number){};
}

/**
 * 思路1, 根据谦虚遍历和中序遍历的特性， 找到 根节点在中序遍历的顺序， 则根节点前面的部分为左子树， 后面部分为右子树
 *  因此可以把问题化简为构建左右子树， 这样只需要递归下来， 就可以完成整棵树的构建
 * 参考题解 https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder: number[], inorder:number[]): TreeNode {
    let inoderIndexMap = new Map<number, number>();
    function buildMyTree(preorder: number[], inorder:number[], preorder_left: number, preorder_right: number, inorder_left: number, inorder_right: number){
        if(preorder_left > preorder_right){return null;}

        const root = preorder[preorder_left];
        const rootI = inoderIndexMap.get(root);
        const node = new TreeNode(root);
        const leftLen = rootI - inorder_left - 1;
        const leftInorderRight = preorder_left + 1 + leftLen;
        node.left = buildMyTree(preorder, inorder, preorder_left + 1, leftInorderRight, inorder_left, rootI - 1);
        node.right = buildMyTree(preorder, inorder, leftInorderRight + 1, preorder_right, rootI + 1, inorder_right);
        return node;
    }

    inorder.forEach((v, i)=>{
        inoderIndexMap.set(v, i);
    });
    let len = preorder.length;
    return buildMyTree(preorder, inorder, 0, len - 1, 0, len - 1);
};
buildTree([3,9,20,15,7], [9,3,15,20,7]);
