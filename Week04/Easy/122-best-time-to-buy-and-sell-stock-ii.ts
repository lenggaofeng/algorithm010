/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

 function maxProfit(prices: number[]): number {
    let count = 0
    let current = prices[0]
    for (let i of prices) {
      if (i < current) {
        current = i
      }
      if (i > current) {
        count += (i - current)
        current = i
      }
    }
    return count
  };