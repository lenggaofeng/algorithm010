/*
 * @lc app=leetcode.cn id=336 lang=typescript
 *
 * [336] 回文对
 */

export default null;
// @lc code=start


function palindromePairs(words: string[]): number[][] {
    const n = words.length;
    function checkIsPalindrome(i:number, j:number){
        let s = words[i] + words[j];
        let len = s.length;
        for(let i = 0, l = s.length >> 1; i < l ; i++){
            if(s[i] != s[len - i - 1]){
                return false;
            }
        }
        return true;
    }

    let results:number[][] = [];
    for(let i = 0; i < n ; i++){
        for(let j = 0; j < n; j++){
            if(i == j){
                continue;
            }
            if(checkIsPalindrome(i, j)){
                results.push([i, j]);
            }
        }
    }
    return results;
};

// @lc code=end


// console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]))
console.log(palindromePairs(["ab","ba","abc","cba"]))
