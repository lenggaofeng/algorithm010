export default null;
function permuteUnique(nums: number[]): number[][] {
    nums.sort((a,b)=>a-b);
    const results:number[][] = [];
    const n = nums.length;
    const used:boolean[] = new Array(n).fill(false);
    function helper(level:number, used:boolean[], cache:number[]){
        if(level == n){
            results.push(cache.map(i=>nums[i]));
            return;
        }

        for(let i = 0; i < n; i++){
            if(used[i]){continue;}
            cache.push(i);
            used[i] = true;
            helper(level + 1, used, cache);
            cache.pop();
            used[i] = false;
            while(i < n - 1 && nums[i + 1] == nums[i]){
                i ++;
            }
        }
    }
    helper(0, used, []);
    return results;
};

console.log(permuteUnique([1,2,3,4]));