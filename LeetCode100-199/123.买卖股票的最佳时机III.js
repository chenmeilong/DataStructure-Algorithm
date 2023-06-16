// DP
// var maxProfit = function(prices) {
//     let dp =  new Array(prices.length).fill(0).map(()=>new Array(4).fill(0))
//     dp[0][0] = -prices[0] 
//     dp[0][2] = -Infinity
//     for(let i=1; i<prices.length;i++){
//         dp[i][0] = Math.max(dp[i-1][0],-prices[i])
//         dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
//         dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1]-prices[i]) //注意这里的买入必须在前面的卖出之后
//         dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2]+prices[i])
//     }
//     return Math.max(dp[prices.length-1][1],dp[prices.length-1][3])
// };
// DP优化
var maxProfit = function(prices) {
    // 必须初始化成这样不然过不去
    let buy1 = -prices[0] 
    let buy2 =  -prices[0] 
    let sale1 = 0
    let sale2 = 0
    for(let i=1; i<prices.length;i++){
        let buff_sale1 = sale1
        sale1 = Math.max(sale1,buy1+prices[i])
        buy1 = Math.max(buy1,-prices[i])

        sale2 = Math.max(sale2,buy2+prices[i])
        buy2 = Math.max(buy2,buff_sale1-prices[i]) //注意这里的买入必须在前面的卖出之后
    }
    return Math.max(sale1,sale2)
};
console.log(maxProfit([3,3,5,0,0,3,1,4]));