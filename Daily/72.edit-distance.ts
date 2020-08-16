//dfs 动态规划 + memory
function minDistance(word1: string, word2: string): number {
    let mem = new Map<number, number>();
    let n = Math.max(word1.length, word2.length) + 1;
    function _edit(s1: string, s2: string, i:number, j:number):number{
        let index = (i) * n + j + 1;
        if(mem.has(index)){
            return mem.get(index) as number;
        }
        let cnt = edit(s1, s2, i, j);
        mem.set(index, cnt);
        return cnt;
    }
    function edit(s1: string, s2: string, i:number, j:number):number{
        if(i < 0){return j + 1;}
        if(j < 0){ return i + 1; }

        if(s1[i] == s2[j]){
            return _edit(s1, s2, i - 1, j - 1);
        }

        return Math.min(
            _edit(s1, s2, i, j - 1),
            _edit(s1, s2, i - 1, j),
            _edit(s1, s2, i - 1, j - 1),
        ) + 1;
    }

    return _edit(word1, word2, word1.length - 1, word2.length - 1);
};

//dfs 递推，
function minDistance2(word1: string, word2: string): number {
    let n = word1.length;
    let m = word2.length;
    let dp = new Array(n + 1).fill(0).map(v=>new Array(m + 1).fill(1));
    for(let i = 0; i < n + 1; i++){
        for(let j = 0; j < m + 1; j++){
            if(i == 0){
                dp[i][j] = j;
            } else if (j == 0){
                dp[i][j] = i;
            } else if (word1[i - 1] == word2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    
    return dp[n][m];
};

//dfs 递推空间优化
function minDistance3(word1: string, word2: string): number {
    let n = word1.length;
    let m = word2.length;
    if(m * n == 0){return m + n;}
    let dp = new Array(m + 1).fill(0);
    for(let i = 0; i < m + 1; i++){
        dp[i] = i;
    }

    for(let i = 1; i < n + 1; i++){
        let pre = dp[0];
        dp[0] = i;
        for(let j = 1; j < m + 1; j++){
            let tmp = dp[j];
            if (word1[i - 1] == word2[j - 1]){
                dp[j] = pre;
            } else {
                dp[j] = Math.min(dp[j], dp[j - 1], pre) + 1;
            }
            pre = tmp;
        }
    }
    
    return dp[m];
};

console.log(minDistance3("teature",
"unteatures"));