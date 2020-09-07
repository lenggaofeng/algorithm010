class TreeNode {
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
    function createNode(i: number): TreeNode | null {
        if (i >= arr.length || arr[i] == null) { return null; }
        const node = new TreeNode(arr[i]);
        node.left = createNode(i * 2 + 1);
        node.right = createNode(i * 2 + 2);
        return node;
    }
    return createNode(0);
}