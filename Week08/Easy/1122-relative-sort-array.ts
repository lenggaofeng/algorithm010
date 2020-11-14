/**
 * https://leetcode-cn.com/problems/relative-sort-array/
 */

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let map = new Map<number, number>();
    arr2.forEach((v, i)=>{
        map.set(v, i);
    });

    let m = arr2.length;
    function getI(n:number){
        return map.has(n) ? (map.get(n) as number) : m + n;
    }

    arr1.sort((a, b)=>{
        return getI(a) - getI(b);
    });
    return arr1;
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))