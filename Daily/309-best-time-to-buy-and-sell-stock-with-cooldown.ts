/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 */

 /**
  * 
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
示例:

输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
*/

/**
 * 
 * 思路分析： 参考官方题解
 * 
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/zui-jia-mai-mai-gu-piao-shi-ji-han-leng-dong-qi-4/
 * 
 * 有三种状态, hold(当前持有股票),  frozen(当前处于冷冻状态), canBuy(可以买)
 * 
 * 设 dp[i] 为 第 i 天后, 对应状态下的利润。

 * 递推公式为:
 * 
 * 如果第 i 天后处于持有状态， 那么可能:
 *  1. 今天没有操作， 第 i - 1 天就持有。 (hold[i - 1])
 *  2. 今天买入。 (canBuy[i - 1] - prices[i])
 *  hold[i] = max(hold[i - 1], canBuy[i - 1] - prices[i])
 * 
 * 如果第 i 天后处于冷冻状态，那么可能：
 *  1.  i - 1 天持有, 第 i 天卖出
 * frozen[i] = hold[i - 1] + prices[i]
 * 
 * 如果第 i 天后处于可买状态，那么第 i 天没有操作, 且 i - 1 天没有股票， 可能：
 *  1. 前一天处于可买期 (canBuy[i - 1])
 *  2. 前一天处于冷冻期 (frozen[i - 1])
 * canBuy[i] = max(frozen[i - 1], canBuy[i - 1])
 * 
 * 
 * 初始条件
 * hold[0]  = -prices[0]
 * frozen[0] = 0;
 * canBuy[0] = 0;
 * 
 * 最终结果 = max(canBuy[n - 1], frozen[n - 1])
 * 
 * 因为每一天的状态只依赖前一天的状态， 所以空间上不需要数组， 只需要把前一天的状态记下来即可。
 * 
 */

 export default null;
 
function maxProfit(prices: number[]): number {
    if(prices.length == 0){
        return 0;
    }
    let hold = -prices[0];
    let frozen = 0;
    let canBuy = 0;

    let n = prices.length;
    for(let i = 1; i < n; i++){
        let holdTemp = hold;
        let frozenTemp = frozen;
        let price = prices[i];
        hold = Math.max(hold, canBuy - price);
        frozen = holdTemp + price;
        canBuy =  Math.max(frozenTemp, canBuy);
    }

    return Math.max(frozen, canBuy);
};