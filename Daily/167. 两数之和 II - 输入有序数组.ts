/**
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 */

 export default null;
function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1; 
    while(left < right){
        let cnt = numbers[left] + numbers[right];
        if(cnt == target){
            return [left + 1, right + 1];
        } else if(cnt < target){
            left ++;
        } else {
            right --;
        }
    }
    return []
};