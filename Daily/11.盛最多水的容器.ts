/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let i = 0; 
    let j = height.length - 1;
    let max = 0;
    while(i < j){
        let cap:number = (j - i) * Math.min(height[i], height[j]);
        if(cap > max){
            max = cap;
        }
        if(height[i] > height[j]){
            -- j;
        } else {
            ++i;
        }
    }
    return max;
};
// @lc code=end

