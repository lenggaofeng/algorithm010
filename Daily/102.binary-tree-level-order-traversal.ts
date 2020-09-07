export default null;

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    let queue: TreeNode[] = [root];
    const results: number[][] = [];
    while (queue.length) {
        results.push(queue.map(v=>v.val));
        const nextQueue: TreeNode[] = [];
        queue.forEach(node => {
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        })
        queue = nextQueue;
    }

    return results;
};

function levelOrder2(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    let queue: TreeNode[] = [root];
    const results: number[][] = [];
    while (queue.length) {
        results.push(queue.map(v => v.val));
        for (let i = 0, size = queue.length; i < size; i++){
            const node = queue.shift();            
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return results;
};

function levelOrder3(root: TreeNode | null): number[][] {
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
    levelIndies.push(queue.length);
    for (let i = 0; i < levelIndies.length - 1; i++){
        const max = levelIndies[i + 1];
        const index = levelIndies[i];
        if (index == max) {
            continue;
        }
        const level:number[] = [];
        for (let j = index; j < max; j++){
            level.push(queue[j].val);
        }
        results.push(level);
    }
    return results;
};