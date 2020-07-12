/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
export default null;

function fourSum(nums:number[], target:number):number[][] {
    if(nums.length < 4){
        return [];
    }

    nums.sort((a,b)=>a-b);

    let results:number[][] = [];
    let len = nums.length;
    for(let i = 0; i < len - 3; i ++){
        let a = nums[i];
        if(i > 0 && a == nums[i - 1]){
            continue;
        }
        if(a > 0 && a > target){
            break;
        }

        for(let j = i + 1; j < len - 2; j++){
            let b = nums[j];            
            let left = j + 1;
            if(j > i + 1 && b == nums[j - 1]){
                continue;
            }
    
            if(nums[left] > 0 && a + b + nums[left] > target){
                break;
            }

            let right = len - 1;
            let need = target - a - b;
            while(left < right){
                let sum = nums[left] + nums[right];
                if(sum == need){
                    results.push([a, b, nums[left], nums[right]]);
                    while(left < right && nums[left] == nums[left + 1]){
                        left ++;
                    }
                    while(left < right && nums[right] == nums[right - 1]){
                        right --;
                    }
                    left ++;
                    right --;
                } else if(sum > need){
                    right --;
                } else {
                    left ++;
                }
            }
        }
    }
    return results;
};

let res = fourSum([1,-2,-5,-4,-3,3,3,5], -11)
console.log(res)

