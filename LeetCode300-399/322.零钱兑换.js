var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity)  
    dp[0]  = 0  
    for(let i=1; i<=amount;i++){
        for(let j = 0 ; j<coins.length;j++){
            let leave = i-coins[j]
            if(leave>=0){
                dp[i] = Math.min(dp[i],dp[leave]+1)
            }
        }
    }
    return dp[amount]===Infinity?-1:dp[amount];
};
console.log(coinChange([1,2,5],11));