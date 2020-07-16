/**
 * 二叉树
 */

export default class TreeNode{
    public left: TreeNode;
    public right: TreeNode;
    constructor(public val?: number){
    };

    public static print(node:TreeNode){
        console.log(node.val);
    }
}