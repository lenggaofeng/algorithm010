/*
 * @lc app=leetcode.cn id=402 lang=typescript
 *
 * [402] 移掉K位数字
 */

import { Case, testWithResult } from "./Test";

// @lc code=start
function removeKdigits(num: string, k: number): string {
    let stack = new Array<string>();
    const remain = num.length - k
    for(let i = 0; i < num.length; i++){
        while(k && stack.length && num[i] < stack[stack.length - 1]){
            stack.pop();
            k --;
        }
        stack.push(num[i]);
    }

    stack = stack.slice(0, remain);
    return stack.join("").replace(/^0*/, "");
};
// @lc code=end

const cases:Case<[string, number], string>[] = [
    // {input: ["1432219", 3], output: "1219"},
    // {input: ["10200", 1], output: "200"},
    // {input: ["1111111", 3], output: "1111"},
    {input: ["1234567890", 9], output: "0"},
]

testWithResult(cases, ([num, k])=>removeKdigits(num, k));
