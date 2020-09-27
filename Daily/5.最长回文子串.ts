/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

import { Case, CaseArr, testWithResult } from "./Test";

// @lc code=start
function longestPalindrome(s: string): string {
    const arr = ["^#"].concat(s.split("").map(v=>v + "#"));
    arr.push("$")
    const news = arr.join("");

    let n = news.length;
    const dp = new Array(n).fill(1);
    let center = 0;
    let right = 0;
    let max = 0;
    let maxCenter = 0;
    for(let i = 1; i < n - 1; i++){
        let fi = i >= center ? 1 : Math.min(dp[2 * center - i], right - center + 1);
        while(news[i - fi] == news[i + fi]){fi ++;}
        dp[i] = fi;

        if(i + fi - 1 > right){
            right = i + fi - 1;
            center = i;
        }

        if(fi > max){
            max = fi - 1;
            maxCenter = i;
        }
    }
    let start = maxCenter - max;
    let end = maxCenter + max;
    let result = new Array<string>()
    for(let i = start; i < end; i++){
        if(i %2 == 0){
            result.push(news[i]);
        }
    }
    return result.join("");
};


// @lc code=end

/**
 * dp[i][j] = true 表示以 i,j 为回文串。
 * 
 * dp[i][j] = true 当 dp[i + 1][j - 1] && s[i] == s[j];
 * 否则 dp[i][j] = false;
 * 
 * 初始 dp[i][i] = 1;
 * dp[i][i + 1] = s[i] == s[i + 1] ? 1 : 0;
 * 
 */

//  class Solution {
//     public String longestPalindrome(String s) {
//         int n = s.length();
//         boolean[][] dp = new boolean[n][n];
//         String ans = "";
//         for (int l = 0; l < n; ++l) {
//             for (int i = 0; i + l < n; ++i) {
//                 int j = i + l;
//                 if (l == 0) {
//                     dp[i][j] = true;
//                 } else if (l == 1) {
//                     dp[i][j] = (s.charAt(i) == s.charAt(j));
//                 } else {
//                     dp[i][j] = (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]);
//                 }
//                 if (dp[i][j] && l + 1 > ans.length()) {
//                     ans = s.substring(i, i + l + 1);
//                 }
//             }
//         }
//         return ans;
//     }
// }

function longestPalindromeDp(s: string): string {
    const n = s.length ;
    const dp = new Array(n).fill(0).map(v=>new Array(n).fill(false));
    let left:number = -1;
    let right:number = -1;
    let maxLen:number = -1;
    for(let d = 0; d < n ; d++){
        for(let i = 0; i + d < n; i++){
            const j = i + d;
            if(d == 0){
                dp[i][j] = true;
            } else if( d == 1){
                dp[i][j] = s[i] == s[j];
            } else if(s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            }
            if(dp[i][j] && d > maxLen){
                left = i;
                right = j;
            }
        }
    }
    return s.substring(left, right + 1);
}

//中心向两边扩展
function expand(s:string, left:number, right:number){
    while(left >= 0 && right < s.length && s[left] == s[right]){
        left --;
        right ++;
    }
    return right - left - 1;
}

function longestPalindromeExpand(s: string): string {
    const n = s.length ;
    let max = 1;
    let center = 0;
    for(let i = 1; i < n; i++){
        const len = Math.max(expand(s, i, i), expand(s, i, i - 1));
        if(len > max){
            center = i;
            max = len;
        }
    }

    //基数
    const left = center - Math.floor(max / 2);
    return s.substring(left, left + max);
}

const cases:CaseArr<string, string> = [
    {input: "babad", output: "bab"},
    // {input: "cbbd", output: "bb"},
    // {input: "a", output: "a"},
];

function isPalindrome(s:string){
    const mid = Math.floor(s.length); 
    for(let i = 0; i < mid; i++){
        if(s[i] !== s[s.length - 1- i]){
            return false;
        }
    }
    return true;
}

testWithResult(cases, longestPalindromeExpand, (a, b)=>{
    return a.length == b.length && isPalindrome(b);
});

/**
 * 暴力
 * 动态规划
 * 马拉车
 *  使用新的字符串，形如  ^#a#b#b#a#$
 *  计算以当前字符串为中心的最长回文子串的中心 c，以及最大位置 r, 每个位置的最大长度记录在 dp 中。
 *  那么对于位置 i, 
 *  如果 i > r, 那么往左右扩展计算。 
 *  对于 i >= r, 它的对称位置为 c - (i - c) = 2c - i 那么最小长度为  Math.min(dp[2c - i], r - c + 1);
 * 
 */