"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBTree_1 = require("./createBTree");
exports.default = null;
function inorderTraversalDfs(root) {
    let result = [];
    function dfs(node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
}
;
function inorderTraversalIt(root) {
    if (!root) {
        return [];
    }
    let result = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
}
;
function inorderTraversalMoris(root) {
    if (!root) {
        return [];
    }
    let result = [];
    while (root) {
        if (!root.left) {
            result.push(root.val);
            root = root.right;
            continue;
        }
        let preNode = root.left;
        while (preNode) {
            if (!preNode.right || preNode.right == root) {
                break;
            }
            else {
                preNode = preNode.right;
            }
        }
        if (preNode.right) {
            preNode.right = null;
            result.push(root.val);
            root = root.right;
        }
        else {
            preNode.right = root;
            root = root.left;
        }
    }
    return result;
}
;
function inorderTraversalStack2(root) {
    if (!root) {
        return [];
    }
    let result = [];
    const stack = [root];
    while (stack.length) {
        const nodeOrVal = stack.pop();
        if (nodeOrVal == null) {
            continue;
        }
        if (nodeOrVal instanceof createBTree_1.TreeNode) {
            stack.push(nodeOrVal.right, nodeOrVal.val, nodeOrVal.left);
        }
        else {
            result.push(nodeOrVal);
        }
    }
    return result;
}
;
const tree = createBTree_1.createBTreeByArr([1, null, 2, 3]);
console.log(tree);
console.log(inorderTraversalStack2(tree));
