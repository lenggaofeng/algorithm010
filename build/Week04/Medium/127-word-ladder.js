"use strict";
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * dp[i][j] 为 从 s1[0 ... i - 1] 转换到 s2[0 ... j - 1] 所用的步数。
 *
 * 如果  s1[i] == s2[j] 那么 dp[i + 1][j + 1] = dp[i][j]
 * //需要编辑
 * 如果 s1[i] != s2[j] 那么 dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1
 *
 */
exports.default = null;
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
    has(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            let next;
            if (node.nexts.has(c)) {
                next = node.nexts.get(c);
            }
            else {
                return false;
            }
            node = next;
        }
        return node.isEnd;
    }
}
function ladderLength(beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) == -1) {
        return 0;
    }
}
;
