"use strict";
function averageOfLevels(root) {
    const queue = [root];
    const results = [];
    while (queue.length) {
        const size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        results.push(sum / size);
    }
    return results;
}
;
