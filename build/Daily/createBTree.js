"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dumpBTree2Arr = exports.createBTreeByArr = exports.TreeNode = void 0;
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
exports.TreeNode = TreeNode;
function createBTreeByArr(arr) {
    let n = arr.length;
    if (n <= 0) {
        return null;
    }
    const root = new TreeNode(arr[0]);
    let i = 1;
    const queue = [root];
    while (i < n) {
        const node = queue.shift();
        node.left = createNode(i++);
        node.right = createNode(i++);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return root;
    function createNode(i) {
        if (i >= arr.length || arr[i] == null) {
            return null;
        }
        return new TreeNode(arr[i]);
    }
}
exports.createBTreeByArr = createBTreeByArr;
function dumpBTree2Arr(root) {
    if (!root) {
        return [];
    }
    ;
    let result = [root.val];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node.left) {
            queue.push(node.left);
            result.push(node.left.val);
        }
        else {
            result.push(null);
        }
        if (node.right) {
            queue.push(node.right);
            result.push(node.right.val);
        }
        else {
            result.push(null);
        }
    }
    while (result.length) {
        if (result[result.length - 1] == null) {
            result.pop();
        }
        else {
            break;
        }
    }
    return result;
}
exports.dumpBTree2Arr = dumpBTree2Arr;
