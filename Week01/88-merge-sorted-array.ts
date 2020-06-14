/**
 Do not return anything, modify nums1 in-place instead.
 */
//思路 先把 nums1 数组的所有内容都挪到后面， 防止覆盖，然后使用两个指针分别之后 nums1 和 nums2 的内容的头部， 小的指针先走
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let cnt = m + n;
    let last = cnt - 1;
    for(let i = m - 1; i >= 0; i--){
        nums1[last --] = nums1[i];
    }
    let i = n;
    let j = 0;
    let k = 0;
    while(i < cnt || j < n){
        if(i >= cnt ){
            nums1[k++] = nums2[j++];
        } else if( j >= n){
            nums1[k++] = nums1[i++];
        } else if(nums1[i] <= nums2[j]){
            nums1[k++] = nums1[i++];
        } else{
            nums1[k++] = nums2[j++];
        }
    }
};