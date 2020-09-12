function combinationSum3(k: number, n: number): number[][] {
    const results: number[][] = [];
    function dfs(start: number, cache: number[], count: number) {
        if (cache.length == k && count == n) {
            results.push(cache.slice());
            return;
        }

        for (let i = start + 1; i <= 9; i++){
            if (i + count > n) {
                break;
            }

            cache.push(i);
            dfs(i, cache, count + i);
            cache.pop();
        }
    }
    dfs(0, [], 0);
    return results;
};

console.log(combinationSum3(3, 7));