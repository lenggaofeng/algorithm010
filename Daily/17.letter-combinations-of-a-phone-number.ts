//回溯的算法
const maps:{[index: string]: string} = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}
function letterCombinations(digits: string): string[] {
    const results: string[] = [];
    const n = digits.length;
    const tmp: Array<string> = new Array(n);
    function dfs(index: number, tmp: Array<string>) {
        if (index == n) {
            results.push(tmp.join(""));
            return;
        }

        const k = digits[index];
        const chars = maps[k];
        for (let i = 0, l = chars.length; i < l; i++){
            tmp[index] = chars[i];
            dfs(index + 1, tmp);
        }
    }
    dfs(0, tmp);
    return results;
};

console.log(letterCombinations("23"));