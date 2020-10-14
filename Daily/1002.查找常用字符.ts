/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找常用字符
 */

import { CaseArr, CompBase, getCompArr, testWithResult } from "./Test";

 export default null;
// @lc code=start
const codeA = 'a'.charCodeAt(0);
function commonChars(A: string[]): string[] {
    if(A.length == 0){return [];}
    let commonChars = new Array(26).fill(0);
    for(let i = 0; i < A[0].length; i++){
        const c = A[0][i].charCodeAt(0) - codeA;
        commonChars[c] ++;
    }

    let tempCommon = new Array(26);
    for(let i = 1; i < A.length; i++){
        tempCommon.fill(0);
        const s = A[i];
        for(let i = 0; i < s.length; i++){
            const c = s[i].charCodeAt(0) - codeA;
            if(commonChars[c] > 0){
                commonChars[c] --;
                tempCommon[c] ++;
            }
        }

        let temp = commonChars;
        commonChars = tempCommon;
        tempCommon = temp;
    }

    let result:string[] = [];
    commonChars.forEach((cnt, i)=>{
        const c = String.fromCharCode(codeA + i);
        for(let i = 0; i < cnt;i++){
            result.push(c);
        }
    });

    return result;
};
// @lc code=end

const cases:CaseArr<string[], string[]> = [
    {input: ["bella","label","roller"], output:["e","l","l"]},
    {input: ["cool","lock","cook"], output:["c","o"]},
]

testWithResult(cases, commonChars, getCompArr(CompBase))
