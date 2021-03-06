import { createBTreeByArr } from "./createBTree";
/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
 */

import { Case, testWithResult } from "./Test";

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

function findMode(root: TreeNode | null): number[] {
    if (!root) { return [];}
    const numMap = new Map<number, number>()
    let maxCnt = 0;
    function dfs(node: TreeNode) {
        let cnt = (numMap.get(node.val) || 0) + 1;
        maxCnt = Math.max(cnt, maxCnt);
        numMap.set(node.val, cnt);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }

    dfs(root);

    const result: number[] = [];
    numMap.forEach((cnt, num) => {
        if (cnt == maxCnt) {
            result.push(num);
        }
    })
    return result;
};
// @lc code=end

function findModeMid(root: TreeNode | null): number[] {
    if (!root) { return []; }
    let base: number = -1;
    let count: number = 0;
    let maxCount: number = -1;
    let result: number[] = [];
    function dfs(node: TreeNode) {
        node.left && dfs(node.left);

        // console.log('----', node.val, base, count)
        if (node.val == base) {
            count++;
        } else {
            //数字变化的时候插入
            if (count == maxCount) {
                result.push(base);
            } else if (count > maxCount) {
                result.length = 0;
                result.push(base);
                maxCount = count;
            }

            count = 1;
            base = node.val;
        }

        node.right && dfs(node.right);
    }
    
    dfs(root);
    // console.log("--", base, count, maxCount)
    //数字变化的时候插入
    if (count == maxCount) {
        result.push(base);
    } else if (count > maxCount) {
        result.length = 0;
        result.push(base);
        maxCount = count;
    }

    return result;
};


function findModeMoris(root: TreeNode | null): number[] {
    if (!root) { return []; }
    let base: number = -1;
    let count: number = 0;
    let maxCount: number = -1;
    let result: number[] = [];
    function applyCount() {
        //数字变化的时候插入
        if (count == maxCount) {
            result.push(base);
        } else if (count > maxCount) {
            result.length = 0;
            result.push(base);
            maxCount = count;
        }
    }

    function updateVal(val:number) {
        // console.log('----', node.val, base, count)
        if (val == base) {
            count++;
        } else {
            applyCount();

            count = 1;
            base = val;
        }
    }

    while (root) {
        if (!root.left) {
            updateVal(root.val);
            root = root.right;
        } else {
            let preNode = root.left;
            while (preNode.right && preNode.right != root) { preNode = preNode.right; }
            
            if (preNode.right == root) {
                updateVal(root.val);
                root = root.right;
                preNode.right = null;
            } else {
                preNode.right = root;
                root = root.left;
            }
        }
    }

    // console.log("--", base, count, maxCount)
    applyCount();
    return result;
};

const cases: Case<number[], number[]>[] = [
    { input: [1, null, 2, 2], output: [2] },
    { input: [1, 1, 2, null, null, 2], output: [1, 2] },
];

testWithResult(cases, nums => {
    const root = createBTreeByArr(nums);
    return findModeMoris(root);
}, (a, b) => {
        if (a.length != b.length) { return false; }
        a.sort();
        b.sort();
        return a.every((v, i) => b[i] == v);
});