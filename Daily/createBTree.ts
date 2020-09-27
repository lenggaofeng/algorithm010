export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export function createBTreeByArr(arr: number[]): TreeNode | null {
    let n = arr.length;
    if(n <= 0){
        return null;
    }

    const root = new TreeNode(arr[0]);
    let i = 1;
    const queue:TreeNode[] = [root];
    while(i < n){
        const node = queue.shift();
        node.left = createNode(i ++);
        node.right = createNode(i ++);
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }

    return root;

    function createNode(i: number): TreeNode | null {
        if (i >= arr.length || arr[i] == null) { return null; }
        return new TreeNode(arr[i]);
    }
}

export function findNodeInTree(root: TreeNode | null, val:number): TreeNode | null{
    if(!root){return null;}
    if(root.val == val){return root;}
    return findNodeInTree(root.left, val) || findNodeInTree(root.right, val);
}

export function dumpBTree2Arr(root: TreeNode | null): (number|null)[] {
    if(!root){return []};
    let result:(number|null)[] = [root.val];
    const queue = [root];
    while(queue.length){
        const node = queue.shift();
        if(node.left){
            queue.push(node.left);
            result.push(node.left.val);
        } else {
            result.push(null);
        }
        if(node.right){
            queue.push(node.right);
            result.push(node.right.val);
        } else {
            result.push(null);
        }
    }

    while(result.length){
        if(result[result.length - 1] == null){
            result.pop();
        } else {
            break;
        }
    }
    return result;
}