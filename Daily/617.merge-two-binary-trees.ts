import { createBTreeByArr, dumpBTree2Arr, TreeNode } from "./createBTree";

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if(!t1){return t2;}
    if(!t2){return t1;}
    const mergeNode = new TreeNode(t1.val + t2.val);
    mergeNode.left = mergeTrees(t1.left, t2.left);
    mergeNode.right = mergeTrees(t1.right, t2.right);
    return mergeNode;
};

const t1 = createBTreeByArr([1,3,2,5]);
const t2 = createBTreeByArr([2,1,3,null,4,null,7])
const t3 =  mergeTrees(t1, t2);
console.log(dumpBTree2Arr(t3));

