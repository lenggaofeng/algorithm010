export default null;
function permute(nums: number[]): number[][] {
    nums.sort((a,b)=>a-b);
    const results:number[][] = [];
    const n = nums.length;
    function swap(i:number, j:number){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    function helper(level:number){
        if(level == n){
            results.push(nums.slice());
            return;
        }

        for(let i = level; i < n; i++){
            swap(i, level);
            helper(level + 1);
            swap(i, level);
        }
    }
    helper(0);
    return results;
};

console.log(permute([1,2,3,4]));