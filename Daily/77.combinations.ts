export default null;
function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    function helper(base:number, cache: number[]) {
        if (cache.length == k) {
            result.push(cache.slice());
            return;
        }

        for (let i = base; i <= n; i++){
            cache.push(i);
            helper(i + 1, cache);
            cache.pop();
        }
    }

    helper(1, []);
    return result;
};

console.log(combine(4, 2));