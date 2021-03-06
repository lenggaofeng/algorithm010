"use strict";
/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
// @lc code=start
const codeA = "a".charCodeAt(0);
function groupAnagrams(strs) {
    const map = new Map();
    let count = new Array(26);
    for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        count.fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(0) - codeA]++;
        }
        const key = count.join("#");
        let list = map.get(key);
        if (!list) {
            list = [];
            map.set(key, list);
        }
        list.push(strs[i]);
    }
    return [...map.values()];
}
;
// @lc code=end
