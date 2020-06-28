/**
 * https://leetcode-cn.com/problems/combinations/
 */

/**
 * 思路1 : 回溯法， 从 1 开始直到 n， 挨个尝试作为首个数字. 从 i + k 到 n, 挨个尝试作为第k个数字, 直到达到所需的数量
 */
function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    function pickNum(first:number, temp:number[]){
        if(temp.length >= k){
            result.push(temp.slice());
            return;
        }

        for(let i = first; i <= n; i++){
            temp.push(i);
            pickNum(i + 1, temp);
            temp.pop();
        }
    }
    pickNum(1, []);
    return result;
};

// console.log(combine(4, 2));