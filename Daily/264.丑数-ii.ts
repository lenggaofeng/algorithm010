/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */


// @lc code=start
 function preCal(cnt:number){
    let dp2 = 0;
    let dp3 = 0; 
    let dp5 = 0;
    let nums = new Array(cnt);
    let set = new Set<number>();
    nums[0] = 1;
    set.add(1);
    while(set.size < cnt){
        let a = nums[dp2] * 2;
        let b = nums[dp3] * 3;
        let c = nums[dp5] * 5;
        let min = Math.min(a, b, c);
        if(min == a){
            dp2 ++;
        } else if(min == b){
            dp3 ++;
        } else {
            dp5 ++;
        }
        if(!set.has(min)){
            nums[set.size] = min;
            set.add(min);
        }
    }
    return nums;
 }

let nums:number[] = preCal(1690);
function nthUglyNumber(n: number): number {
    return nums[n - 1];
};
// @lc code=end

