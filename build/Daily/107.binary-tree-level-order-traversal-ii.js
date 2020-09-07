"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBTree_1 = require("./createBTree");
function levelOrderBottom(root) {
    if (!root) {
        return [];
    }
    const queue = [root];
    let levelIndies = [0];
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
    const results = [];
    let max = queue.length;
    for (let i = levelIndies.length - 1; i >= 0; i--) {
        const index = levelIndies[i];
        if (index == max) {
            max = index;
            continue;
        }
        const level = [];
        for (let j = index; j < max; j++) {
            level.push(queue[j].val);
        }
        results.push(level);
        max = index;
    }
    return results;
}
;
function levelOrderBottom2(root) {
    if (!root) {
        return [];
    }
    let results = [];
    function dfs(node, level) {
        if (!node) {
            return;
        }
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
const tree = createBTree_1.createBTreeByArr([3, 9, 20, null, null, 15, 7]);
console.log(levelOrderBottom2(tree));
