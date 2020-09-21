import { createBTreeByArr } from "./createBTree";

export default null;
/**
 * 思路， 中序遍历，得到顺序的结点， 然后出栈，累加值赋值。
 */
function convertBST(root: TreeNode | null): TreeNode | null {
    const stack:TreeNode[] = [];
    function dfs(root:TreeNode){
        if(!root){return;}
        if(root.left){
            dfs(root.left);
        }
        stack.push(root);
        if(root.right){
            dfs(root.right);
        }
    }
    dfs(root);

    let cnt = 0;
    while(stack.length){
        const node = stack.pop();
        cnt += node.val;
        node.val = cnt;
    }
    return root;
};

// 反向中序遍历
function convertBST2(root: TreeNode | null): TreeNode | null {
    let sum = 0;
    function dfs(root: TreeNode | null){
        if(!root){return;}
        dfs(root.right);
        sum += root.val;
        root.val = sum;
        dfs(root.left);
    }
    dfs(root);
    return root;
};

// 反向中序遍历, 迭代版本
function convertBSTIter(root: TreeNode | null): TreeNode | null {
    let sum = 0;

    const stack:TreeNode[] = new Array();
    let node = root;
    while(node || stack.length){
        while(node != null){
            stack.push(node);
            node = node.right;
        }

        node = stack.pop() as TreeNode;
        sum += node.val;
        node.val = sum;
        node = node.left;
    }

    return root;
};

/**
 *   morris 遍历, 遍历过程中，构建出链路关系， 然后再后面再恢复
    如果没有左结点，那么直接使用
    root = root.right
    如果有左结点， 那么找到左子树的最右节点 preNode， 
    判断它有没有右节点，如果有，preNode.right = null; root = root.right;
    否则 preNode.right = root; root = root.left;
 */
function convertBSTMorris(root: TreeNode | null): TreeNode | null {
    let sum = 0;
    let oRoot = root;
    while(root){
        if(!root.right){
            sum += root.val;
            root.val = sum;
            root = root.left;
            continue;
        }

        let preNode = root.right;
        while(preNode.left && preNode.left != root){
            preNode = preNode.left;
        }
        if(preNode.left == root){
            preNode.left = null;
            sum += root.val;
            root.val = sum;
            root = root.left;
            continue;
        }

        preNode.left = root;
        root = root.right;
    }

    return oRoot;
};

const root = createBTreeByArr([5,2,13]);
console.log(convertBSTMorris(root));