// [link](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

//从前往后遍历数组， 对于每个数字， 如果不存在，将它换到前面
function removeDuplicates(nums: number[]): number {
    let cnt = 1;
    for(let i = 1, l = nums.length; i < l; i++){
        let val = nums[i];
        let found = false;
        for(let j = 0; j < cnt; j++){
            if(nums[j] == val){
                found = true;
                break;
            }
        }
        if(!found){
            nums[cnt] = val;
            cnt ++;
        }
    }
    return cnt;
};

// let a = [0,0,1,1,1,2,2,3,3,4];
// let n = removeDuplicates(a);
// console.log(n, a);