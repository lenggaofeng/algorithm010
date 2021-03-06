import { createBTreeByArr, findNodeInTree } from "./createBTree";
import { CaseArr, testWithResult } from "./Test";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null):TreeNode | null {
    if(!root || !p || !q){return null;}

    if(root.val == p.val){return p;}
    if(root.val == q.val){return q;}

    if(root.val > p.val){
        if(root.val < q.val){
            return root;
        } else {
            return lowestCommonAncestor(root.left, p, q);
        }
    } else {
        if(root.val > q.val){
            return root;
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }
};

const root = createBTreeByArr([6,2,8,0,4,7,9,null,null,3,5]);
const cases:CaseArr<[number, number], number> = [
    // {input: [2, 8], output: 6},
    // {input: [2, 4], output: 2},
    // {input: [4, 2], output: 2},
    // {input: [4, 0], output: 2},
    {input: [7, 9], output: 8},
]

testWithResult(cases, ([num1, num2])=>{
    const node = lowestCommonAncestor(root, 
        findNodeInTree(root, num1), 
        findNodeInTree(root, num2));
    return node ? node.val : null; 
});