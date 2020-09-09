function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b);
    function helper(first:number, cnt: number, cache: number[]) {
        if (cnt == target) {
            result.push(cache.slice())
            return ;
        }
        for (let i = first, l = candidates.length; i < l; i++){
            const num = candidates[i];
            if (cnt + num > target) { break;}
            cache.push(num);
            helper(i, cnt + num, cache);
            cache.pop();
        }
    }

    helper(0, 0, []);
    return result;
};

console.log(combinationSum([2, 3, 5], 8));
// console.log(combinationSum([2, 3, 6, 7], 7));