import { TreeNode, createBTreeByArr } from "./createBTree";

export default null;
function inorderTraversalDfs(root: TreeNode | null): number[] {
    let result:number[] = [];
    function dfs(node:TreeNode | null){
        if(!node){return;}
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
};

function inorderTraversalIt(root: TreeNode | null): number[] {
    if(!root){return [];}
    let result:number[] = [];
    const stack:TreeNode[] = [];
    while(root || stack.length){
        while(root){
            stack.push(root);
            root = root.left;
        }

        root = stack.pop() as TreeNode;
        result.push(root.val);
        root = root.right;
    }
    return result;
};

function inorderTraversalMoris(root: TreeNode | null): number[] {
    if(!root){return [];}
    let result:number[] = [];
    while(root){
        if(!root.left){
            result.push(root.val);
            root = root.right;
            continue;
        }

        let preNode:TreeNode = root.left;
        while(preNode){
            if(!preNode.right || preNode.right == root){
                break;
            } else {
                preNode = preNode.right;
            }
        }

        if(preNode.right){
            preNode.right = null;
            result.push(root.val);
            root = root.right;
        } else {
            preNode.right = root;
            root = root.left;
        }
    }

    return result;
};


function inorderTraversalStack2(root: TreeNode | null): number[] {
    if(!root){return [];}
    let result:number[] = [];
    const stack:(TreeNode| null |number)[] = [root];
    while(stack.length){
        const nodeOrVal = stack.pop();
        if(nodeOrVal == null){continue;}
        if(nodeOrVal instanceof TreeNode){
            stack.push(nodeOrVal.right, nodeOrVal.val, nodeOrVal.left);
        } else{
            result.push(nodeOrVal);
        }
    }

    return result;
};


const tree = createBTreeByArr([1,null,2,3]);
console.log(tree)
console.log(inorderTraversalStack2(tree));