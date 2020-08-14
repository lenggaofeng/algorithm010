/*
 * @lc app=leetcode.cn id=696 lang=typescript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
function countBinarySubstrings(s: string): number {
    const n = s.length;
    let counts:number[] = new Array();
    let pre:string = "";
    let countI = 0;
    for(let i = 0; i < n; i++){
        if(pre !== s[i] && pre){
            countI ++;
        }
        counts[countI] = (counts[countI] || 0) + 1;
        pre = s[i];
    }
    let preCount = counts[0];
    let result = 0;
    for(let i = 1, l = counts.length; i < l; i++){
        result += Math.min(preCount, counts[i]);
        preCount = counts[i];
    }
    return result;
};
// @lc code=end

