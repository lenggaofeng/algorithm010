/*
 * @lc app=leetcode.cn id=1365 lang=typescript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
function smallerNumbersThanCurrent(nums: number[]): number[] {
    const n = nums.length;
    const data:number[][] = new Array(n).fill(0).map(v=>new Array(2));

    nums.forEach((v, i)=>{
        data[i][0] = v;
        data[i][1] = i;
    });

    data.sort((a,b)=>a[0]-b[0]);

    const ret = new Array(n);
    let pre = -1;
    for(let i = 0; i < n; i++){
        if (pre == -1 || data[i][0] !== data[i - 1][0]) {
            pre = i;
        }
        ret[data[i][1]] = pre;
    }

    return ret;
};
// @lc code=end

