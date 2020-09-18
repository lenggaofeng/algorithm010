import { testWithResult, CompBase } from "./Test";

export default null;

function numTriplets(nums1: number[], nums2: number[]): number {
    function toMap(nums: number[]) {
        const map = new Map<number, number>();
        nums.forEach(v => {
            map.set(v, (map.get(v) || 0) + 1);
        });
        return map;
    }
    function getTupleCnt(orderNums1:number[], map1: Map<number, number>, orderNums2:number[], map2: Map<number, number>) {
        let cnt = 0;
        orderNums1.forEach(num1 => {
            const pow = num1 * num1;
            for (let i = 0, l = orderNums2.length; i < l; i++){
                const num2 = orderNums2[i];

                if (num2 > pow) { break;}
                if (pow % num2 !== 0) { continue;}

                let target = pow / num2;
                if (num2 > target) { break; }

                if (!map2.has(target)) { continue;}

                let timesSrc = map1.get(num1) as number;
                let time1 = map2.get(num2) as number;
                if (num2 == target) {
                    cnt += timesSrc * time1 * (time1 - 1) / 2;
                } else {
                    let times2 = map2.get(target) as number;
                    cnt += timesSrc * time1 * times2;
                }
            }
           
        });
        return cnt;
    }

    let map1 = toMap(nums1);
    let map2 = toMap(nums2);
    let orderNums1 = [...map1.keys()].sort((a, b) => a - b);
    let orderNums2 = [...map2.keys()].sort((a, b) => a - b);
    // console.log(orderNums1, map1, orderNums2, map2);
    return getTupleCnt(orderNums1, map1, orderNums2, map2)
        + getTupleCnt(orderNums2, map2, orderNums1, map1);
};

testWithResult<[number[], number[]], number>([
    { input: [[7, 4], [5, 2, 8, 9]], output: 1 },
    { input: [[1, 1], [1, 1, 1]], output: 9 },
    { input: [[7, 7, 8, 3], [1, 2, 9, 7]], output: 2 },
    { input: [[4, 7, 9, 11, 23], [3, 5, 1024, 12, 18]], output: 0 },
], ([nums1, nums2]) => {
    return numTriplets(nums1, nums2);
}, CompBase);
