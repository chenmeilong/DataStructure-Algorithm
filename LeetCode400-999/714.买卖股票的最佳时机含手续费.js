var maxProfit = function(prices, fee) {
    let hold = -prices[0]
    let sale = 0
    for(let i=1;i<prices.length;i++) {
        let buffHold = hold
        hold = Math.max(hold,sale-prices[i])
        sale = Math.max(sale,buffHold+prices[i]-fee)
    }
    return sale
};

console.log(maxProfit([1, 3, 2, 8, 4, 9],2));