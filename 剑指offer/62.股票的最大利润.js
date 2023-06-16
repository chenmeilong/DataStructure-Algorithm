/**
 * @param {number[]} prices
 * @return {number}
 */
//暴力双循环
var maxProfit = function(prices) {
    let profit=0
    for(let i = 0 ; i < prices.length ; i++){
        for(let j = i+1; j< prices.length ; j++){
            if ((prices[j] - prices[i]) > profit){
                profit = prices[j] - prices[i]
            }
        }
    }
    return profit
};

//动态规划
var maxProfit = function(prices) {
    let profit = 0
    let minValue = prices[0]
    prices.forEach(item=>{
        if(item<minValue) minValue = item
        if(item-minValue>profit) profit = item-minValue
    })
    return profit
};



console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([2,4,1]))