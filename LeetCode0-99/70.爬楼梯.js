/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [1,1,1]
    for(let i = 2; i <=n;i++){
        dp[2] = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = dp[2]
    }
    return dp[1]
};

console.log(climbStairs(3));