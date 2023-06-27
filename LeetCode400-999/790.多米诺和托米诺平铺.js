// 法一 dp 做状态转移  


// 分为四种状态，做状态转移，看不懂就看题解
// 可以空间优化
// var numTilings = function(n) {
//     let dp = new Array(n+1).fill(0).map(()=>new Array(4).fill(0))
//     dp[0][3] = 1
//     for(let i=1;i<=n;i++){
//         dp[i][0] = dp[i-1][3]%(Math.pow(10,9)+7)
//         dp[i][1] = (dp[i-1][0] + dp[i-1][2])%(Math.pow(10,9)+7)
//         dp[i][2] = (dp[i-1][0] + dp[i-1][1])%(Math.pow(10,9)+7)
//         dp[i][3] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3])%(Math.pow(10,9)+7)
//     }
//     return dp[n][3]
// };

// 法二找规律
var numTilings = function(n) {
    if(n<3) return n
    let a = 1
    let b = 1
    let c = 2
    for(let i=3;i<=n;i++){
        let d = (c*2+a)%(Math.pow(10,9)+7)
        a = b
        b = c
        c = d
    }
    return c
};
console.log(numTilings(4));