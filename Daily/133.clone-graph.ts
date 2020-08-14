/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

export default null;
class Node{
    constructor(public val?:number, public neighbors?:Node[]){
    }
}

function cloneGraph(node:Node):Node{
    const visited = new Map<Node, Node>();

    function dfs(root:Node):Node{
        let node = visited.get(root);
        if(!node){
            node = new Node(root.val);
            visited.set(root, node);
            node.neighbors = root.neighbors.map(v=>dfs(v));;
        }
        return node;
    }
    return dfs(node);
};