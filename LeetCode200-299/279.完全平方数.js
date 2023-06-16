// 时间n*n^1/2 空间n
var numSquares = function(n) {
    if(n<4) return n
    let dp = [] //记录次数
    for(let i = 0 ; i<n+1;i++){
        dp.push(i) //初始化
    }
    for(let i=4;i<=n;i++){
        for(let j=1;i-j*j>=0;j++){
            dp[i] = Math.min(dp[i],dp[i-j*j]+1)
        }
    }
    return dp[n]
};
console.log(numSquares(4)); 