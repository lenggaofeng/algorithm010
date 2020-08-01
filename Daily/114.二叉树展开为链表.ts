/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if(!root){ return;}
    let pre:TreeNode = null;

    function dfs(parent:TreeNode| null){
        if(!parent){return;}
        if(pre){
            pre.left = parent;
        }
        pre = parent;

        dfs(parent.left);
        dfs(parent.right);
        parent.right = null;
    }

    dfs(root);

    let node = root;
    while(node.left){
        let child = node.left;
        node.left = null;
        node = node.right = child;
    }
};

function flatten2(root: TreeNode | null): void {
    if(!root){ return;}

    let cur = root;
    while(cur){
        let next = cur.left;
        let pre:TreeNode|null = next;
        if(pre){
            while(pre.right){
                pre = pre.right;
            }
            pre.right = cur.right;
            cur.left = null;
            cur.right = next;
        }
        cur = cur.right;
    }
};
// @lc code=end

