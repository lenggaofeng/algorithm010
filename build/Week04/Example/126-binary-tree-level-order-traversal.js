"use strict";
/**
 * Definition for a binary tree node.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
exports.default = null;
function levelOrder(root) {
    if (root == null) {
        return [];
    }
    const levels = [];
    const queue = new Array();
    queue.push(root);
    let curI = 1;
    let queueI = 1;
    let levelMax = 1;
    let level = [];
    levels.push(level);
    while (queue.length) {
        const node = queue.pop();
        level.push(node.val);
        curI++;
        if (node.left) {
            queue.push(node.left);
            queueI++;
        }
        if (node.right) {
            queue.push(node.right);
            queueI++;
        }
        if (curI > levelMax && queue.length) {
            level = [];
            levels.push(level);
            levelMax = queueI;
        }
    }
    return levels;
}
;
