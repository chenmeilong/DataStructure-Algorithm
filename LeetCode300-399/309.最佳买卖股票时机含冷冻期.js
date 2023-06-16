var maxProfit = function(prices) {
    let dpHold = []
    let dpSale = []
    dpHold.push(-prices[0])
    dpSale.push(0)

    dpHold.push(Math.max(-prices[1],dpHold[0]))
    dpSale.push(Math.max(dpHold[0]+prices[1],dpSale[0]))

    for(let i=2 ; i<prices.length; i++){
        dpHold.push(Math.max(dpSale[i-2]-prices[i],dpHold[i-1]))  //因为冷冻期存在所以必须是i-2
        dpSale.push(Math.max(dpHold[i-1]+prices[i],dpSale[i-1]))
    }
    return dpSale[prices.length-1]
};
// 还可以继续空间优化

console.log(maxProfit([1,2,3,0,2]));