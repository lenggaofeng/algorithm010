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
