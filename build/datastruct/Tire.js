"use strict";
/**
 * 字典树， 常用于解决字符串公共前缀问题，
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Tire {
    constructor(val = "") {
        this.val = val;
        this.nexts = new Map();
        this.isEnd = false;
    }
    add(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            let next;
            if (node.nexts.has(c)) {
                next = node.nexts.get(c);
            }
            else {
                next = new Tire(c);
                node.nexts.set(c, next);
            }
            node = next;
        }
        node.isEnd = true;
    }
}
exports.default = Tire;
