"use strict";
/**
 * 字典树， 常用于解决字符串公共前缀问题，
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
class Trie {
    constructor() {
        this.next = new Map();
        this.isEnd = false;
    }
    insert(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            let next = node.next.get(c);
            if (!next) {
                next = new Trie();
                node.next.set(c, next);
            }
            node = next;
        }
        node.isEnd = true;
    }
    search(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            let next = node.next.get(c);
            if (!next) {
                return false;
            }
            node = next;
        }
        return node.isEnd;
    }
    startsWith(prefix) {
        let node = this;
        for (let i = 0; i < prefix.length; i++) {
            const c = prefix[i];
            let next = node.next.get(c);
            if (!next) {
                return false;
            }
            node = next;
        }
        return true;
    }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */ 
