"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBTreeByArr = exports.TreeNode = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
exports.TreeNode = TreeNode;
function createBTreeByArr(arr) {
    function createNode(i) {
        if (i >= arr.length || arr[i] == null) {
            return null;
        }
        const node = new TreeNode(arr[i]);
        node.left = createNode(i * 2 + 1);
        node.right = createNode(i * 2 + 2);
        return node;
    }
    return createNode(0);
}
exports.createBTreeByArr = createBTreeByArr;
