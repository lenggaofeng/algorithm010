function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const results: number[][] = [];
    function dfs(start:number, cache:number[], count:number) {
        if (count == target) {
            results.push(cache.slice());
            return;
        }

        for (let i = start + 1, l = candidates.length; i < l; i++){
            const num = candidates[i];
            if (num + count > target) {
                break;
            }
            cache.push(num);
            dfs(i, cache, count + num);
            cache.pop();

            while (i < l - 1 && candidates[i + 1] == candidates[i]) {
                i++;
            }
        }
    }
    dfs(-1, [], 0);
    return results;
};


// const arr = [10, 1, 2, 7, 6, 1, 5];
const arr = [1, 1, 2, 2];

console.log(combinationSum2(arr, 3))