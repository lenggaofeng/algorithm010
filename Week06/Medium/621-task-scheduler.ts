/**
 * https://leetcode-cn.com/problems/task-scheduler/
 */

 /**
  * 参考题解 https://leetcode-cn.com/problems/task-scheduler/solution/tong-zi-by-popopop/
  * 桶思想， 找出重复次数最多的任务, 令 n+1时间为一桶，则该任务至少需要花费 (次数-1) * (n+1) + 1;
  * 这个时候，再把剩下的任务放到安排第一个任务所空闲的格子中去， 当任务次数等于最多的任务时，需要扩展最后一个桶。
  * 如果任务特别多，空桶都塞不下， 则可以考虑将前面的桶扩大， 把多余的任务塞进去，(因为桶扩大了， 所以每两个重复任务之间不需要再有空闲时间)，这样总的花费时间即为任务总数。
  */

function leastInterval(tasks: string[], n: number): number {
    const cnt = tasks.length;
    if(tasks.length <= 1){
        return tasks.length;
    }

    let cnts:number[] = new Array(26).fill(0);
    const ACode = 'A'.charCodeAt(0);
    tasks.forEach(v=>{
        cnts[v.charCodeAt(0) - ACode] += 1;
    });

    // cnts = cnts.filter(v=>v);
    const maxTime = Math.max(...cnts);
    let extendCnt = 0;
    cnts.forEach(v=>{
        if(v == maxTime){
            extendCnt ++;
        }
    })
    return Math.max((maxTime - 1) * (n + 1) + extendCnt, tasks.length);
};
// console.log(leastInterval(["A","A","A","B","B","B"], 2));