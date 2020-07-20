/**
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
 */

export default null;
/**
* Definition for a binary tree node.
*/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function generateTrees(n: number): Array<TreeNode | null> {
    if(n == 0){return []};
    function dfs(left:number, right:number):Array<TreeNode|null>{
        if(left > right){
            return [null];
        }

        let results = new Array();
        for(let i = left; i <= right; i++){
            const leftChildren = dfs(left, i - 1);
            const rightChildren = dfs(i + 1, right);

            leftChildren.forEach(leftChild=>{
                rightChildren.forEach(rightChild=>{
                    const root = new TreeNode(i);
                    root.left = leftChild;
                    root.right = rightChild;
                    results.push(root);
                });
            });
        }
        return results;
    }
    return dfs(1, n);
};