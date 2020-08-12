"use strict";
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Node} node
 * @return {Node}
 */
exports.default = null;
class Node {
    constructor(val, neighbors) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
function cloneGraph(node) {
    const visited = new Map();
    function dfs(root) {
        let node = visited.get(root);
        if (!node) {
            node = new Node(root.val);
            visited.set(root, node);
            node.neighbors = root.neighbors.map(v => dfs(v));
            ;
        }
        return node;
    }
    return dfs(node);
}
;
