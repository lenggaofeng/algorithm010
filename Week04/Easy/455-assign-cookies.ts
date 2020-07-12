/**
 * https://leetcode-cn.com/problems/assign-cookies/
 */

 // 结合双指针 92ms 击败98%
var findContentChildren = function(g:number[], s:number[]) {
    let gIndex=0,sIndex=0,res=0;
    while(gIndex<g.length&&sIndex<s.length){
        if(s[sIndex]>=g[gIndex]){
            res++;
            gIndex++;
        }
        sIndex++;
    }
    return res
};