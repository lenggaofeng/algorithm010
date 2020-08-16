/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

/**
 * 
 * dp[i][j] 为 从 s1[0 ... i - 1] 转换到 s2[0 ... j - 1] 所用的步数。
 * 
 * 如果  s1[i] == s2[j] 那么 dp[i + 1][j + 1] = dp[i][j]
 * //需要编辑
 * 如果 s1[i] != s2[j] 那么 dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1
 * 
 */

export default null;

class Tire {
    public nexts: Map<string, Tire> = new Map();
    public isEnd: boolean = false;
    constructor(public val: string = "") { }

    public add(word: string) {
        let node: Tire = this;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            let next: Tire;
            if (node.nexts.has(c)) {
                next = node.nexts.get(c);
            } else {
                next = new Tire(c);
                node.nexts.set(c, next);
            }
            node = next;
        }
        node.isEnd = true;
    }

    public has(word:string){
        let node: Tire = this;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            let next: Tire;
            if (node.nexts.has(c)) {
                next = node.nexts.get(c);
            } else {
                return false
            }
            node = next;
        }
        return node.isEnd;
    }
}

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (wordList.indexOf(endWord) == -1) { return 0; }




};