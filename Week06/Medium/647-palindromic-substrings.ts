/**
 * https://leetcode-cn.com/problems/palindromic-substrings/
 */

// 从每个可能的中心枚举计数
function countSubstrings(s: string): number {
    let n = s.length;
    function countWithCenter(s:string, left:number, right:number){
        let c = 0;
        while(left >= 0 && right < n && s[left] == s[right]){
            c ++;
            left --;
            right ++;
        }

        return c;
    }

    let c = 0;
    for(let i = 0; i < n ; i++){
        c += countWithCenter(s, i, i);
        c += countWithCenter(s, i - 1, i);
    }
    return c;
};

// dp[i][j] 表示 s[i..j] 是否是回文子串
// dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j]
// i == j , dp[i][j] = true
// i == j - 1 && s[i] == s[j], dp[i][j] = true;

function countSubstringsDp(s: string): number {
    let n = s.length;
    let count = 0;
    let dp = new Array(n).fill(false);
    for(let j = 0; j < n ; j++){
        for(let i = 0; i <= j; i++){
            if(s[i] == s[j] && ( j - i <= 1 || dp[i + 1])){
                dp[i] = true;
                count ++;
            } else {
                dp[i] = false;
            }
        }
    }
    return count;
}

function countSubstringsManacher(s: string): number {
    let n = s.length;
    let tmp = new Array(n + 2);
    // 两侧填充 !$ 做哨兵， 不用边界判断
    // 每个字符中间填充 #, 可以不用考虑回文串长度为偶数的情况
    tmp[0] = "$#";
    for(let i = 0; i < n; i++){
        tmp[i + 1] = s[i] + "#";
    }
    tmp[n + 1] = "!";
    s = tmp.join("");
    n = s.length - 1;

    const f = new Array(n).fill(0);
    let imax = 0, rmax = 0;
    let count = 0;
    for(let i = 1; i < n; i++){
        // i < rmax 时， 表示 i 还在最大回文串内, 找到它的对称位置 j = i - imax;
        // 则如果 j 的最大回文串在最大回文串边界内, i 对称，也在边界内。
        // 如果 j 的最大回文串在边界外，由于对称性，则 i 最少也能到边界。
        // 因为边界外不再具有对称性， 所以 fi 只能推断到边界，需要再次判断才能继续扩大。
        let fi = i < rmax ? Math.min(f[2 * imax - i], rmax - i + 1) : 1;
        while(s[i + fi] == s[i - fi]){ fi ++;}
        f[i] = fi;

        const right = i + fi - 1;
        if(right > rmax){
            imax = i;
            rmax = right;
        }

        // 因为最大长度包含了两边填充进来的 # 字符， 所以实际字符串长度 = Math.ceil((fi - 1) / 2)
        count += Math.ceil((fi - 1) / 2);
    }

    return count;
}

console.log(countSubstringsManacher("abc"));