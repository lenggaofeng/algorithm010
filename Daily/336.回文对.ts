/*
 * @lc app=leetcode.cn id=336 lang=typescript
 *
 * [336] 回文对
 */

export default null;
// @lc code=start


class Tire {
    public nexts:Map<string, Tire> = new Map();
    public isEnd:boolean = false;
    constructor(public val:string = ""){}

    public add(word:string){
        let node:Tire = this;
        for(let i = 0; i < word.length; i++){
            const c = word[i];
            let next:Tire;
            if(node.nexts.has(c)){
                next = node.nexts.get(c) as Tire;
            } else {
                next = new Tire(c);
                node.nexts.set(c, next);
            }
            node = next;
        }
        node.isEnd = true;
    }
} 

function palindromePairs(words: string[]): number[][] {
    const n = words.length;
    const tires:Tire[] = new Array(n);
    for(let i = 0; i < n; i++){
        const tire = tires[i] = new Tire();
        tire.add(words[i]);
    }

    function checkIsPalindrome(i:number, j:number){
        if(words[i].length > words[j].length){
            if(words[j].length){
                return false;
            }
            let tmp = i;
            i = j;
            j = tmp;
        }

        let s2 = words[j];
        let node = tires[i];
        const s1Len = words[i].length;
        for(let k = 0; k < s1Len; k++){
            const c = s2[s2.length - 1 - k];
            if(!node.nexts.has(c)){
                return false;
            }
            node = node.nexts.get(c) as Tire;
        }

        if(s1Len < s2.length){
            const left = s2.length - s1Len;
            for(let i = 0; i < left; i++){
                if(s2[i] !== s2[left - i - 1]){
                    return false;
                }
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
console.log(palindromePairs(["a","abc","aba",""]))
