/**
 * https://leetcode-cn.com/problems/decode-ways/
 */

 /**
 * 
 * 思考重复子问题，
 * 令 f[s] 为解的总数。
 * 解总数的增长源于 1-6 与前方数字组合的二义性。
 * 
 * s[i] =='0', f[i] = f[i-2]
 * s[i-1] =='1', f[i] = f[i - 1] + f[i - 2]
 * s[i-1] == '2', f[i] = s[i]=='1-6' ? f[i-1] + f[i-2]
 * 
 */

function numDecodings(s: string): number {
    if(s[0] == '0'){return 0;}

    let len = s.length;
    let pre = 1; let cur = 1;
    for(let i = 1; i < len; i++ ){
        let tmp = cur;
        let c = s[i];
        let pc = s[i - 1];
        if(c == '0'){
            if(pc == '1' || pc == '2'){
                tmp = pre;
            } else {
                return 0;
            }
        } else if (pc == '1'){
            tmp = pre + cur;
        } else if (pc == '2'){
            if(c >= '1' && c <= '6'){
                tmp = pre + cur;
            }
        }
        pre = cur;
        cur = tmp;
        console.log("---", i, pre,cur);
    }
    return cur;
};
console.log(numDecodings("24726"));