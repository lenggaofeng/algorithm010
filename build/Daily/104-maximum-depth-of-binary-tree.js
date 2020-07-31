"use strict";
/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
function maxDepth(root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
;
