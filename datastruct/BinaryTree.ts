/**
 * 参考链接: https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9
 */

import TreeNode from "./TreeNode";

export default class BinaryTree{
    public preOrder(root:TreeNode, func:(node:TreeNode)=>void = TreeNode.print){
        if(!root){return;}
        func(root);
        this.preOrder(root.left);        
        this.preOrder(root.right)
    }

    public middleOrder(root:TreeNode, func:(node:TreeNode)=>void = TreeNode.print){
        if(!root){return;}
        this.middleOrder(root.left);        
        this.middleOrder(root.right)
        func(root);
    }
    
    public postOrder(root:TreeNode, func:(node:TreeNode)=>void = TreeNode.print){
        if(!root){return;}
        this.postOrder(root.left);        
        this.postOrder(root.right)
        func(root);
    }

    public dfs(root:TreeNode, func:(node:TreeNode)=>void = TreeNode.print){
        if(!root){return;}
        const queue = new Array<TreeNode>();
        queue.push(root);
        while(queue.length){
            let cur = queue.shift();
            func(cur);
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }
        }
    }

    public levelOrder(root:TreeNode, func:(node:TreeNode)=>void = TreeNode.print){
        if(!root){return;}
        const queue = new Array<TreeNode>();
        queue.push(root);
        let levelEnd = 1;
        let curIndex = 0;
        let curSize = 1;
        while(queue.length){
            let cur = queue.shift();
            func(cur);
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }
        }
    }
}
