"use strict";
/**
 * 参考链接: https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
class BinaryTree {
    preOrder(root, func = TreeNode_1.default.print) {
        if (!root) {
            return;
        }
        func(root);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
    middleOrder(root, func = TreeNode_1.default.print) {
        if (!root) {
            return;
        }
        this.middleOrder(root.left);
        this.middleOrder(root.right);
        func(root);
    }
    postOrder(root, func = TreeNode_1.default.print) {
        if (!root) {
            return;
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        func(root);
    }
    dfs(root, func = TreeNode_1.default.print) {
        if (!root) {
            return;
        }
        const queue = new Array();
        queue.push(root);
        while (queue.length) {
            let cur = queue.shift();
            func(cur);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
    }
    levelOrder(root, func = TreeNode_1.default.print) {
        if (!root) {
            return;
        }
        const queue = new Array();
        queue.push(root);
        let levelEnd = 1;
        let curIndex = 0;
        let curSize = 1;
        while (queue.length) {
            let cur = queue.shift();
            func(cur);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
    }
}
exports.default = BinaryTree;
