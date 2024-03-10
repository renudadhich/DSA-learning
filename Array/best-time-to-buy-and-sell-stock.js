/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let buy_price=prices[0], maxProfit =0;
    for(var index =1; index < prices.length; index++) {
        let current_price = prices[index], current_profit;
      if(buy_price > current_price) {
          buy_price = current_price;
      } else {
          current_profit = current_price - buy_price;
          maxProfit = Math.max(maxProfit, current_profit)
      }

    }
    return maxProfit;
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));