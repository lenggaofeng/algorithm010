import { createBTreeByArr } from "./createBTree";

function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const queue: TreeNode[] = [root];
    let levelIndies:number[] = [0];
    let levelMax = 0;
    let curIndex = 0;
    while (queue.length > curIndex) {
        const node = queue[curIndex];
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }

        if (curIndex == levelMax) {
            levelIndies.push(levelMax + 1);
            levelMax = queue.length - 1;
        }
        curIndex++;
    }

    const results: number[][] = [];
    let max = queue.length;
    for (let i = levelIndies.length - 1; i >= 0; i--){
        const index = levelIndies[i];
        if (index == max) {
            max = index;
            continue;
        }
        const level:number[] = [];
        for (let j = index; j < max; j++){
            level.push(queue[j].val);
        }
        results.push(level);
        max = index;
    }
    return results;
};


function levelOrderBottom2(root: TreeNode | null): number[][] {
    if (!root) { return []; }
    let results: number[][] = [];
    function dfs(node: TreeNode, level: number) {
        if (!node) { return;}
        let list = results[level];
        if (!list) {
            list = results[level] = [];
        }
        list.push(node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return results.reverse();
}

const tree = createBTreeByArr([3, 9, 20, null, null, 15, 7]);

console.log(levelOrderBottom2(tree));