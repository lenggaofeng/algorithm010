/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

import { Case, CompBase, testWithResult } from "./Test";

// @lc code=start
//从左到右遍历一次， 然后再从右到左遍历一次，取最高值
function candy(ratings: number[]): number {
    const n = ratings.length;
    const candies = new Array(n).fill(1);
    for (let i = 1; i < n; i++){
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    let count = candies[n - 1];
    for (let i = n - 2; i >= 0; i--){
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i + 1] + 1, candies[i])
        }
        count += candies[i];
    }
    return count;
};
// @lc code=end

// 根据坡度，计算每次爬坡或下坡需要的糖果数
const enum SlopeState {
    Down = -1,
    Stay = 0,
    Up = 1,
}

function count(n:number) {
    return n * (n + 1) / 2;
}

function candySlope(ratings: number[]): number {
    let candy = 0;
    let up = 0;
    let down = 0;
    let preState = SlopeState.Stay;
    const n = ratings.length;
    for (let i = 1; i < n; i++) {
        const diff = ratings[i] - ratings[i - 1];
        const state = diff > 0 ? SlopeState.Up : (diff < 0 ? SlopeState.Down : SlopeState.Stay);

        //一个山坡结束， 有两种情况，(第一次爬坡到中途，开始了一个新坡) 和 (下坡结束)
        if ((preState == SlopeState.Up && state == SlopeState.Stay) || (preState == SlopeState.Down && state != SlopeState.Down)) {
            // 这里不 +1, 是因为两个山坡之间有一个重复的 坡底 = 1, 避免重复计算
            candy += count(up) + count(down) + Math.max(up, down);
            up = down = 0;
        }

        switch (state) {
            case SlopeState.Up:
                up++;
                break;
            case SlopeState.Down:
                down++;
                break;
            case SlopeState.Stay:
                //这里因为相当于要重新开一个山坡， 所以要把上面减掉的坡底的那个 1 加回来
                candy ++;
        }

        preState = state;
    }

    //计算最后的整个山坡
    candy += count(up) + count(down) + Math.max(up, down) + 1;
    return candy;
}

const cases: Case<number[], number>[] = [
    { input: [1, 0, 2], output: 5 },
    {input: [1,2,2], output: 4}
]
testWithResult(cases, candySlope);

