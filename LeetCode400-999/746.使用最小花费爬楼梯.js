var minCostClimbingStairs = function(cost) {
    let dp0 = 0
    let dp1 = 0
    for(let i=2;i<=cost.length;i++){
        let min = Math.min(dp0 + cost[i-2],dp1+cost[i-1])
        dp0 = dp1
        dp1 = min
    }
    return dp1
};