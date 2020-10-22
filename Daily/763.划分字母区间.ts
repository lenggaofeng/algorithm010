/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 */

// @lc code=start
function partitionLabels(S: string): number[] {
    if(S.length <= 0){return [];}
    const charIndex = new Map<string, number>();
    for(let i = 0; i < S.length; i++){
        charIndex.set(S[i], i);
    }

    let parts:number[] = [];
    let next = -1;
    let startI = 0;
    for(let i = 0; i < S.length; i++){
        if(i > next){
            next = charIndex.get(S[i]);
        }

        if(i == next){
            parts.push(i - startI + 1);
            startI = i + 1;
        } else if(i < next){
            next = Math.max(next, charIndex.get(S[i]));
        }
    }
    return parts;
};
// @lc code=end

console.log(partitionLabels("ababcbacadefegdehijhklij"));

