"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBTree_1 = require("./createBTree");
function mergeTrees(t1, t2) {
    if (!t1) {
        return t2;
    }
    if (!t2) {
        return t1;
    }
    const mergeNode = new createBTree_1.TreeNode(t1.val + t2.val);
    mergeNode.left = mergeTrees(t1.left, t2.left);
    mergeNode.right = mergeTrees(t1.right, t2.right);
    return mergeNode;
}
;
const t1 = createBTree_1.createBTreeByArr([1, 3, 2, 5]);
const t2 = createBTree_1.createBTreeByArr([2, 1, 3, null, 4, null, 7]);
const t3 = mergeTrees(t1, t2);
console.log(createBTree_1.dumpBTree2Arr(t3));
