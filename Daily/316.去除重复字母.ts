/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 */

import { Case, testWithResult } from "./Test";

/**
 * 贪心。
 * 每次递归， 找到一个可以出现在最前面的字符串。
 * 如何找到出现在最前面的字符串呢。
 * 从前往后找字典序最小的。直到遇到一个字符后面没再出现过， 退出循环
 */

function removeDuplicateLettersRecur(s: string): string {
    function findFirstPick(s: string):string {
        if (s.length == 0) { return s; }
        const charLastIndex = new Map<string, number>();
        for (let i = 0; i < s.length; i++){
            charLastIndex.set(s[i], i);
        }
       
        let pos = 0;
        let pick = s[0];
        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c < pick) {
                pos = i;
                pick = c;
            }

            const lastIndex = charLastIndex.get(c);
            if (i == lastIndex) {
                break;
            }
        }

        const reg = new RegExp(pick, "g");
        const left = s.substring(pos + 1).replace(reg, "");
        return pick + findFirstPick(left);
    }
    return findFirstPick(s);
}

// @lc code=start
/**
 * 贪心-使用栈。
 * 用栈来维护一个字典序的字符串
 * 如果当前字符没有在栈里, 则将它入栈。 
 * 入栈的时候， 如果当前栈顶元素字典序大于当前字符，并且在后面出现过, 则将当期栈顶元素出栈
 */
function removeDuplicateLetters(s: string): string {
    const charLastIndex = new Map<string, number>();
    for (let i = 0; i < s.length; i++){
        charLastIndex.set(s[i], i);
    }

    const stack = new Array<string>();
    const seened = new Set<string>();
    for (let i = 0; i < s.length; i++){
        const c = s[i];
        if (seened.has(c)) {
            continue;
        }

        while (stack.length) {
            const top = stack[stack.length - 1];
            if (top > c) {
                const lastIndex = charLastIndex.get(top) as number;
                if (lastIndex > i) {
                    stack.pop();
                    seened.delete(top);
                    continue;
                }
            }
            break;
        }
        stack.push(c);
        seened.add(c);
    }

    return stack.join('');
};
// @lc code=end

const cases: Case<string, string>[] = [
    {input: "bcabc", output: "abc"},
    { input: "cbacdcbc", output: "acdb" },
    { input: "cbbbcaa", output: "bca" },
]

testWithResult(cases, removeDuplicateLettersRecur);


