// 动态规划  动态规划+状态机
var maxProfit = function(prices) {
    let dpHold = []
    let dpSale = []
    dpHold.push(-prices[0])
    dpSale.push(0)
    for(let i=1 ; i<prices.length; i++){
        dpHold.push(Math.max(dpSale[i-1]-prices[i],dpHold[i-1]))
        dpSale.push(Math.max(dpHold[i-1]+prices[i],dpSale[i-1]))
    }
    return dpSale[prices.length-1]
};
// 空间优化
// var maxProfit = function(prices) {
//     let dpHold = -prices[0]
//     let dpSale = 0
//     for(let i=1 ; i<prices.length; i++){
//         let buff = dpHold
//         dpHold = Math.max(dpSale-prices[i],dpHold)
//         dpSale = Math.max(buff+prices[i],dpSale)
//     }
//     return dpSale
// };

// 贪心算法 问题转化为寻找不相交区间的差值的最大
// var maxProfit = function(prices) {
//     let ans = 0;
//     for (let i = 1; i < prices.length; ++i) {
//         ans += Math.max(0, prices[i] - prices[i - 1]);
//     }
//     return ans;
// };

console.log(maxProfit([7,1,5,3,6,4]));