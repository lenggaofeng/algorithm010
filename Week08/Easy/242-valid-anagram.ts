/**
 * https://leetcode-cn.com/problems/valid-anagram/
 */

function isAnagram1(s: string, t: string): boolean {
    if(s.length != t.length){
        return false;
    }

    let a = s.split("").sort();
    let b = t.split("").sort();
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            return false;
        }
    }
    return true;
}


function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length){
        return false;
    }

    let cntMap = new Map<string, number>();
    let n = s.length;
    for(let i = 0; i < n; i++){
        let cnt = cntMap.get(s[i]) || 0;
        cntMap.set(s[i], cnt + 1);
    }

    for(let i = 0; i < n; i++){
        let c = t[i];
        let cnt = cntMap.get(c);
        if(!cnt){ return false;}
        cntMap.set(c, cnt-1);
    }

    return true;
};

console.log(isAnagram1("anagram",
"nagaram"))